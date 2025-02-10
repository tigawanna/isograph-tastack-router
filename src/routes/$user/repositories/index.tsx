import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$user/repositories/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$user/repositories/"!</div>
}
