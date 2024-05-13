import React from "react";
import { Button, ButtonProps } from "../Button/Button";

interface ValueButtonProps extends ButtonProps {
  value: string;
  onPress: (value: string) => void;
}

export const ValueButton = React.memo(
  ({ value, onPress, ...props }: ValueButtonProps) => {
    return <Button {...props} onClick={() => onPress(value)} />;
  }
);
