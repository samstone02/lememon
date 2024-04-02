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
        <div className="flex flex-col gap-3">
            <div
                className="shrink-0 flex gap-3"
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                <div className="shrink-0">
                    {finishTaskButtonHovered ? (
                        <CircleCheck size={24} strokeWidth={2} absoluteStrokeWidth={true} />
                    ) : (
                        <Circle size={24} strokeWidth={2} absoluteStrokeWidth={true} />
                    )}
                </div>
                <StandardHeading className="break-words overflow-x-hidden" level={3}>{props.heading}</StandardHeading>
            </div>
            {props.paragraph &&
                <div className="basis-full overflow-x-hidden">
                    <StandardParagraph className="break-words">{props.paragraph}</StandardParagraph>
                </div>
            }
        </div>
)
}