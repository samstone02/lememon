export default function Task(props) {
    return (
        <div
            className="app-actionable app-actionable-to-do"
            draggable
            onDragStart={e => {
                
            }}
        >
            {/* {grabDiv} */}
            <div className="app-actionable-to-do--left-group">
                <div className="app-actionable-to-do--left-group--header">
                    <h3>{props.title}</h3>
                </div>
                {props.children}
            </div>
            <div className="app-actionable-to-do--right-group">
                <img className="app-actionable-to-do--check-icon" src="/icons/svg-repo/circle-svgrepo-com.svg" alt="Complete Task"/>
            </div>
        </div>
    )
}