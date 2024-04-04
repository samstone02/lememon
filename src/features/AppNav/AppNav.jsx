import NavControls from "./NavControls";
import NavTabContainer from "./NavTabContainer";

export default function AppNav() {
    return (
        <nav className="grow-0 shrink-0 w-48 flex flex-col justify-between border-r-2 border-e-ink">
            <NavTabContainer/>
            <NavControls/>
        </nav>
    )
}