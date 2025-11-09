import './HomePage.css'
import QuestionCard from '../../components/QuestionCard'
import { API_URL } from '../../constants'
import { useEffect, useState } from 'react'

interface Question {
  id: string
  level: number
  completed: boolean
  question: string
  answer: string
}

const HomePage = () => {

  const [questions, setQuestions] = useState<Question[]>([])

  const getQuestions = async () => {
    try {
      const response = await fetch(`${API_URL}/react`)
      const questions = await response.json()
      setQuestions(questions)

    } catch (error) {
      console.error('Failed to load questions:', error)
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <main className="home-page">
      {questions.map((q) => (
        <QuestionCard key={q.id} id={q.id} level={q.level} completed={q.completed}
                      question={q.question}
                      answer={q.answer} />
      ))}
    </main>
  )
}

export default HomePage