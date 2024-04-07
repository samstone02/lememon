import { Bell } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppNavContext from "./AppNavContext";

export default function NavTab(props) {
	const ctx = useContext(AppNavContext);
	return (
		<NavLink
			className={(status) => {
				const baseClassName =
					"flex justify-between items-center w-full px-2 py-2";
				if (status.isActive) {
					return `${baseClassName} text-e-paper bg-e-ink`;
				} else {
					return `${baseClassName} text-e-ink bg-e-paper`;
				}
			}}
			to={props.to}
		>
			<div className="flex items-center gap-2">
				{props.icon}
				{ctx.expansion.isExpanded && props.title}
			</div>
			{ctx.expansion.isExpanded && (
				<div>
					<Bell size={18} strokeWidth={2} absoluteStrokeWidth={true} />
				</div>
			)}
		</NavLink>
	);
}
