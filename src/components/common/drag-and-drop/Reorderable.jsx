/**
 * @summary A wrapper component which creates a draggable and reorderable element.
 * @param channel (string) Defines which reorderables can be placed into which containers. 
 */
export default function Reorderable(props) {
    let className = null;
    function handleDragStart(event) {
        event.target.style.visibility = "hidden"
        className = event.target.getAttribute("class")
        event.target.setAttribute("is-empty-space", true)
    }
    function handleDragEnd(event) {
        event.target.style.visibility = "visible"
        event.target.setAttribute("is-empty-space", false)
    }
    function handleDragOver(event) {
        event.target.style.backgroundColor = "blue"

        let emptySpaceIndex = 0;
        props.order.forEach((orderable, index) => {
            // console.log(orderable)
            if (orderable.("is-empty-space")) {
                emptySpaceIndex = index
                return
            }
        })

        let thisIndex = 0;
        props.order.forEach((orderable, index) => {
            if (orderable == event.target) {
                thisIndex = index
                return
            }
        })

        console.log(emptySpaceIndex, thisIndex)
    }
    return (
        <div
            className="reorderable"
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
        >
            <h1>{props.key}</h1>
            {props.children}
        </div>
    )
}