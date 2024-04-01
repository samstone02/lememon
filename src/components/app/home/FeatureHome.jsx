import TaskContainer from "$/components/app/home/task-feed/TaskContainer"

import '$/styles/home.css'
import MiniCalendar from "./mini-calendar/MiniCalendar"
import StickyNote from "./sticky-note/StickyNote"

export default function HomeDrawer() {
    return (
        <main className="feature-home grid grid-cols-2 grid-rows-2 gap-3 h-full">
            <TaskContainer className="row-span-2 col-span-1"/>
            <MiniCalendar className="row-span-1 col-span-1 border-solid border-black border-2"/>
            <StickyNote className="row-span-1 col-span-1 border-solid border-black border-2"/>
        </main>
    )
}