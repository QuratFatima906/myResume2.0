import cn from "classnames";
import React, { ComponentType, FC, HTMLAttributes } from "react";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  el?: HTMLElement;
  clean?: boolean;
}

export const Container: FC<ContainerProps> = ({ children, className, el = "div", clean }) => {
  const rootClassName = cn(className, {
    "mx-auto max-w-8xl px-4  sm:px-6 lg:px-8 ": !clean,
  });

  const Component: React.ComponentType<React.HTMLAttributes<HTMLElement>> =
    el as unknown as ComponentType<HTMLAttributes<HTMLElement>>;

  return <Component className={rootClassName}>{children}</Component>;
};
