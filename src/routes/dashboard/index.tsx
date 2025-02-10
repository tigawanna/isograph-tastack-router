import {
  createFileRoute,
  useRouteContext,
} from '@tanstack/react-router'

import { ViewerComponent } from './-components/dashoboard-sidebar/viewer/ViewerRoute'
import { useIsographEnviroment } from '@/lib/isograph/client'


export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { PAT } = useRouteContext({ from: '__root__' })
  const environment = useIsographEnviroment(PAT!)
  return (
    <div className="min--screen flex justify-center items-center gap-2 p-2">
      <ViewerComponent />
    </div>
  )
}
