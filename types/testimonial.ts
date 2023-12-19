export interface Testimonial {
    name: string
    image: TestimonialImage
    content: string
    date: string
}

export interface TestimonialImage {
    metadata: Metadata
    sys: ImageSys
    fields: Fields
}

export interface Fields {
    title: string
    description: string
    file: File
}

export interface File {
    url: string
    details: Details
    fileName: string
    contentType: string
}

export interface Details {
    size: number
    image: DetailsImage
}

export interface DetailsImage {
    width: number
    height: number
}

export interface Metadata {
    tags: any[]
}

export interface ImageSys {
    space: Environment
    id: string
    type: string
    createdAt: Date
    updatedAt: Date
    environment: Environment
    revision: number
    locale: string
}

export interface Environment {
    sys: EnvironmentSys
}

export interface EnvironmentSys {
    id: string
    type: string
    linkType: string
}
