import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
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
  const isBelowMin = value !== null && min !== undefined && value! < min;

  const isAboveMax = value !== null && max !== undefined && value! > max;
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
        className={cn(
          "focus:ring-0!",
          (isBelowMin || isAboveMax) && "border-red-500",
        )}
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

          if (max !== undefined && num > max) {
            num = max;
          }

          onChange?.(num);
        }}
        onBlur={() => {
          if (value === null || value === undefined) return;

          // let num = value;

          // if (min !== undefined && num < min) {
          //   num = 0;
          // }

          // if (max !== undefined && num > max) {
          //   num = 0;
          // }

          onChange?.(value);
        }}
      />

      {desc && <p className="text-xs text-muted-foreground">{desc}</p>}
      {isBelowMin && (
        <p className="text-destructive mt-2 text-sm font-medium">
          أقل قيمة مسموح بها هي {min}
        </p>
      )}

      {isAboveMax && (
        <p className="text-destructive mt-2 text-sm font-medium">
          أكبر قيمة مسموح بها هي {max}
        </p>
      )}
      {error && error[name] && (
        <p className="text-destructive mt-2 text-sm font-medium">
          {error[name]}
        </p>
      )}
    </div>
  );
}
