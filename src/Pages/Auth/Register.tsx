import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Register.module.scss";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button/Button";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("This field is required")
    .min(2, "Username must be at least 2 characters long")
    .matches(
      /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username must contain only letters and numbers"
    )
    .trim(),
  email: yup
    .string()
    .required("This field is required")
    .email("You must provide a valid email")
    .trim(),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase and one number"
    )
    .trim(),
  confirm: yup
    .string()
    .required("This field is required")
    .oneOf([yup.ref("password"), null], "Password doesn't match!")
    .trim(),
});

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirm: string;
}

export const Register: React.FC = (): JSX.Element => {
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
    <div className={styles.container}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.group}>
          <Input
            id="username"
            label="Username"
            error={errors.username}
            {...register("username")}
          />
          <Input
            id="email"
            label="Email"
            error={errors.email}
            {...register("email")}
          />
          <Input
            id="password"
            label="Password"
            error={errors.password}
            {...register("password")}
          />
          <Input
            id="confirm"
            label="Confirm"
            error={errors.confirm}
            {...register("confirm")}
          />
        </div>

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
    </div>
  );
};
