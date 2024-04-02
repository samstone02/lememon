import { ChevronLeft} from "lucide-react"
import StandardParagraph from "$/components/common/standard/StandardParagraph"
import StandardButton from "$/components/common/standard/StandardButton"
import TaskItem from "../TaskItem"

export default function AccouncementTask(props) {
    return (
        <TaskItem
            heading={props.heading}
            chevronMenu={<ChevronLeft size={24} strokeWidth={2} absoluteStrokeWidth={true} />}
        >
            <StandardParagraph className="break-words">{props.paragraph}</StandardParagraph>
            <StandardButton>
                OK
            </StandardButton>
            <StandardButton>
                Learn More
            </StandardButton>
        </TaskItem>
    )
}