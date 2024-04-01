import { Hexagon } from "lucide-react"

export default function NavToggle() {
    return (
        <button className="w-full px-2 py-2">
            <Hexagon
                size={24}
                strokeWidth={2}
                absoluteStrokeWidth={true}
            />
        </button>
    )
}