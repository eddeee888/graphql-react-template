import type { FC } from "react";
import { NavLink, Outlet } from "react-router";

export const AppLayout: FC = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> | <NavLink to="/books">Books</NavLink>
      </nav>
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
};
