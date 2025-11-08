import './QuestionCard.css'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const QuestionCard = (props) => {
  const {
    level,
    completed,
    question,
    answer,
  } = props

  const navigate = useNavigate()

  return (
    <article className="question-card">
      <header className="tag-group">
        <p className="tag-level">
          <strong>Level:</strong> {level}
        </p>
        <p className="tag-status">{completed ? 'Completed' : 'Not Completed'}</p>
      </header>

      <h2 className="title">{question}</h2>

      <section className="short-answer">
        <h3 className="label">Short answer:</h3>
        <p className="answer">{answer}</p>
      </section>

      <footer>
        <Button
          onClick={() => {
            navigate(`/questions/${question}`)
          }}
        >
          View
        </Button>
      </footer>
    </article>
  )
}

export default QuestionCard