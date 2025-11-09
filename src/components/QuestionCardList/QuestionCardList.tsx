import './QuestionCardList.css'
import QuestionCard from '../QuestionCard'

const QuestionCardList = (props: any) => {
  return (
    <ul className="question-card-list">
      {props.cards.map((card: any) => (
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