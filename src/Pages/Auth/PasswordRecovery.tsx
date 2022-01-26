import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Register.module.scss";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button/Button";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .email("You must provide a valid email")
    .trim(),
});

interface FormValues {
  email: string;
}

export const PasswordRecovery: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        id="email"
        label="Email"
        error={errors.email}
        {...register("email")}
      />
      <Button
        type="submit"
        onClick={() => {
          const values = getValues();
          console.log(values);
        }}
      >
        Submit
      </Button>
    </form>
  );
};
