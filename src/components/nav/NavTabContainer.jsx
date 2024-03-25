import NavTab from "./NavTab";
import NavToggle from "./NavToggle";

import '../../styles/navtab-container.css'

export default function NavTabContainer() {
    return (
        <div className="navtab-container">
            <NavToggle></NavToggle>
            <NavTab to="home" title="Home" iconUrl="/icons/temp/home-svgrepo-com.svg"></NavTab>
            <NavTab to="calendar" title="Calendar" iconUrl="/icons/temp/calendar-svgrepo-com.svg"></NavTab>
            <NavTab to="flashcards" title="Flashcards" iconUrl="/icons/temp/cards-svgrepo-com.svg"></NavTab>
            <NavTab to="to-do" title="To Do" iconUrl="/icons/temp/check-svgrepo-com.svg"></NavTab>
            <NavTab to="blog" title="Blog" iconUrl="/icons/temp/blog-svgrepo-com.svg"></NavTab>
            <NavTab to="notes" title="Notes" iconUrl="/icons/temp/doc-svgrepo-com.svg"></NavTab>
        </div>
    )
}