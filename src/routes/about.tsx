import { Helmet } from "@/components/wrappers/custom-helmet";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Helmet title="About Vite Boilerplate" description="Vite oilerplate abput page" />
      <h1 className="text-5xl font-bold">Hello from About!</h1>
    </div>
  );
}
