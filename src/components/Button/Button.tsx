import React, { useState, useEffect } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

interface ICoords {
  x: number;
  y: number;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
}): JSX.Element => {
  const [coords, setCoords] = useState<ICoords>({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState<boolean>(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <button
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
      disabled={disabled}
      className={styles.btn}
    >
      {isRippling ? (
        <span
          className={styles.ripple}
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : null}
      <span className={styles.content}>{children}</span>
    </button>
  );
};
