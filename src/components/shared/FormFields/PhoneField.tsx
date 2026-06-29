"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IFormField, ValidationErrors } from "@/types/app";

interface Props extends IFormField {
  error: ValidationErrors;
  value?: string;
  onChange?: (value: string) => void;
}

const normalizeEgyptPhone = (val: string): string => {
  let v = val.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString());

  v = v.replace(/[^0-9]/g, "");

  if (v.startsWith("0020")) v = "0" + v.slice(4);
  else if (v.startsWith("20")) v = "0" + v.slice(2);

  return v;
};

const isValidEgyptPhone = (phone: string): boolean => {
  return /^01[0125]\d{8}$/.test(phone);
};

export default function PhoneField({
  label,
  name,
  placeholder = "01XXXXXXXXX",
  disabled,
  autoFocus,
  error,
  readOnly,
  desc,
  value = "",
  onChange,
}: Props) {
  const normalizedValue = normalizeEgyptPhone(value);

  const handleChange = (raw: string) => {
    const val = normalizeEgyptPhone(raw);

    if (val.length > 11) return;

    onChange?.(val);
  };

  const hasError = Boolean(error && error[name]);
  const isInvalid =
    normalizedValue.length === 11 && !isValidEgyptPhone(normalizedValue);

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="capitalize font-semibold mb-2">
        {label}
      </Label>

      <Input
        type="text"
        inputMode="numeric"
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        name={name}
        id={name}
        readOnly={readOnly}
        className="focus:ring-0!"
        value={normalizedValue}
        onChange={(e) => handleChange(e.target.value)}
      />

      {desc && <p className="text-xs text-muted-foreground">{desc}</p>}

      {!hasError && isInvalid && (
        <p className="text-destructive mt-2 text-sm font-medium">
          رقم غير صالح (لازم يبدأ بـ 010 / 011 / 012 / 015 ويكون 11 رقم)
        </p>
      )}
    </div>
  );
}
