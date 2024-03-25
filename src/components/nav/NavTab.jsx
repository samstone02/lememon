import { NavLink } from 'react-router-dom'
import '../../styles/navtab.css'

export default function NavTab(props) {

    return (       
        <NavLink
            className={(status) => { 
                return (status.isActive? "navtab navtab-active": "navtab navtab-inactive")
            }}
            to={props.to}
        >
            <div className="navtab--left-group">
                <img className="app-navtab-icon" src={props.iconUrl} alt={props.altText}/>
                {props.title}
            </div>
            <div>
                <img className="app-navtab-icon" src={"/icons/temp/bell-svgrepo-com-light.svg"} alt="Notifications"/>
            </div>
        </NavLink>
    )
}