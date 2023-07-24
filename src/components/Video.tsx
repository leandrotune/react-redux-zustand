'use client'

import { next } from '@/redux/slices/player'
import { useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'

import Player from 'react-player'

export function Video() {
  const dispatch = useDispatch()

  const lesson = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return currentLesson
  })

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      <Player
        width="100%"
        height="100%"
        playing
        controls
        onEnded={handlePlayNext}
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  )
}
