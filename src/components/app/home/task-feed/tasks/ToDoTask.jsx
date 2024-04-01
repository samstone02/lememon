import { Circle, CircleCheck } from "lucide-react"
import { useState } from "react"
import ReorderableItem from "$/components/common/drag-and-drop/ReorderableItem"
import TaskItem from "../TaskItem"

export default function ToDoTask(props) {
    const [finishTaskButtonHovered, setFinishTastButtonHovered] = useState(false)

    function handleOnMouseEnter(event) {
        setFinishTastButtonHovered(true)
    }

    function handleOnMouseLeave(event) {
        setFinishTastButtonHovered(false)
    }

    return (
        <TaskItem>
            <div className="flex">
                <div
                    className="pr-3"
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
                    {props.children}
                </div>
            </div>
        </TaskItem>
    )
}