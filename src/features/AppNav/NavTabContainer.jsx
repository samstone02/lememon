import { CircleCheck, Calendar, Home, Layers  } from "lucide-react";
import NavTab from "./NavTab";
import NavToggle from "./NavToggle";

export default function NavTabContainer() {
    return (
        <div className="navtab-container">
            <NavToggle></NavToggle>
            <NavTab
                to="/app/home" title="Home"
                icon={<Home/>}
            />
            <NavTab
                to="/app/calendar" title="Calendar"
                icon={<Calendar/>}
            />
            <NavTab
                to="/app/flashcards" title="Flashcards"
                icon={<Layers/>}
            />
            <NavTab
                to="/app/to-do" title="To Do"
                icon={<CircleCheck/>}
            />
        </div>
    )
}