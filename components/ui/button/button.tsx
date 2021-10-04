import cn from "classnames";
import React, { ButtonHTMLAttributes, JSXElementConstructor, forwardRef, useRef } from "react";
import mergeRefs from "react-merge-refs";

import { LoadingDots } from "../index";
import s from "./button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "flat";
  color?: "default" | "primary" | "secondary";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  type?: "submit" | "reset" | "button";
  active?: boolean;
  href?: string;
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component?: string | JSXElementConstructor<any>;
}

export const Button: React.FC<ButtonProps> = forwardRef((props, buttonRef) => {
  const {
    className,
    variant = "default",
    color = "default",
    size = "md",
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    ...rest
  } = props;

  let { Component = "button" } = props;

  const ref = useRef<typeof Component>(null);

  if (rest.href) {
    Component = "a";
  }

  const rootClassName = cn(
    s.root,
    {
      [s.flat]: variant === "flat",
      [s.primary]: color === "primary",
      [s.secondary]: color === "secondary",
      [s.xl]: size === "xl",
      [s.lg]: size === "lg",
      [s.md]: size === "md",
      [s.sm]: size === "sm",
      [s.xs]: size === "xs",
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className
  );

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      data-color={color}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children}
      {loading && (
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      )}
    </Component>
  );
});
