import { createFileRoute, redirect } from '@tanstack/react-router'
import { DashboardLayout } from './-components/dashoboard-sidebar/DashboardLayout'

export const Route = createFileRoute('/$user')({
  component: DashboardLayout,
  async loader(ctx) {
    console.log(' ctx . context  == ',ctx.context)
    if (!ctx.context.PAT || !ctx.context.viewer) {
      throw redirect({ to: '/auth', search: { returnTo: '/dashboard' } })
    }
  },
})
