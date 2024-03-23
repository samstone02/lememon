export default function NavTab(props) {
    return (
        <button class="app-navtab app-navtab--selected-background-black">
            <div class="app-navtab-left-group">
                <img class="app-navtab-icon" src={props.iconUrl}/>
                {props.title}
            </div>
            <div>
                <img class="app-navtab-icon" src={"/icons/svg-repo/bell-svgrepo-com-light.svg"}/>
            </div>
        </button>
    )
}