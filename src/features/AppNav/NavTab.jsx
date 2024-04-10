import { Bell } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import NavContext from "./NavContext";

export default function NavTab(props) {
	const navCtx = useContext(NavContext);

	return (
		<NavLink
			className={(status) => {
				const baseClassName =
					"flex justify-between items-center w-full px-2 py-2";
				if (status.isActive) {
					return `${baseClassName} bg-${""} text-${""}`;
				} else {
					return `${baseClassName}`;
				}
			}}
			to={props.to}
		>
			<div className="flex items-center gap-2">
				{props.icon}
				{navCtx.expansion.isExpanded && props.title}
			</div>
			{navCtx.expansion.isExpanded && (
				<div>
					<Bell size={18} strokeWidth={2} absoluteStrokeWidth={true} />
				</div>
			)}
		</NavLink>
	);
}
