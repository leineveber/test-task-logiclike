import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  isBlock?: boolean;
}

export const Button = React.memo(
  ({ isActive, isBlock, ...props }: ButtonProps) => {
    return (
      <button
        className={classNames(
          styles.btn,
          isActive && styles.isActive,
          isBlock && styles.isBlock
        )}
        {...props}
      />
    );
  }
);
