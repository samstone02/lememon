export default function Task(props) {
    return (
        <div class="app-actionable app-actionable-to-do">
            <div class="app-actionable-to-do--left-group">
                <div class="app-actionable-to-do--left-group--header">
                    <h3>{props.title}</h3>
                </div>
                {props.children}
            </div>
            <div class="app-actionable-to-do--right-group">
                <img class="app-actionable-to-do--check-icon" src="/icons/svg-repo/circle-svgrepo-com.svg"/>
            </div>
        </div>
    )
}