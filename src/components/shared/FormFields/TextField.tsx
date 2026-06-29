/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { IFormField, ValidationErrors } from "@/types/app";
// import React, { useState } from "react";

// interface Props extends IFormField {
//   error: ValidationErrors;
// }

// export default function TextField({
//   label,
//   name,
//   type,
//   placeholder,
//   disabled,
//   autoFocus,
//   error,
//   defaultValue,
//   readOnly,
//   desc,
// }: Props) {
//   const [value, setValue] = useState(defaultValue || "");
//   const isNumber = type === "number";
//   return (
//     <div className="space-y-2">
//       <Label htmlFor={name} className="capitalize font-semibold mb-2">
//         {label}
//       </Label>

//       {/* <Input
//         type={type}
//         placeholder={placeholder}
//         disabled={disabled}
//         autoFocus={autoFocus}
//         name={name}
//         id={name}
//         defaultValue={defaultValue}
//         readOnly={readOnly}
//         className="focus:ring-0!"
//       /> */}
//       <Input
//         type={isNumber ? "text" : type}
//         inputMode={isNumber ? "numeric" : undefined}
//         placeholder={placeholder}
//         disabled={disabled}
//         autoFocus={autoFocus}
//         name={name}
//         id={name}
//         defaultValue={defaultValue}
//         readOnly={readOnly}
//         className="focus:ring-0!"
//         value={value}
//         onChange={(e) => {
//           let val = e.target.value;

//           if (isNumber) {
//             val = val
//               .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString())
//               .replace(/[^0-9]/g, "");
//           }

//           setValue(val);
//         }}
//       />
//       {desc && <p className="text-xs text-muted-foreground">{desc}</p>}
//       {error && error[name] && (
//         <p
//           className={`text-accent mt-2 text-sm font-medium ${
//             error[name] ? "text-destructive" : ""
//           }`}
//         >
//           {error[name]}
//         </p>
//       )}
//     </div>
//   );
// }
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IFormField, ValidationErrors } from "@/types/app";

interface Props extends IFormField {
  error: ValidationErrors;
  value?: any;
  onChange?: (value: any) => void;
}

export default function TextField({
  label,
  name,
  type,
  placeholder,
  disabled,
  autoFocus,
  error,
  readOnly,
  desc,
  value,
  onChange,
  min,
  max,
}: Props) {
  const isNumber = type === "phone";

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="capitalize font-semibold mb-2">
        {label}
      </Label>

      <Input
        type={isNumber ? "text" : type}
        inputMode={isNumber ? "numeric" : undefined}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        min={min || undefined}
        max={max || undefined}
        name={name}
        id={name}
        readOnly={readOnly}
        className="focus:ring-0!"
        value={value}
        onChange={(e) => {
          let val = e.target.value;

          if (isNumber) {
            val = val
              .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString())
              .replace(/[^0-9]/g, "");
          }

          onChange?.(val);
        }}
      />

      {desc && <p className="text-xs text-muted-foreground">{desc}</p>}

      {error && error[name] && (
        <p className="text-destructive mt-2 text-sm font-medium">
          {error[name]}
        </p>
      )}
    </div>
  );
}
