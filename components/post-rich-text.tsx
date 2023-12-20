import Image from "next/image"
import Link from "next/link"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
    BLOCKS,
    INLINES,
    MARKS,
    Document as RichTextDocument,
} from "@contentful/rich-text-types"
import { date } from "zod"

import { PostContent } from "@/types/post"

interface PostRichTextProps {
    document: PostContent
}

function PostRichText({ document }: PostRichTextProps) {
    if (!document) {
        return null
    }

    const website_url = process.env.WEBSITE_URI

    const options = {
        renderMark: {
            [MARKS.BOLD]: (text: any) => (
                <span className="font-bold">{text}</span>
            ),
            [MARKS.ITALIC]: (text: any) => (
                <span className="italic">{text}</span>
            ),
            [MARKS.UNDERLINE]: (text: any) => (
                <span className="underline">{text}</span>
            ),
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
                <p className=" py-4 text-xl text-muted-foreground">
                    {children}
                </p>
            ),
            [BLOCKS.HEADING_1]: (node: any, children: any) => (
                <h1 className="py-1 text-4xl">{children}</h1>
            ),
            [BLOCKS.HEADING_2]: (node: any, children: any) => (
                <h2 className="py-1 text-3xl">{children}</h2>
            ),
            [BLOCKS.HEADING_3]: (node: any, children: any) => (
                <h3 className="py-1 text-2xl">{children}</h3>
            ),
            [BLOCKS.UL_LIST]: (node: any, children: any) => (
                <ul className=" pl-13 list-disc -space-y-4">{children}</ul>
            ),
            [BLOCKS.OL_LIST]: (node: any, children: any) => (
                <ol className="list-decimal gap-0 -space-y-4 pl-7">
                    {children}
                </ol>
            ),
            [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
                <li className="m-0 -space-y-4 p-0 ">{children}</li>
            ),
            [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => (
                <Image
                    src={"http:" + `${node.data.target.fields.file.url}`}
                    height={node.data.target.fields.file.details.image.height}
                    width={node.data.target.fields.file.details.image.width}
                    alt={node.data.target.fields.description}
                />
            ),

            [INLINES.HYPERLINK]: (node: any, children: any) => (
                <Link
                    href={node.data.uri}
                    target={`${
                        node.data.uri.startsWith(website_url)
                            ? "_self"
                            : "_blank"
                    }`}
                    rel={`${
                        node.data.uri.startsWith(website_url)
                            ? ""
                            : "noopener noreferrer"
                    }`}
                    className="underline hover:text-foreground"
                >
                    {children}
                </Link>
            ),
        },
    }

    return (
        <>{documentToReactComponents(document as RichTextDocument, options)}</>
    )
}

export default PostRichText
