import './QuestionCardList.css'
import QuestionCard from '../QuestionCard'

const QuestionCardList = ({ cards }) => {
  return (
    <ul className="question-card-list">
      {cards.map((card) => (
        <QuestionCard
          key={card.id}
          id={card.id}
          level={card.level}
          completed={card.completed}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </ul>
  )
}

export default QuestionCardList