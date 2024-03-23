import NavTab from "./NavTab";

export default function NavTabContainer() {
    return (
        <div class="navtab-container">
            <NavTab title="Home" iconUrl="/icon.jpg"></NavTab>
            <NavTab title="Calendar" iconUrl="/icon.jpg"></NavTab>
            <NavTab title="Flashcards" iconUrl="/icon.jpg"></NavTab>
            <NavTab title="To Do" iconUrl="/icon.jpg"></NavTab>
            <NavTab title="Blog" iconUrl="/icon.jpg"></NavTab>
            <NavTab title="Notes" iconUrl="/icon.jpg"></NavTab>
        </div>
    )
}