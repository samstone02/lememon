import React, { useEffect, useState } from "react";

/**
 * @summary Allows children `Reorderable` to be moved around on mouse drag and drop.
 * @param channel (string) Defines which reorderables can be placed into which containers. 
 */
export default function ReorderableContainer(props) {
    const [children, setChildren] = useState(props.children)
    useEffect(() => {
        setChildren(children.map((child, index) => {
            return React.cloneElement(child, {key: index, order: children, setOrder: setChildren})
    }))}, [])
    return (
        <div>
           {children}
        </div>
    )
}