"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IFormField, ValidationErrors } from "@/types/app";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

interface Props extends IFormField {
  error: ValidationErrors;
}

export default function PasswordField({
  label,
  name,
  placeholder,
  disabled,
  autoFocus,
  error,
  defaultValue,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="capitalize font-semibold mb-2">
        {label}
      </Label>
      <div className="relative flex items-center">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          autoComplete="off"
          name={name}
          id={name}
          defaultValue={defaultValue}
          className="focus:ring-0!"
        />

        <button
          type="button"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          className={`absolute left-3`}
        >
          {showPassword ? (
            <EyeOffIcon className="h-4 w-4" />
          ) : (
            <EyeIcon className="h-4 w-4" />
          )}
        </button>
      </div>
      {error && error[name] && (
        <p
          className={`text-accent mt-2 text-sm font-medium ${
            error[name] ? "text-destructive" : ""
          }`}
        >
          {error[name]}
        </p>
      )}
    </div>
  );
}
