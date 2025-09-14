
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How IT Consulting Can Boost Your Business in 2025 | 4UCS",
  description:
    "Discover how tailored IT consulting services help businesses increase efficiency, reduce costs, and stay competitive in an ever-evolving tech landscape.",
};

const blogData = {
  title: "How IT Consulting Can Boost Your Business in 2025",
  author: {
    name: "Anil Desai",
    image: "/images/blog/author-01.png",
  },
  date: "August 2025",
  views: 120,
  comments: 15,
  category: "Business Growth",
  content: [
    {
      type: "paragraph",
      text: "In today's fast-paced digital world, businesses must adapt quickly to stay competitive. IT consulting services provide the expertise and guidance needed to navigate this ever-evolving landscape.",
    },
    {
      type: "image",
      src: "/images/blog/it-consulting.jpg",
      alt: "IT Consulting Services",
    },
    {
      type: "paragraph",
      text: "Tailored IT strategies can streamline operations, enhance security, and drive innovation. By partnering with experienced consultants, businesses can leverage technology to achieve their goals more efficiently.",
    },
    {
      type: "quote",
      text: "“Partnering with IT consultants has transformed our approach to technology, leading to significant improvements in efficiency and security.” – Client Testimonial",
    },
    {
      type: "heading",
      text: "Key Benefits of IT Consulting",
    },
    {
      type: "list",
      items: [
        "Customized technology solutions aligned with business objectives.",
        "Enhanced cybersecurity measures to protect sensitive data.",
        "Improved operational efficiency through process optimization.",
        "Access to the latest technological advancements and innovations.",
      ],
    },
    {
      type: "paragraph",
      text: "Embracing IT consulting services is a strategic move that can propel your business forward in 2025 and beyond.",
    },
  ],
  tags: ["IT Consulting", "Business Growth", "Technology"],
  relatedPosts: [
    {
      title: "Top 5 Cybersecurity Practices for Small Businesses",
      image: "/images/blog/cybersecurity.jpg",
      slug: "#",
      date: "August 2025",
    },
    {
      title: "Why Your Business Needs Custom Software – Not Off-the-Shelf",
      image: "/images/blog/custom-software.jpg",
      slug: "#",
      date: "August 2025",
    },
  ],
  categories: ["Business Growth", "Technology", "Cybersecurity"],
  popularTags: ["IT Consulting", "Cybersecurity", "Custom Software"],
};

const BlogSidebarPage = () => {
  return (
    <section className="overflow-hidden pt-[180px] pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Blog Main */}
          <div className="w-full px-4 lg:w-8/12">
            <h1 className="mb-8 text-3xl font-bold sm:text-4xl dark:text-white">
              {blogData.title}
            </h1>

            {/* Author / Meta */}
            <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
              <div className="flex flex-wrap items-center">
                <div className="mr-10 mb-5 flex items-center">
                  <div className="mr-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image src={blogData.author.image} alt="author" fill />
                    </div>
                  </div>
                  <div className="w-full">
                    <span className="text-body-color mb-1 text-base font-medium">
                      By <span>{blogData.author.name}</span>
                    </span>
                  </div>
                </div>
                <div className="mb-5 flex items-center space-x-5 text-body-color text-base font-medium">
                  <span>📅 {blogData.date}</span>
                  <span>💬 {blogData.comments}</span>
                  <span>👁️ {blogData.views}</span>
                </div>
              </div>
              <div className="mb-5">
                <a
                  href="#0"
                  className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                >
                  {blogData.category}
                </a>
              </div>
            </div>

            {/* Blog Content */}
            {blogData.content.map((block, idx) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={idx} className="mb-8 text-base sm:text-lg">
                      {block.text}
                    </p>
                  );
                case "image":
                  return (
                    <div key={idx} className="mb-10 w-full overflow-hidden rounded-sm">
                      <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                        <Image
                          src={block.src}
                          alt={block.alt}
                          fill
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  );
                case "quote":
                  return (
                    <div
                      key={idx}
                      className="relative mb-10 rounded-md bg-primary/10 p-8 text-center italic"
                    >
                      <p className="text-base">{block.text}</p>
                    </div>
                  );
                case "heading":
                  return (
                    <h3
                      key={idx}
                      className="mb-10 text-xl font-bold sm:text-2xl dark:text-white"
                    >
                      {block.text}
                    </h3>
                  );
                case "list":
                  return (
                    <ul key={idx} className="mb-10 list-inside list-disc text-base sm:text-lg">
                      {block.items.map((item, i) => (
                        <li key={i} className="mb-2 font-medium">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}

            {/* Tags & Share */}
            <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
              <div className="mb-5">
                <h4 className="text-body-color mb-3 text-sm font-medium">Popular Tags :</h4>
                <div className="flex items-center space-x-2">
                  {blogData.tags.map((tag, i) => (
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

          {/* Sidebar */}
          <div className="w-full px-4 lg:w-4/12">
            {/* Related Posts */}
            <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
              <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold dark:border-white/10 dark:text-white">
                Related Posts
              </h3>
              <ul className="p-8">
                {blogData.relatedPosts.map((post, idx) => (
                  <li
                    key={idx}
                    className="border-body-color/10 mb-6 border-b pb-6 dark:border-white/10"
                  >
                    <RelatedPost {...post} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
              <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold dark:border-white/10 dark:text-white">
                Popular Category
              </h3>
              <ul className="px-8 py-6 space-y-2">
                {blogData.categories.map((cat, idx) => (
                  <li key={idx}>
                    <a
                      href="#0"
                      className="text-body-color hover:text-primary text-base font-medium"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
              <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold dark:border-white/10 dark:text-white">
                Popular Tags
              </h3>
              <div className="px-8 py-6 flex flex-wrap gap-2">
                {blogData.popularTags.map((tag, idx) => (
                  <TagButton key={idx} text={tag} />
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSidebarPage;
