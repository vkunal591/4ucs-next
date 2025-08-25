// app/blog/page.tsx (or wherever your Blog page is located)

import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Insights and Resources for Startups & SaaS",
  description:
    "Stay up to date with the latest trends, tips, and insights in startups, SaaS, and web development. Read our expert articles and tutorials.",
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Blog"
        description="Explore expert insights, practical tutorials, and industry trends tailored for startups, SaaS businesses, and modern web development."
      />

      <section className="pt-[120px] pb-[120px] bg-white dark:bg-gray-900">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                {[1, 2, 3].map((num) => (
                  <li key={num} className="mx-1">
                    <a
                      href="#0"
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                    >
                      {num}
                    </a>
                  </li>
                ))}
                <li className="mx-1">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md px-4 text-sm">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
