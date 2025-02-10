import { fetchCurrentViewer } from '@/lib/viewer/use-viewer'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { DashboardLayout } from './-components/dashoboard-sidebar/DashboardLayout'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
  async loader(ctx) {
    if (!ctx.context.PAT || !ctx.context.viewer) {
      throw redirect({to:"/auth",search:{returnTo:"/dashboard"}})
    }
  },

})
