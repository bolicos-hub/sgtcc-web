import React from "react";
import clsx from "clsx";
import Row from "@/components/Row";
import Space from "@/components/Space";
import Button, { Props as ButtonProps } from "@/components/Button";
import css from "./css.module.scss";

export interface Props {
  children?: React.ReactNode;
  status?: "info" | "warning" | "danger" | "disabled";
  appearance?: "bordered" | "none";
  className?: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
}

const Card: React.FC<Props> = ({
  children,
  className,
  appearance,
  primaryButton,
  secondaryButton,
  status,
  ...props
}) => {
  const hasButton = primaryButton || secondaryButton;
  const hasOneButton = hasButton && primaryButton ? primaryButton : secondaryButton;
  const hasTwoButton = hasButton && primaryButton && secondaryButton;
  return (
    <div
      className={clsx(css["card"], className, {
        [css["-bordered"]]: appearance === "bordered",
        [css["-none"]]: appearance === "none",
        [css["-info"]]: status === "info",
        [css["-warning"]]: status === "warning",
        [css["-danger"]]: status === "danger",
        [css["-disabled"]]: status === "disabled",
      })}
      {...props}>
      <div className={clsx(css["content"])}>{children}</div>
      {hasTwoButton && (
        <>
          <Space />
          <Row>
            <Button {...primaryButton} />
            <Button {...secondaryButton} />
          </Row>
          <Space />
        </>
      )}

      {hasButton && !hasTwoButton && hasOneButton && (
        <>
          <Space />
          <Row>
            <Button {...hasOneButton} />
          </Row>
          <Space />
        </>
      )}
    </div>
  );
};

Card.defaultProps = {
  appearance: "none",
  status: "info",
};

export default Card;
