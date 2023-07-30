import { useCurrentLesson } from '@/redux/slices/player'
import { useAppSelector } from '@/redux/store'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()
  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  if (isCourseLoading) {
    return <h1 className="text-2xl font-bold">Carrefando...</h1>
  }

  return (
    <header className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentModule?.title}</h1>
      <span>Módulo {currentLesson?.title}</span>
    </header>
  )
}
