"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IFormField } from "@/types/app";
import Link from "next/link";
import useFormFields from "../_hooks/useFormFIelds";
import { Form } from "@/constants/enums";
import FormFields from "@/components/shared/FormFields";
import { useLogin } from "../_actions/signIn";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { getFormFields } = useFormFields({ slug: Form.SIGNIN });
  const { mutate } = useLogin();
  const navigate = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    mutate(formData, {
      onSuccess: () => navigate.push("/dashboard/admin"),
      onError: (err) => console.log(err),
    });
  };
  return (
    <section className="w-full">
      <Card className="w-full border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-primary">تسجيل الدخول</CardTitle>
          <CardDescription className="text-muted-foreground">
            سجل الدخول للوصول للوحة التحكم
          </CardDescription>
        </CardHeader>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <CardContent className="space-y-3">
            {getFormFields().map((field: IFormField) => (
              <FormFields key={field.name} {...field} error={{}} />
            ))}
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button
              type="submit"
              className="
            w-full
            bg-primary text-primary-foreground
            hover:opacity-90
          "
            >
              تسجيل
            </Button>

            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-primary transition"
            >
              العودة للرئيسية
            </Link>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
