import { useAppSelector } from '@/redux/store'

export function Header() {
  const { currentModule, currentLesson } = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentModule = state.player.course.modules[currentModuleIndex]
    const currentLesson = currentModule.lessons[currentLessonIndex]

    return { currentLesson, currentModule }
  })

  return (
    <header className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentModule.title}</h1>
      <span>Módulo {currentLesson.title}</span>
    </header>
  )
}
