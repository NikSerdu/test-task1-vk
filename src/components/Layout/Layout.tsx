import { FC, PropsWithChildren } from "react";
import Header from "./Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto mb-5 px-5">
      <Header />
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default Layout;
