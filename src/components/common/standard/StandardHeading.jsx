export default function StandardHeading(props) {
    console.log(props.children)
    let h
    switch (props.level) {
        case 1:
            h = <h1 className={`${props.className}`}>{props.children}</h1>
            break
        case 2:
            h = <h2 className={`${props.className}`}>{props.children}</h2>
            break
        case 3:
            h = <h3 className={`${props.className}`}>{props.children}</h3>
            break
        case 4:
            h = <h4 className={`${props.className}`}>{props.children}</h4>
            break
        case 5:
            h = <h5 className={`${props.className}`}>{props.children}</h5>
            break
        case 6:
            h = <h6 className={`${props.className}`}>{props.children}</h6>
            break
        default:
            h = <h1>{props.children}</h1>
    }
    return h
}