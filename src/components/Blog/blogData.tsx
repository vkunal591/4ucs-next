import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How IT Consulting Can Boost Your Business in 2025",
    paragraph:
      "Discover how tailored IT consulting services help businesses increase efficiency, reduce costs, and stay competitive in an ever-evolving tech landscape. From cloud migration to digital transformation — expert guidance makes a measurable impact.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Anil Desai",
      image: "/images/blog/blog-01.jpg",
      designation: "Senior IT Consultant",
    },
    tags: ["business-growth", "strategy"],
    publishDate: "August 2025",
  },
  {
    id: 2,
    title: "Top 5 Cybersecurity Practices for Small Businesses",
    paragraph:
      "Small and mid-sized businesses are increasingly becoming targets of cyber attacks. In this blog, we share five essential yet practical cybersecurity practices every business must adopt to safeguard its data and customer trust.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Rahul Mehta",
      image: "/images/blog/author-02.png",
      designation: "Cybersecurity Specialist",
    },
    tags: [ "small-business", "data-protection"],
    publishDate: "August 2025",
  },
  {
    id: 3,
    title: "Why Your Business Needs Custom Software – Not Off-the-Shelf",
    paragraph:
      "While off-the-shelf tools are convenient, they often fall short of addressing unique business needs. Learn how custom software development from 4U Consultancy Services can enhance your workflows, scalability, and customer experience.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Siddharth Jain",
      image: "/images/blog/author-03.png",
      designation: "Software Architect",
    },
    tags: ["custom-software", "development", "enterprise-solutions"],
    publishDate: "August 2025",
  },
];

export default blogData;
