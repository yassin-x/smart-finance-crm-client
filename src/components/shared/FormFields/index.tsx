import { InputTypes } from "@/constants/enums";
import { IFormField, ValidationErrors } from "@/types/app";
import TextField from "./TextField";
import PasswordField from "./PasswordField";
import NumberField from "./NumberField";
import PhoneNumber from "./PhoneNumber";
import RadioField from "./RadioButtons";

interface Props extends IFormField {
  error: ValidationErrors;
}

const FormFields = (props: Props) => {
  const { type } = props;
  const renderField = (): React.ReactNode => {
    if (type === InputTypes.EMAIL || type === InputTypes.TEXT) {
      return <TextField {...props} />;
    }

    if (type === InputTypes.PASSWORD) {
      return <PasswordField {...props} />;
    }

    if (type === InputTypes.NUMBER) {
      return <NumberField {...props} />;
    }
    if (type === InputTypes.PHONE) {
      return <PhoneNumber {...props} />;
    }

   if (type === InputTypes.RADIO) {
     return <RadioField {...props} />;
   }
    return <TextField {...props} />;
  };

  return <>{renderField()}</>;
};

export default FormFields;
