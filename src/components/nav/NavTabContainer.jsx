import NavTab from "./NavTab";
import NavToggle from "./NavToggle";

import '../../styles/navtab-container.css'

export default function NavTabContainer() {
    return (
        <div className="navtab-container">
            <NavToggle></NavToggle>
            <NavTab to="/app/home" title="Home" altText="Home" iconUrl="/icons/temp/home-svgrepo-com.svg"></NavTab>
            <NavTab to="/app/calendar" title="Calendar" altText="Calendar" iconUrl="/icons/temp/calendar-svgrepo-com.svg"></NavTab>
            <NavTab to="/app/flashcards" title="Flashcards" altText="Flashcards" iconUrl="/icons/temp/cards-svgrepo-com.svg"></NavTab>
            <NavTab to="/app/to-do" title="To Do" altText="To Do" iconUrl="/icons/temp/check-svgrepo-com.svg"></NavTab>
            <NavTab to="/app/blog" title="Blog" altText="Blog" iconUrl="/icons/temp/blog-svgrepo-com.svg"></NavTab>
            <NavTab to="/app/notes" title="Notes" altText="Notes" iconUrl="/icons/temp/doc-svgrepo-com.svg"></NavTab>
        </div>
    )
}