function Question({ question, onAnswer }) {
  return (
    <div>
      <div className="question">{question.text}</div>
      <div className="answers">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            className="answer-btn"
            onClick={() => onAnswer(opt.type)}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Question
