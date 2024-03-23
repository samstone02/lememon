import TaskFunnel from "./TaskFunnel";

export default function HomeDrawer() {
    return (
        <main class="app-light">
            <TaskFunnel></TaskFunnel>
            <div class="app-main-left-right">
                <div class="app-mini-calendar">
                    calendar
                </div>
                <div class="app-sticky-notes">
                    sticky notes
                </div>
            </div>
        </main>
    )
}