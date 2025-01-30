import type { FC, ReactNode } from "react";
import { NavLink, Outlet } from "react-router";

export const AppLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> | <NavLink to="/books">Books</NavLink>
      </nav>
      <main>{children ? children : <Outlet />}</main>
    </>
  );
};
