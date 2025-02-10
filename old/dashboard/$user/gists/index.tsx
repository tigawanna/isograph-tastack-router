import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$user/gists/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/gists/"!</div>
}
