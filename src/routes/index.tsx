import { createFileRoute, Link } from "@tanstack/react-router";
import { MainDrawer } from "../components/navigation/drawer/MainDrawer";
import { MainDrawerLinks } from "../components/navigation/drawer/MainDrawerLinks";
import { MainDrawerFooter } from "@/components/navigation/drawer/MainDrawerFooter";
import { useViewer } from "@/lib/viewer/use-viewer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { viewer } = useViewer();

  return (
    <MainDrawer links={<MainDrawerLinks />} footer={<MainDrawerFooter />}>
      <div className="min-h-screen flex flex-col items-center gap-3">
        <div className="min-h-[70vh] w-full flex flex-col items-center gap-3 justify-center">
          <h3 className="text-5xl font-bold">Welcome Home!</h3>
          {viewer && (
            <Link
              to="/$user"
              params={{ user: viewer?.login }}
              className=" w-full  hover:text-primary  gap-3 flex items-center justify-between  bg-base-300">
              <Avatar>
                <AvatarImage src={viewer?.avatar_url} alt={viewer?.login?.slice(0, 2)} />
                <AvatarFallback>{viewer?.login?.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex w-full p-2">{viewer?.name}</div>
            </Link>
          )}
        </div>
      </div>
    </MainDrawer>
  );
}
