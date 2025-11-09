import './HomePage.css'
import { API_URL } from '../../constants'
import { useEffect, useState } from 'react'
import QuestionCardList from '../../components/QuestionCardList'
import Loader from '../../components/Loader'

const HomePage = () => {

  const [questions, setQuestions] = useState([])

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
    <>
      <Loader />
      <QuestionCardList cards={questions} />
    </>
  )
}

export default HomePage