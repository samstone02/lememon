import ReorderableContainer from "$/components/common/drag-and-drop/ReorderableContainer"
import ReorderableItem from "$/components/common/drag-and-drop/ReorderableItem"
import Task from "./Task"

export default function TaskContainer() {
    return (
        <div className="app-main-left-group app-actionable-container">
            <ReorderableContainer>
                <ReorderableItem>
                    <Task title="pJEBRFHKEBFVJSEHW">
                        <p>Something <a class="stanard-button" href="https://google.com">Google</a></p>
                    </Task>
                </ReorderableItem>
                <ReorderableItem>
                    <Task title="2dfgfhsdgjkfbkjewgj"></Task>
                </ReorderableItem>
            </ReorderableContainer>
        </div>
    )
}