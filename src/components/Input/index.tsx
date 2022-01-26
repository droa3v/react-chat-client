import React, { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: "username" | "email" | "password" | "confirm";
  label: string;
  error?: FieldError;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={id} className={styles.label}>
          <input name={id} {...rest} ref={ref} className={styles.input} />
          <span className={styles.helper}>{error ? error.message : label}</span>
        </label>
      </>
    );
  }
);

Input.displayName = "Input";
