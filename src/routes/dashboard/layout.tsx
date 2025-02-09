import { fetchCurrentViewer } from '@/lib/viewer/use-viewer';
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
    async loader(ctx) {
      if (!ctx.context.PAT) {
        return;
      }
      const viewer = await fetchCurrentViewer(ctx.context.PAT);
      if (!viewer) {
        ctx.context.PAT = undefined;
        ctx.context.viewer = undefined;
      }
      ctx.context.viewer = viewer;
      return viewer;
    },
    staleTime: 2_000_000,
})

function RouteComponent() {
  return <Outlet/>
}
