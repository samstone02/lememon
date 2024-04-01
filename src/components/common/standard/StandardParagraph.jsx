export default function StandardParagraph(props) {
    return (
        <p className={`${props.className}`}>
            {props.children}
        </p>
    )
}