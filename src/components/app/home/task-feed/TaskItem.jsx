import ReorderableItem from "$/components/common/drag-and-drop/ReorderableItem"
import StandardHeading from "$/components/common/standard/StandardHeading"

export default function TaskItem(props) {
    return (
        <div className="flex align-center justify-left gap-3 w-full">
            <div
                className="shrink-0 h-max w-6"
            >
                {props.headingLeftMarginContent}
            </div>
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <StandardHeading className="break-words overflow-x-hidden" level={3}>{props.heading}</StandardHeading>
                    <div className="shrink-0 pr-3">
                        {props.chevronMenu}
                    </div>
                </div>
                <div className="basis-full overflow-x-hidden">
                    {props.children}
                </div>
            </div>
        </div>
    )
}