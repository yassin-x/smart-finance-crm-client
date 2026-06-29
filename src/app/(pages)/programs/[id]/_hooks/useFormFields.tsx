import { Form } from "@/constants/enums";
import { IFormField, IFormFieldsVariables } from "@/types/app";

const useFormFields = ({ slug }: IFormFieldsVariables) => {
  const dynamicFormFields = (): IFormField[] => [
    {
      name: "name",
      label: "الاسم رباعي",
      type: "text",
      placeholder: "الاسم رباعي",
      desc: "اسمك بلغة العربية",
    },
    {
      name: "job",
      label: "الوظيفة",
      type: "text",
      placeholder: "الوظيفة",
      desc: "اكتب وظيفتك",
    },
    {
      name: "phone",
      label: "رقم الهاتف",
      type: "phone",
      placeholder: "رقم الهاتف",
      desc: "ادخل رقم هاتفك",
    },
  ];

  const getFormFields = (): IFormField[] => {
    switch (slug) {
      case Form.DYNAMIC:
        return dynamicFormFields();
      default:
        return [];
    }
  };

  return {
    getFormFields,
  };
};

export default useFormFields;
