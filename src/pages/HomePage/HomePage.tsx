import './HomePage.css'
import { API_URL } from '../../constants'
import { useEffect, useState } from 'react'
import QuestionCardList from '../../components/QuestionCardList'
import Loader from '../../components/Loader'
import { useFetch } from '../../hooks/useFetch.ts'

const HomePage = () => {

  const [questions, setQuestions] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const [getQuestions, isLoading, error] = useFetch(async (url: string) => {
    const response = await fetch(`${API_URL}/${url}`)
    const questions = await response.json()

    setQuestions(questions)

    return questions
  })

  useFetch('react')

  useEffect(() => {
    getQuestions('react').catch(console.error)
  }, [])

  const searchValueHandler = (e: any) => {
    setSearchValue(e.target.value)
  }

  return (
    <>
      <input
        type="text"
        id="search"
        name="search"
        value={searchValue}
        onChange={(e) => searchValueHandler(e)}
      />

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList cards={questions} />
    </>
  )
}

export default HomePage