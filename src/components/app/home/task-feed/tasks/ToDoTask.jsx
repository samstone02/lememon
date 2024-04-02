import { ChevronLeft, Circle, CircleCheck } from "lucide-react"
import { useState } from "react"
import StandardParagraph from "$/components/common/standard/StandardParagraph"
import TaskItem from "../TaskItem"

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
        <TaskItem
            headingLeftMarginContent={
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
            }
            heading={props.heading}
            chevronMenu={<ChevronLeft size={24} strokeWidth={2} absoluteStrokeWidth={true} />}
        >
            <StandardParagraph className="break-words">{props.paragraph}</StandardParagraph>
        </TaskItem>
    )
}