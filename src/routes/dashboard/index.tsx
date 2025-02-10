import { createFileRoute } from '@tanstack/react-router'
import { ViewerRoute } from './-components/dashoboard-sidebar/viewer/ViewerRoute'
import { Suspense } from 'react'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className='min--screen flex justify-center items-center gap-2 p-2'>
         <Suspense fallback={<div>Loading Pokemon...</div>}>
          <ViewerRoute/>
         </Suspense>
    </div>
  )
}
