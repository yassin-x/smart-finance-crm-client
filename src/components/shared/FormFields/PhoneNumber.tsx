"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { IFormField, ValidationErrors } from "@/types/app";
import { useState } from "react";

interface Props extends IFormField {
  error: ValidationErrors;
  value?: string;
  onChange?: (value: string) => void;
}

const normalize = (val: string) => {
  return val
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString())
    .replace(/[^0-9]/g, "");
};

const isValidEgyptPhone = (phone: string) => {
  return /^(010|011|012|015)\d{8}$/.test(phone);
};

export default function PhoneNumber({
  label,
  name,
  placeholder,
  disabled,
  autoFocus,
  error,
  readOnly,
  desc,
  value = "",
  onChange,
}: Props) {
  const [touched, setTouched] = useState(false);

  const normalized = normalize(value);
  const isTooShort = normalized.length > 0 && normalized.length < 11;
  const isInvalid = normalized.length === 11 && !isValidEgyptPhone(normalized);

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="font-semibold mb-2">
        {label}
      </Label>

      <div className="relative">
        {/* Prefix */}
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
          +2
        </span>

        <Input
          type="tel"
          inputMode="numeric"
          placeholder={placeholder || "10XXXXXXXX"}
          disabled={disabled}
          autoFocus={autoFocus}
          name={name}
          id={name}
          autoComplete="off"
          readOnly={readOnly}
          className={cn(
            "pl-12 tracking-widest",
            touched && (isTooShort || isInvalid) && "border-red-500",
          )}
          value={normalized}
          onChange={(e) => {
            setTouched(true);

            const val = normalize(e.target.value).slice(0, 11);
            onChange?.(val);
          }}
          onBlur={() => setTouched(true)}
        />
      </div>

      {desc && <p className="text-xs text-muted-foreground">{desc}</p>}

      {touched && isTooShort && (
        <p className="text-destructive text-xs">الرقم لازم يكون 11 رقم</p>
      )}

      {touched && isInvalid && (
        <p className="text-destructive text-xs">
          لازم يكون رقم موبايل مصري صحيح (010 / 011 / 012 / 015)
        </p>
      )}

      {error && error[name] && (
        <p className="text-destructive text-sm">{error[name]}</p>
      )}
    </div>
  );
}
