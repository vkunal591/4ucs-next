'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

// ===========================
// ✅ Type Definitions
// ===========================
type Testimonial = {
  name: string;
  image: string;
  quote: string;
  gender: 'male' | 'female';
  role: string;
};

// ===========================
// ✅ Default Props
// ===========================
const defaultTestimonials: Testimonial[] = [
  {
    name: 'Kunal Verma',
    image: '/assets/images/pr4.png',
    quote:
      "As a founder, my vision has always been to build a team that delivers far beyond just code. We are dedicated to driving meaningful results and cultivating strong, lasting client relationships—and that commitment is reflected in every project we undertake. Our approach is centered on understanding the unique challenges of each client and crafting tailored solutions that not only meet their technical needs but also contribute to their broader business success. This focus on impact and partnership is what sets us apart and fuels our continuous growth.",
    gender: 'male',
    role: 'Founder & CEO',
  },
  {
    name: 'Prabhashankar Maurya',
    image: '/assets/images/pr2.png',
    gender: 'male',
    role: 'Manager',
    quote: `Prabhashankar Maurya is a highly skilled professional specializing in client acquisition, project coordination, and strategic business development across India and the Global South. In his role, he actively drives market outreach, builds strong client relationships, and oversees the successful delivery of marketing and sales initiatives in diverse regions. His ability to blend operational efficiency with strategic vision ensures projects align perfectly with client goals and company objectives. Managing multicultural teams and coordinating complex projects, Prabhashankar consistently delivers results that enhance revenue growth and strengthen brand positioning in competitive markets. His leadership supports expanding organizational reach through innovation and partnerships.`,
  },
  {
    name: 'Sweta Kumari',
    image: '/assets/images/pr1.png',
    quote:
      "The branding and design services provided by 4UCS IT Solutions PVT. LTD have completely transformed our company's visual identity. They crafted a modern, professional look that truly resonates with our target audience. This fresh approach has significantly boosted our brand recognition and customer engagement. Beyond aesthetics, their thoughtful design strategy reflects a deep understanding of market trends and user experience, helping us stand out in a crowded marketplace. Working with their creative team has been an inspiring collaboration that continues to drive our business forward.",
    gender: 'female',
    role: 'UI/UX Designer',
  },
  {
    name: 'Gaurav Sharma',
    image: '/assets/images/pr6.png',
    quote:
      "I find great satisfaction in solving real-world problems through clean, scalable code. At 4UCS, we’re empowered to innovate continuously, using the latest technologies and best practices. This environment fosters both personal and professional growth, allowing me to deliver solutions that truly meet client needs. Collaborating closely with clients ensures that the products we build are not only functional but also impactful. Our team's commitment to quality and efficiency drives success for both our clients and ourselves.",
    gender: 'male',
    role: 'Full Stack Developer',
  },
  {
    name: 'Sunny Verma',
    image: '/assets/images/pr3.png',
    quote:
      "The team at 4UCS completely transformed our online presence with their expert SEO and digital marketing services. Thanks to their strategic campaigns and deep understanding of search engine algorithms, we achieved higher rankings that brought in significantly more qualified leads than ever before. Their data-driven approach and continuous optimization ensure that our digital footprint keeps growing sustainably. This partnership has been instrumental in expanding our market reach and increasing overall business performance.",
    gender: 'male',
    role: 'Digital Marketing Specialist',
  },
  {
    name: 'Ayesha Patel',
    image: '/assets/images/pr5.png',
    quote:
      "Managing the development team at 4UCS has been an incredible journey of growth and innovation. Every project presents unique challenges that push us to think creatively and refine our technical skills. This culture of continuous learning and collaboration inspires us to build impactful applications that solve real problems. I take pride in leading a talented team that is committed to delivering excellence and driving the company's mission forward through technology and teamwork.",
    gender: 'female',
    role: 'App Developer',
  },
];

// ===========================
// ✅ Component
// ===========================
export default function OurTeam() {
  return (
    <div className="w-full flex flex-col lg:flex-row p-4 md:p-16 mx-auto">
      <div className="mt-6 w-full lg:w-1/2">
        <h4 className="text-2xl font-semibold mb-2">Our Team and Founders</h4>
        <p className="mb-2">
          Behind our success is a passionate, skilled, and visionary team dedicated to pushing the boundaries of digital innovation. From seasoned developers and creative designers to strategic thinkers and project managers, our team works seamlessly to deliver high-impact solutions for every client.
        </p>
        <p className="mb-2">
          Our founders are entrepreneurs and technologists with a deep understanding of what it takes to scale in the digital age. Their leadership, combined with a commitment to excellence and a people-first culture, has been the driving force behind our growth and client satisfaction.
        </p>
        <p>
          Together, we’re not just building websites and apps — we’re building long-term partnerships that fuel success.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        className="w-full lg:w-1/2"
      >
        {defaultTestimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-72 p-4 pt-2 rounded-3xl overflow-visible w-full">
              <div className="flex items-end justify-start gap-2 absolute pl-4 mt-3">
                <Image
                  src={t.gender === 'male' ? '/images/icons/male.png' : '/images/icons/female.png'}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <h4 className="font-semibold text-gray-800 text-xs mb-2">{t.role}</h4>
                </div>
              </div>

              <div className="bg-blue-100 rounded-2xl mt-10 h-full pt-14 pb-4 px-4 text-sm">
                <div className="bg-white rounded-2xl h-full w-full p-6">
                  <p className="line-clamp-7">&quot;{t.quote}&quot;</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
