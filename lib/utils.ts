import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getListOfTopics(topics: any[]) {
    let topicsList: string[] = []

    topics.forEach((topic: any) => {
        topicsList.push(topic.fields.name)
    })

    return topicsList
}

export function getImageSource(item: any) {
    return "http:" + item.fields.file.url
}

export function getAuthorProperties(item: any) {
    const name = item.fields.name
    const description = item.fields.description
    const image = getImageSource(item.fields.image)
    return { name, description, image }
}
