import * as React from "react";
import Home from "@/components/Home";

export function withAppBar(Component: React.ComponentType, name: string) {
  const WithAppBar: React.FC = () => {
    return (
      <Home name={name}>
        <Component />
      </Home>
    );
  };

  return WithAppBar;
}
