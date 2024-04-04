import { LayoutGrid, Settings, SunMoon } from 'lucide-react';

export default function NavControls() {
    return (
        <div className="flex gap-2 p-2">
            <div>
                <SunMoon
                    size={24}
                    strokeWidth={2}
                    absoluteStrokeWidth={true}
                    // fill="e-ink"
                />
            </div>
            <div>
                <Settings
                    size={24}
                    strokeWidth={2}
                    absoluteStrokeWidth={true}
                />
            </div>
            <div>
                <LayoutGrid
                    size={24}
                    strokeWidth={2}
                    absoluteStrokeWidth={true}
                />
            </div>
        </div>
    )
}