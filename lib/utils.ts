import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import tinydate from "tinydate"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(value: string) {
    const dataBlueprint = tinydate("{DD}/{MM}/{YYYY}")
    const formattedDate = dataBlueprint(new Date(value))

    return formattedDate
}
