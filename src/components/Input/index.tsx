import * as React from "react";
import clsx from "clsx";
import css from "./css.module.scss";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  name?: string;
  label: React.ReactNode;
  type?: "tel" | "text" | "date" | "number" | "search" | "password";
  errorMessage?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  value?: string | number;
}

const Input: React.FC<Props> = ({
  name,
  type,
  value,
  label,
  onBlur,
  onChange,
  required,
  disabled,
  readOnly,
  maxLength,
  className,
  errorMessage,
  ...props
}) => {
  const loading = "Carregando...";
  const [internal, setInternal] = React.useState("");

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (type === "number" && !e.target.validity.valid) {
      e.target.value = "";
      setInternal("");
    }

    onBlur && onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (maxLength && e.target.value && maxLength < e.target.value.length) {
      e.target.value = String(e.target.value).substring(maxLength, 0);
    }

    setInternal(e.target.value);
    onChange && onChange(e);
  };

  return (
    <div
      aria-label={loading}
      className={clsx(className, css["input"], css[`-${type}`], {
        [css["-invalid"]]: !!errorMessage && !disabled,
        [css["-disabled"]]: disabled,
        [css["-readonly"]]: readOnly,
      })}
      {...props}>
      <input
        id={`${name}-input`}
        name={name}
        type={type}
        value={value !== undefined ? value : internal}
        onBlur={handleBlur}
        onChange={handleChange}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        minLength={maxLength ? 0 : undefined}
        maxLength={maxLength}
        className={clsx(css["input"], {
          [css["-filled"]]: !!(value !== undefined ? value : internal) || (type === "number" && value === 0),
        })}
        tabIndex={disabled || readOnly ? -1 : 0}
        data-input=""
        autoComplete="off"
        aria-invalid={errorMessage && !disabled ? "true" : "false"}
        aria-readonly={readOnly ? "true" : "false"}
        aria-disabled={disabled ? "true" : "false"}
        aria-required={required ? "true" : "false"}
        aria-labelledby={`${name}-input-label`}
        aria-errormessage={`${name}-input-error`}
        {...props}
      />

      <label id={`${name}-input-label`} htmlFor={`${name}-input`} className={css["label"]} data-label="">
        {label} {!required && !disabled && "(Opcional)"}
      </label>

      <p
        aria-hidden={!!errorMessage && !disabled ? "false" : "true"}
        className={clsx(css["message"], css["-invalid"], className)}
        {...props}>
        {errorMessage}
      </p>
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;