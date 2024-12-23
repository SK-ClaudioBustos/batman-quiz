import { create, StateCreator } from 'zustand'

interface QuizStorageState {
  score: number
  showQuiz: boolean
}

interface Actions {
  setScore: (newScore: number) => void
  setShowQuiz: (showQuiz: boolean) => void
}

type QuizData = QuizStorageState & Actions;

const quizApi: StateCreator<QuizData> = (set) => ({
  score: 0,
  showQuiz: false,
  setScore: (newScore) => { set(() => ({ score: newScore })) },
  setShowQuiz: (showQuiz) => { set(() => ({ showQuiz })) }
});

export const useQuizStorage = create<QuizData>()(quizApi);