// app/blog/[slug]/page.tsx or pages/blog/[slug].tsx

import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "4U Consultancy Services: IT Solutions & Digital Services | 4UCS",
  description:
    "Explore 4UCS services including web development, app development, UI/UX design, SaaS solutions, cloud, AI, and 24/7 support for your business.",
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  4U Consultancy Services: Your Partner for Digital Success
                </h2>

                {/* Author & meta */}
                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/author-02.png"
                            alt="author"
                            fill
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="text-body-color mb-1 text-base font-medium">
                          By <span>Musharof Chy</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        12 Jan 2025
                      </p>
                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        50 Views
                      </p>
                      <p className="text-body-color flex items-center text-base font-medium">
                        35 Comments
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                    >
                      IT Solutions
                    </a>
                  </div>
                </div>

                {/* Blog Content */}
                <div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    4U Consultancy Services (4UCS) is a premier IT consulting
                    firm offering innovative digital solutions for startups
                    and enterprises. Our services include web development,
                    mobile app development, SaaS solutions, API development,
                    UI/UX design, e-commerce solutions, cloud & DevOps,
                    AI/automation, and 24/7 maintenance support.
                  </p>

                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                      <Image
                        src="/images/blog/blog-details-01.jpg"
                        alt="4UCS services"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <p className="text-body-color mb-8 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong className="text-primary dark:text-white">
                      Web & App Development:
                    </strong>{" "}
                    Build responsive, scalable websites and mobile apps with
                    seamless performance and modern UI/UX design.
                  </p>

                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong className="text-primary dark:text-white">
                      UI/UX Design:
                    </strong>{" "}
                    User-centric design with wireframes, prototypes, and
                    pixel-perfect interfaces to improve customer engagement.
                  </p>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    Other Services
                  </h3>

                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li>API Development (RESTful & GraphQL)</li>
                    <li>SaaS Product Development</li>
                    <li>E-commerce Solutions & Payment Gateway Integration</li>
                    <li>Cloud & DevOps (Docker, Kubernetes, CI/CD)</li>
                    <li>AI & Automation (Chatbots, Analytics, Workflow Automation)</li>
                    <li>24/7 Maintenance & Support</li>
                  </ul>

                  <div className="bg-primary/10 relative z-10 mb-10 overflow-hidden rounded-md p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-body-color text-center text-base font-medium italic">
                      At 4UCS, we focus on delivering secure, reliable, and
                      innovative IT solutions to help your business scale and
                      succeed in the digital world.
                    </p>
                  </div>

                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Our expert team led by Kunal Verma ensures that your
                    project is handled with care, attention, and excellence
                    from start to finish.
                  </p>

                  {/* Tags & Share */}
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="text-body-color mb-3 text-sm font-medium">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="IT Solutions" />
                        <TagButton text="Web Development" />
                        <TagButton text="Digital Services" />
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
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
