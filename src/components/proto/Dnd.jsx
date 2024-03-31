import TaskContainer from "../app/home/TaskContainer" 
import ReorderableItem from "../common/drag-and-drop/ReorderableItem"
import ReorderableContainer from "../common/drag-and-drop/ReorderableContainer"

// import '$/styles/proto/div.css'

export default function Dnd() {
    return (
        <div className="container">
            <ReorderableContainer>
                <ReorderableItem>
                    <div class="card">
                        <h3>
                            This your first thing
                        </h3>
                        <p>Please do this thing first!!</p>
                    </div>
                </ReorderableItem>
                <ReorderableItem>
                    <div class="card">
                        <h3>
                            This your second thing
                        </h3>
                        <p>Thing 1 and Thing 2. I'm more important!</p>
                    </div>
                </ReorderableItem>
                <ReorderableItem>
                    <div class="card">
                        <h3>
                            IMPORTANT !!!!!!!!!!!
                        </h3>
                        <p>Even though I'm third, I am the most important. Do me first!</p>
                    </div>
                </ReorderableItem>
                <ReorderableItem>
                    <div class="card">
                        <h3>
                            This is the government.
                        </h3>
                        <p>You owe us 13 trillion credits.</p>
                    </div>
                </ReorderableItem>
                <ReorderableItem>
                    <div class="card">
                        <h3>
                            WHERE THE FUCK DID TIMMY GO???
                        </h3>
                        <p>I LOST MY ONLY SON HELP</p>
                    </div>
                </ReorderableItem>
            </ReorderableContainer>
        </div>
    )
}