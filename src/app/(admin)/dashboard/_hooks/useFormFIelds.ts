import { Form } from "@/constants/enums";
import { IFormField, IFormFieldsVariables } from "@/types/app";

const useFormFields = ({ slug }: IFormFieldsVariables) => {
  const signInFields = (): IFormField[] => [
    {
      name: "email",
      label: "البريد الالكتروني",
      type: "email",
      placeholder: "example@.com",
      required: true,
    },
    {
      name: "password",
      label: "الرقم السري",
      type: "password",
      placeholder: "*********",
      required: true,
    },
  ];

  const getFormFields = (): IFormField[] => {
    switch (slug) {
      case Form.SIGNIN:
        return signInFields();
      default:
        return [];
    }
  };
  return {
    getFormFields,
  };
};

export default useFormFields;
