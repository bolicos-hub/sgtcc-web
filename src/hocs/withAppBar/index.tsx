import * as React from "react";
import Home from "@/components/Home";

export function withAppBar(Component: React.ComponentType) {
  const WithAppBar: React.FC = () => {
    return (
      <Home>
        <Component />
      </Home>
    );
  };

  return WithAppBar;
}
