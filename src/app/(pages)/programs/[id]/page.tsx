/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { usePathname } from "next/navigation";
// import useFormFields from "./_hooks/useFormFields";
// import { Form } from "@/constants/enums";
// import { useProgramTemplate } from "./_actions/getTemplate";
// import FormFields from "@/components/shared/FormFields";

// export default function SingleProgram() {
//   const slug = usePathname().split("/").pop();
//   const { getFormFields } = useFormFields({
//     slug: Form.DYNAMIC,
//   });
//   const { data, isLoading } = useProgramTemplate(slug as string);

//   if (isLoading) return <div>loading</div>;
//   console.log(data);
//   console.log(getFormFields());
//   return (
//     <main className="container section-gap">
//       <div className="flex flex-col items-center bg-background/70 border border-border rounded-md shadow-md max-w-md mx-auto">
//         <div className="p-4 border-b">
//           <h1 className="text-xl font-bold text-primary tracking-tight">
//             {data?.data?.title}
//           </h1>
//         </div>
//         <div className="p-4 w-full">
//           <form className="space-y-4 w-full!">
//             {getFormFields().map((field) => (
//               <div key={field.name}>
//                 <FormFields {...field} error={{}} />
//               </div>
//             ))}
//             {data.data?.questions.map((question) => (
//               <div key={question.name}>
//                 <FormFields {...question} error={{}} />
//               </div>
//             ))}
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import useFormFields from "./_hooks/useFormFields";
import { Form } from "@/constants/enums";
import { useProgramTemplate } from "./_actions/getTemplate";
import FormFields from "@/components/shared/FormFields";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCreateLead } from "./_actions/addLead";
import { useForm, Controller } from "react-hook-form";

export default function SingleProgram() {
  const slug = usePathname().split("/").pop();

  const { mutate, isPending } = useCreateLead();

  const { getFormFields } = useFormFields({
    slug: Form.DYNAMIC,
  });

  const { data, isLoading } = useProgramTemplate(slug as string);

  const fields = useMemo(() => {
    const staticFields = getFormFields() || [];
    const dynamicFields = data?.data?.questions || [];

    return [...staticFields, ...dynamicFields].sort(
      (a, b) => (a.order || 0) - (b.order || 0),
    );
  }, [data, getFormFields]);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Record<string, any>>({
    mode: "onChange",
  });

  const fieldLabelMap = useMemo(() => {
    const map: Record<string, string> = {};

    fields.forEach((field) => {
      map[field.name] = field.label;
    });

    return map;
  }, [fields]);

  const onSubmit = (formData: Record<string, any>) => {
    mutate(
      {
        slug: slug as string,
        data: {
          name: formData.name,
          job: formData.job,
          phone: formData.phone,
          answers: Object.entries(formData)
            .filter(([key]) => !["name", "job", "phone"].includes(key))
            .map(([key, value]) => ({
              question: fieldLabelMap[key] || key,
              answer: value,
            })),
        },
      },
      {
        onSuccess: () => {
          toast.success("تم الإرسال بنجاح");
          reset();
        },
        onError: (err: any) => {
          const message =
            err?.response?.data?.message || err?.message || "حصل خطأ غير متوقع";

          toast.error(message);
        },
      },
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground">
            جاري تحميل البيانات...
          </p>
        </div>
      </div>
    );
  }
  return (
    <main className="container section-gap mt-20">
      <div className="flex flex-col items-center bg-background/70 border border-border rounded-md shadow-md max-w-md mx-auto">
        <div className="p-4 border-b w-full text-center">
          <h1 className="text-xl font-bold text-primary tracking-tight">
            {data?.data?.title}
          </h1>
        </div>

        <div className="p-4 w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            {fields.map((field) => {
              return (
                <div key={field.name}>
                  <Controller
                    name={field.name}
                    control={control}
                    defaultValue=""
                    render={({ field: controllerField }) => (
                      <FormFields
                        {...field}
                        value={controllerField.value}
                        onChange={controllerField.onChange}
                        min={field?.rules?.min}
                        max={field?.rules?.max}
                        error={errors}
                      />
                    )}
                  />
                </div>
              );
            })}

            <Button disabled={isPending} className="w-full">
              {isPending ? "جارٍ الإرسال..." : "إرسال"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
