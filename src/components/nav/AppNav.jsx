import NavControls from "./NavControls";
import NavTabContainer from "./NavTabContainer";

export default function AppNav() {
    return (
        <nav class="app-light">
            <NavTabContainer></NavTabContainer>
            <NavControls></NavControls>
        </nav>
    )
}