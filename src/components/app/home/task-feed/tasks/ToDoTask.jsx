import { ChevronLeft, Circle, CircleCheck } from "lucide-react"
import { useState } from "react"
import StandardHeading from "$/components/common/standard/StandardHeading"
import StandardParagraph from "$/components/common/standard/StandardParagraph"

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
        <div className="flex align-center justify-left gap-3">
            <div
                className="shrink-0 h-max"
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                {finishTaskButtonHovered ? (
                    <CircleCheck size={24} strokeWidth={2} absoluteStrokeWidth={true} />
                ) : (
                    <Circle size={24} strokeWidth={2} absoluteStrokeWidth={true} />
                )}
            </div>
            <div>
                <div className="flex justify-between">
                    <StandardHeading className="break-words overflow-x-hidden" level={3}>{props.heading}</StandardHeading>
                    <div className="shrink-0 pr-3">
                        <ChevronLeft size={24} strokeWidth={2} absoluteStrokeWidth={true} />
                    </div>
                </div>
                {props.paragraph &&
                    <div className="basis-full overflow-x-hidden">
                        <StandardParagraph className="break-words">{props.paragraph}</StandardParagraph>
                    </div>
                }
            </div>
        </div>
    )
}