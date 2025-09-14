import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { Metadata } from "next";
import { blogData, BlogPageData } from "@/components/Blog/blogData";

export const metadata: Metadata = {
    title: "Blog Details | 4UCS",
    description: "Dynamic Blog Details Page",
};



const BlogDetailsPage = ({ params }: any) => {
    const blog: BlogPageData | undefined = blogData.find((b) => b.slug === params.slug);


    if (!blog) {
        console.log(params.slug, blog);
        return (
            <section className="pt-[150px] pb-[120px] text-center">
                <h2 className="text-2xl font-bold">Blog not found</h2>
            </section>
        );
    }

    return (
        <section className="pt-[150px] pb-[120px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-8/12">
                        <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                            {blog.title}
                        </h2>

                        <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                            <div className="flex flex-wrap items-center">
                                <div className="mr-10 mb-5 flex items-center">
                                    <div className="mr-4">
                                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                            <Image
                                                src="/images/blog/author-02.png"
                                                alt={blog.author}
                                                fill
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-body-color text-base font-medium">
                                            By <span>{blog.author}</span>
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-5 flex items-center">
                                    <p className="text-body-color mr-5 flex items-center text-base font-medium">
                                        {blog.date}
                                    </p>
                                    <p className="text-body-color mr-5 text-base font-medium">
                                        👁 {blog.views}
                                    </p>
                                    <p className="text-body-color text-base font-medium">
                                        💬 {blog.comments}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-5">
                                <span className="bg-primary inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white">
                                    {blog.category}
                                </span>
                            </div>
                        </div>

                        <div className="mb-10 w-full overflow-hidden rounded-sm">
                            <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>

                        <p className="text-body-color mb-8 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                            {blog?.description}
                        </p>
                        {blog?.content?.map((para, i) => (
                            <p
                                key={i}
                                className="text-body-color mb-6 text-base leading-relaxed font-medium"
                            >
                                {para}
                            </p>
                        ))}

                        <div className="items-center justify-between sm:flex mt-10">
                            <div className="mb-5">
                                <h4 className="text-body-color mb-3 text-sm font-medium">
                                    Popular Tags :
                                </h4>
                                <div className="flex flex-wrap items-center gap-2">
                                    {blog.tags.map((tag, i) => (
                                        <TagButton key={i} text={tag} />
                                    ))}
                                </div>
                            </div>

                            <div className="mb-5">
                                <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                                    Share this post :
                                </h5>
                                <div className="flex items-center sm:justify-end">
                                    <SharePost />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsPage;
