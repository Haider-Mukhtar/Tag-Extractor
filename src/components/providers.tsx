import { ReactNode } from "react";
import { BrowserRouter } from "react-router";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

export default Providers;
