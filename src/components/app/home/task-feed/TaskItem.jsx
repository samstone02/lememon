import ReorderableItem from "$/components/common/drag-and-drop/ReorderableItem"

export default function TaskItem(props) {
    return (
        <ReorderableItem className="mt-4 p-4 border-solid border-black border-2">
            {props.children}
        </ReorderableItem>
    )
}