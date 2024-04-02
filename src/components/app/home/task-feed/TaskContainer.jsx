import AnnouncementTask from "./tasks/AnnouncementTask"
import ReorderableContainer from "$/components/common/drag-and-drop/ReorderableContainer"
import ReorderableItem from "$/components/common/drag-and-drop/ReorderableItem"
import ToDoTask from "./tasks/ToDoTask"

export default function TaskContainer(props) {
    return (
        <div className={`app-actionable-container bg-e-ink ${props.className}`}>
            <ReorderableContainer className="flex flex-col gap-3">
                <ReorderableItem className="border-2 border-e-ink rounded-sm p-3">
                    <AnnouncementTask
                        heading="new structure"
                        paragraph="paragraph"
                    />
                </ReorderableItem>
                <ReorderableItem className="border-2 border-e-ink rounded-sm p-3">
                    <ToDoTask
                        heading="new structure"
                        paragraph="paragraph"
                    />
                </ReorderableItem>
                <ReorderableItem className="border-2 border-e-ink rounded-sm p-3">
                    <ToDoTask
                        heading="heading"
                        paragraph="text"
                    />
                </ReorderableItem>
                <ReorderableItem className="border-2 border-e-ink rounded-sm p-3">
                    <ToDoTask
                        heading="long paragraph"
                        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur sequi obcaecati nulla unde ducimus sit quia beatae architecto earum cum id ipsa repellendus magnam totam ullam, odit delectus? Eos."
                    />
                </ReorderableItem>
                <ReorderableItem className="border-2 border-e-ink rounded-sm p-3">
                    <ToDoTask
                        heading="very looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong heading"
                        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur sequi obcaecati nulla unde ducimus sit quia beatae architecto earum cum id ipsa repellendus magnam totam ullam, odit delectus? Eos."
                    />
                </ReorderableItem>
            </ReorderableContainer>
        </div>
    )
}