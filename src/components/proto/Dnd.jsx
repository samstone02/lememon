import TaskContainer from "../app/home/TaskContainer" 
import Reorderable from "../common/drag-and-drop/Reorderable"
import ReorderableContainer from "../common/drag-and-drop/ReorderableContainer"

export default function Dnd() {
    return (
        <>
            <ReorderableContainer>
                <Reorderable>
                    <p>div1</p>
                </Reorderable>
                <Reorderable>
                    <p>div2</p>
                </Reorderable>
                <Reorderable>
                    <p>div3</p>
                </Reorderable>
            </ReorderableContainer>
        </>
    )
}