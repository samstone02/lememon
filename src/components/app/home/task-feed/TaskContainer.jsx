import ReorderableContainer from "$/components/common/drag-and-drop/ReorderableContainer"
import ToDoTask from "./tasks/ToDoTask"

export default function TaskContainer(props) {
    return (
        <div className={`app-main-left-group app-actionable-container ${props.className}`}>
            <ReorderableContainer>
                <ToDoTask>
                    <p>something</p>
                </ToDoTask>
                <ToDoTask>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores numquam vel non nulla earum laboriosam id accusamus corporis quisquam, sunt quas laudantium aliquam totam cum aspernatur cumque dolorem pariatur.</p>
                </ToDoTask>
            </ReorderableContainer>
        </div>
    )
}