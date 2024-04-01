import ReorderableContainer from "$/components/common/drag-and-drop/ReorderableContainer"
import ReorderableItem from "$/components/common/drag-and-drop/ReorderableItem"
import Task from "./TaskItem"

export default function TaskContainer(props) {
    return (
        <div className={`app-main-left-group app-actionable-container ${props.className}`}>
            <ReorderableContainer>
                <ReorderableItem className="mt-4 p-4 border-solid border-black border-2">
                    <Task title="1st thing">
                        <p>pretty normal urgency</p>
                    </Task>
                </ReorderableItem>
                <ReorderableItem className="mt-4 p-4 border-solid border-black border-2">
                    <Task title="Second task"></Task>
                </ReorderableItem>
                <ReorderableItem className="mt-4 p-4 border-solid border-black border-2">
                    <Task title="Third task SUPER URGENT">
                        <p>THIS IS SUPER DUPER IMPORTANTT!!!!!!!!! <a className="standard-button" href="https://google.com">Google</a></p>
                    </Task>
                </ReorderableItem>
                <ReorderableItem className="mt-4 p-4 border-solid border-black border-2">
                    <Task title="Third task SUPER URGENT">
                        <p>THIS IS SUPER DUPER IMPORTANTT!!!!!!!!! <a className="standard-button" href="https://google.com">Google</a></p>
                    </Task>
                </ReorderableItem>
                <ReorderableItem className="mt-4 p-4 border-solid border-black border-2">
                    <Task title="Third task SUPER URGENT">
                        <p>THIS IS SUPER DUPER IMPORTANTT!!!!!!!!! <a className="standard-button" href="https://google.com">Google</a></p>
                    </Task>
                </ReorderableItem>
                <ReorderableItem className="mt-4 p-4 border-solid border-black border-2">
                    <Task title="Third task SUPER URGENT">
                        <p>THIS IS SUPER DUPER IMPORTANTT!!!!!!!!! <a className="standard-button" href="https://google.com">Google</a></p>
                    </Task>
                </ReorderableItem>
                <ReorderableItem className="mt-4 p-4 border-solid border-black border-2">
                    <Task title="Third task SUPER URGENT">
                        <p>THIS IS SUPER DUPER IMPORTANTT!!!!!!!!! <a className="standard-button" href="https://google.com">Google</a></p>
                    </Task>
                </ReorderableItem>
                <ReorderableItem className="mt-4 p-4 border-solid border-black border-2">
                    <Task title="Third task SUPER URGENT">
                        <p>THIS IS SUPER DUPER IMPORTANTT!!!!!!!!! <a className="standard-button" href="https://google.com">Google</a></p>
                    </Task>
                </ReorderableItem>
            </ReorderableContainer>
        </div>
    )
}