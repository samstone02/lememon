export default function Flashcard(props) {
    return (
        <div className="app-actionable-flashcard">
            <div className="app-actionable-flashcard--side app-actionable-flashcard--front">
                <h3>{props.front.question}</h3>
                <p>{props.front.subtext}</p>
            </div>
            <div className="app-actionable-flashcard--side app-actionable-flashcard--back">
                {props.back.answer}
            </div>
        </div>
    )
}