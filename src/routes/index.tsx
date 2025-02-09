import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h3 className="text-3xl font-bold">Welcome Home!</h3>
    </div>
  )
}
