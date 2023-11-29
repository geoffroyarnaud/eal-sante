import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar";

export const HomeLayout = () => {
  return (
    <div className="bg-slate-10 flex min-h-screen">
      <Sidebar className=" h-screen" />
      <div className="flex-1 ">
        <Outlet />
      </div>
    </div>
  );
};
