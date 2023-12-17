import { Badge } from "./badge"

interface TopicsProps {
    items: string[]
}

function Topics({ items }: TopicsProps) {
    return (
        <>
            {items.map((item) => (
                <Badge
                    key={item}
                    className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-400"
                >
                    {item}
                </Badge>
            ))}
        </>
    )
}
export default Topics
