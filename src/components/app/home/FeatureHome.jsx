import TaskContainer from "./TaskContainer"

import '$/styles/home.css'

export default function HomeDrawer() {
    return (
        <main className="feature-home">
            <TaskContainer/>
            <div className="app-main-left-right">
                <div className="app-mini-calendar">
                    calendar
                </div>
                <div className="app-sticky-notes">
                    sticky notes
                </div>
            </div>
        </main>
    )
}