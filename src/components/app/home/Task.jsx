import { BiCircle } from "react-icons/bi"

export default function Task(props) {
    return (
        <div className="app-actionable app-actionable-to-do">
            <div className="app-actionable-to-do--right-group">
                <BiCircle/>
            </div>
            <div className="app-actionable-to-do--left-group">
                <div className="app-actionable-to-do--left-group--header">
                    <h3>{props.title}</h3>
                </div>
                {props.children}
            </div>
        </div>
    )
}