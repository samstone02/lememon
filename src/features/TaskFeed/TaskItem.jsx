import Heading from "@components/elements/Heading";

export default function TaskItem(props) {
	return (
		<div className="flex align-center justify-left gap-3 w-full">
			<div className="shrink-0 h-max w-6">{props.headingLeftMarginContent}</div>
			<div className="w-full">
				<div className="flex justify-between w-full">
					<Heading className="break-words overflow-x-hidden" level={3}>
						{props.heading}
					</Heading>
					<div className="shrink-0 pr-3">{props.chevronMenu}</div>
				</div>
				<div className="basis-full overflow-x-hidden">{props.children}</div>
			</div>
		</div>
	);
}
