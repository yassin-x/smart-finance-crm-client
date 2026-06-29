"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IFormField, ValidationErrors } from "@/types/app";

interface Props extends IFormField {
  error: ValidationErrors;
  value?: string;
  onChange?: (value: string) => void;
}

export default function RadioField({
  label,
  name,
  error,
  value,
  onChange,
  options,
}: Props) {
  return (
    <div className="space-y-3">
      <Label className="font-semibold">{label}</Label>

      <RadioGroup
        value={value}
        onValueChange={(val) => onChange?.(val)}
        className="flex flex-col gap-2"
      >
        {options?.map((opt) => (
          <label
            key={opt.value}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition",
              value === opt.value
                ? "border-primary bg-primary/5"
                : "hover:bg-muted",
            )}
          >
            <RadioGroupItem value={opt.value} />
            <span className="text-sm">{opt.label}</span>
          </label>
        ))}
      </RadioGroup>

      {error && error[name] && (
        <p className="text-destructive text-sm">{error[name]}</p>
      )}
    </div>
  );
}
