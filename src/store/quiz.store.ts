import { create, StateCreator } from 'zustand';

export enum Seccion {
  WELCOME = "Welcome",
  QUIZ = "Quiz",
  SCORE = "Score"
}

interface QuizStorageState {
  score: number
  section: Seccion
}

interface Actions {
  setScore: (newScore: number) => void
  setSection: (string: Seccion) => void
}

type QuizData = QuizStorageState & Actions;

const quizApi: StateCreator<QuizData> = (set) => ({
  score: 0,
  section: Seccion.WELCOME,
  setScore: (newScore) => { set(() => ({ score: newScore })) },
  setSection: (actualSection) => { set(() => ({ section: actualSection })) }
});

export const useQuizStorage = create<QuizData>()(quizApi);