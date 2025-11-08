import './QuestionCard.css'
import Button from '../Button'

const QuestionCard = () => {
  return (
    <article className="question-card">
      <header className="tag-group">
        <p className="tag-level">
          <strong>Level:</strong> 1
        </p>
        <p className="tag-status">Not Completed</p>
      </header>

      <h2 className="title">Что такое JSX?</h2>

      <section className="short-answer">
        <h3 className="label">Short answer:</h3>
        <p className="answer">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sequi.
        </p>
      </section>

      <footer>
        <Button onClick={() => {
        }}>View</Button>
      </footer>
    </article>
  )
}

export default QuestionCard