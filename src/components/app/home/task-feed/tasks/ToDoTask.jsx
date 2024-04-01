import { Circle, CircleCheck } from "lucide-react"
import { useState } from "react"
import StandardHeading from "../../../../common/standard/StandardHeading"
import StandardParagraph from "../../../../common/standard/StandardParagraph"

export default function ToDoTask(props) {
    const [finishTaskButtonHovered, setFinishTastButtonHovered] = useState(false)

    function handleOnMouseEnter(event) {
        setFinishTastButtonHovered(true)
    }

    function handleOnMouseLeave(event) {
        setFinishTastButtonHovered(false)
    }

    console.log(props)

    return (
        <div className="flex gap-3">
            <div
                className="shrink-0"
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                {finishTaskButtonHovered ? (
                    <CircleCheck size={24} strokeWidth={2} absoluteStrokeWidth={true} />
                ) : (
                    <Circle size={24} strokeWidth={2} absoluteStrokeWidth={true} />
                )}
            </div>
            <div className="basis-full overflow-x-hidden">
                <StandardHeading className="break-words" level={3}>{props.heading}</StandardHeading>
                <StandardParagraph className="break-words">{props.paragraph}</StandardParagraph>
            </div>
        </div>
)
}