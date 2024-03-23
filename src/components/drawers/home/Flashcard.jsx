export default function Flashcard(props) {
    return (
        <div class="app-actionable-flashcard">
            <div class="app-actionable-flashcard--side app-actionable-flashcard--front">
                <h3>{props.front.question}</h3>
                <p>{props.front.subtext}</p>
            </div>
            <div class="app-actionable-flashcard--side app-actionable-flashcard--back">
                {props.back.answer}
            </div>
        </div>
    )
}