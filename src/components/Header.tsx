import { useCurrentLesson } from '@/redux/slices/player'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  return (
    <header className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentModule.title}</h1>
      <span>Módulo {currentLesson.title}</span>
    </header>
  )
}
