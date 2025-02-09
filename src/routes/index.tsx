import { MainNavbar } from "@/components/navigation/MainNavbar";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MainDrawer } from "./-components/Maindrawer";
import { Home } from "lucide-react";
import { MainSidebarLinks } from "./-components/MainSidebarLinks";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <MainDrawer links={<MainSidebarLinks />} footer={<MainNavbar />}>
      <div className="min-h-screen flex flex-col items-center gap-3">
        {/* <MainNavbar/> */}
        <div className="min-h-[70vh] w-full flex flex-col items-center gap-3 justify-center">
          <h3 className="text-3xl font-bold">Welcome Home!</h3>
        </div>
      </div>
    </MainDrawer>
  );
}
