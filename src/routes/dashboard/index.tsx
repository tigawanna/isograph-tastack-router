import { createFileRoute, create } from '@tanstack/react-router'
import { ViewerComponent } from './-components/dashoboard-sidebar/viewer/ViewerRoute'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min--screen flex justify-center items-center gap-2 p-2">
      <ViewerComponent />
    </div>
  )
}
