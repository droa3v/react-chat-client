import React from "react";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
}): JSX.Element => {
  return (
    <button onClick={onClick} disabled={disabled} className="">
      {children}
    </button>
  );
};
