export interface Post {
    title: string
    date: string
    featured: boolean
    content: PostContent
    slug: string
    author: Author
    topics: Topic[]
    image: FieldsImage
}

export interface Author {
    metadata: Metadata
    sys: ImageSys
    fields: AuthorFields
}

export interface AuthorFields {
    name: string
    description: string
    image: FieldsImage
}

export interface FieldsImage {
    metadata: Metadata
    sys: ImageSys
    fields: ImageFields
}

export interface ImageFields {
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
    space: ContentType
    id: string
    type: string
    createdAt: Date
    updatedAt: Date
    environment: ContentType
    revision: number
    locale: string
    contentType?: ContentType
}

export interface ContentType {
    sys: ContentTypeSys
}

export interface ContentTypeSys {
    id: ID
    type: Type
    linkType: LinkType
}

export enum ID {
    Author = "author",
    Master = "master",
    P40Hi5N08Yq6 = "p40hi5n08yq6",
    Topic = "topic",
}

export enum LinkType {
    ContentType = "ContentType",
    Environment = "Environment",
    Space = "Space",
}

export enum Type {
    Link = "Link",
}

export interface PostContent {
    data: Data
    content: PurpleContent[]
    nodeType: string
}

export interface PurpleContent {
    data: Data
    content: FluffyContent[]
    nodeType: string
}

export interface FluffyContent {
    data: Data
    marks: any[]
    value: string
    nodeType: string
}

export interface Data {}

export interface Topic {
    metadata: Metadata
    sys: ImageSys
    fields: TopicFields
}

export interface TopicFields {
    name: string
}
