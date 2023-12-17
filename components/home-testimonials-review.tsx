interface HomeTestimonialsReviewProps {
    name: string
    content: string
    img: React.ReactNode
    date: string
}

function HomeTestimonialsReview({
    name,
    content,
    img,
    date,
}: HomeTestimonialsReviewProps) {
    return (
        <article className="flex w-full flex-col sm:flex-row-reverse lg:max-w-[500px] lg:flex-col">
            <div className="relative flex h-[400px] w-full items-center justify-center rounded-md border border-current border-b-green-500 text-center sm:border-b-current sm:border-l-green-500 lg:border-b-green-500 lg:border-l-current">
                <p className="px-10 text-lg italic text-green-600 dark:text-white">
                    &ldquo;{content}&bdquo;
                </p>
                <div className="absolute  -bottom-12 block w-[100px] overflow-hidden rounded-full sm:hidden lg:block">
                    {img}
                </div>
            </div>
            <div className="flex h-[200px] w-full flex-col items-center justify-center space-y-5 rounded-md border   border-current border-t-green-500 text-center text-xl italic text-muted-foreground dark:text-white sm:h-auto sm:w-1/2 sm:border-r-green-500 sm:border-t-current lg:h-[200px] lg:w-full lg:space-y-0 lg:border-r-current lg:border-t-green-500">
                <div className="hidden overflow-hidden rounded-full sm:block lg:hidden ">
                    {img}
                </div>
                <div>
                    <p>{name}</p>
                    {/* <p>{date}</p> */}
                </div>
            </div>
        </article>
    )
}
export default HomeTestimonialsReview