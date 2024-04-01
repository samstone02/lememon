import { Bell } from 'lucide-react';
import { NavLink } from 'react-router-dom'

export default function NavTab(props) {

    return (       
        <NavLink
            className={(status) => {
                const baseClassName = "flex justify-between items-center w-full px-2 py-2"
                if (status.isActive) {
                    return `${baseClassName} text-e-paper bg-e-ink`
                }
                else {
                    return `${baseClassName} text-e-ink bg-e-paper`
                }
            }}
            to={props.to}
        >
            <div className="flex items-center gap-2">
                {props.icon}
                {props.title}
            </div>
            <div>
                <Bell
                    size={18}
                    strokeWidth={2}
                    absoluteStrokeWidth={true}
                />
            </div>
        </NavLink>
    )
}