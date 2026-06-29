import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IFormField, ValidationErrors } from "@/types/app";

interface Props extends IFormField {
  error: ValidationErrors;
  value?: number | null;
  onChange?: (value: number | null) => void;
}

const formatNumber = (val: number | null) => {
  if (val === null || val === undefined) return "";
  return val.toLocaleString("en-US");
};

export default function NumberField({
  label,
  name,
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
  console.log(name, label, placeholder);
  console.log(name, value);
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
        value={formatNumber(value ?? null)}
        onChange={(e) => {
          let val = e.target.value;

          // normalize
          val = val
            .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString())
            .replace(/,/g, "")
            .replace(/[^0-9]/g, "");

          if (!val) {
            onChange?.(null);
            return;
          }

          let num = Number(val);

          // 🔴 منع تعدي max
          if (max !== undefined && num > max) {
            num = max;
          }

          onChange?.(num);
        }}
        onBlur={() => {
          if (value === null || value === undefined) return;

          let num = value;

          // 🟡 clamp min عند الخروج (UX أحسن)
          if (min !== undefined && num < min) {
            num = min;
          }

          // 🟡 clamp max احتياطي
          if (max !== undefined && num > max) {
            num = max;
          }

          onChange?.(num);
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
