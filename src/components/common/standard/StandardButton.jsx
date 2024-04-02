export default function StandardButton(props) {
    return (
        <button
            className="text-lagoon px-4 py-1 border-solid border-2 border-lagoon rounded-lg hover:bg-lagoon hover:text-e-paper transition-colors"
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}