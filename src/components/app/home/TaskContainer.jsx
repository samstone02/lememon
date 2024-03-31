import ReorderableContainer from "$/components/common/drag-and-drop/ReorderableContainer"
import ReorderableItem from "$/components/common/drag-and-drop/ReorderableItem"
import Task from "./Task"

export default function TaskContainer() {
    return (
        <div className="app-main-left-group app-actionable-container">
            <ReorderableContainer>
                <ReorderableItem className="mt-4 p-4 border-solid border-black border-2">
                    <Task title="pJEBRFHKEBFVJSEHW">
                        <p>Something <a className="standard-button" href="https://google.com">Google</a></p>
                    </Task>
                </ReorderableItem>
                <ReorderableItem className="mt-4 p-4 border-solid border-black border-2">
                    <Task title="2dfgfhsdgjkfbkjewgj"></Task>
                </ReorderableItem>
            </ReorderableContainer>
        </div>
    )
}