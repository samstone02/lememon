import ReorderableContainer from "$/components/common/drag-and-drop/ReorderableContainer"
import ToDoTask from "./tasks/ToDoTask"

export default function TaskContainer(props) {
    return (
        <div className={`app-main-left-group app-actionable-container ${props.className}`}>
            <ReorderableContainer>
                <ToDoTask>
                    <h3>heading</h3>
                    <p>something</p>
                </ToDoTask>
                <ToDoTask>
                    <h3>My Name is Sam</h3>
                    <p>This is a moderately long task description. Looks good?</p>
                </ToDoTask>
                <ToDoTask>
                    <h3>LOREM!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores numquam vel non nulla earum laboriosam id accusamus corporis quisquam, sunt quas laudantium aliquam totam cum aspernatur cumque dolorem pariatur.</p>
                </ToDoTask>
                <ToDoTask>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ipsum aspernatur omnis! Molestiae harum et obcaecati excepturi ratione voluptate, ipsam laborum, porro a sit voluptates, dolorum delectus alias illum impedit.</h3>
                </ToDoTask>
            </ReorderableContainer>
        </div>
    )
}