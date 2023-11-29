import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

export const Home = () => {
  return (
    <div className="bg-slate-100 ">
      <div className="mx-10 flex  items-center justify-between pt-0">
        <HeaderHome />
      </div>
    </div>
  );
};

function HeaderHome() {
  return (
    <aside className="flex w-full flex-row justify-between p-6 ">
      <div className="flex flex-row ">
        <h3 className="mr-6">
          <span>TABLEAU DE BORD</span>
        </h3>
        {""}
        <h5>| ASSURANCE</h5>
      </div>
      <div className="relative">
        <Input
          className="h-6"
          type="text"
          id="password"
          name="password"
          required
        />
        <div onClick={() => null}>
          {
            <Search
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 transform"
            />
          }
        </div>
      </div>
    </aside>
  );
}
