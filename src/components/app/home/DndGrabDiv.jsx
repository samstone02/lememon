export default function DndGrabDiv() {
    return (
        <div className="dnd-on-grab-div">
            Grabbed!
        </div>
    )
}

// var grabDiv = null
// var mouseX = 0
// var mouseY = 0

// function startRenderGrabDiv() {
//     const rootElement = document.getElementById('root');
//     ReactDOM.render(<DndGrabDiv/>, rootElement);
// }

// function endRenderGrabDiv() {
//     grabDiv = (<DndGrabDiv/>)
//     const success = ReactDOM.unmountComponentAtNode(grabDiv)
//     console.log("success? " + success)
// }

// function renderDndGrabDiv() {
//     if (grabDiv == null) {
//         return;
//     }

//     console.log(grabDiv);

//     grabDiv.style.left = mouseX
//     grabDiv.style.top = mouseY

//     window.requestAnimationFrame(renderDndGrabDiv)
// }

// document.addEventListener("mousemove", function(event) {
//     mouseX = event.clientX;
//     mouseX = event.clientY;
    
//     // console.log("Cursor position - X: " + mouseX + ", Y: " + mouseY);
// });