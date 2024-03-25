import NavControls from "./NavControls";
import NavTabContainer from "./NavTabContainer";

import '../../styles/app-nav.css'

export default function AppNav() {
    return (
        <nav className="app-nav">
            <NavTabContainer></NavTabContainer>
            <NavControls></NavControls>
        </nav>
    )
}