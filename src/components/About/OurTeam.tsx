'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

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
    image: '/images/team/kunal.png',
    quote:
      "As a founder, my vision has always been to build a team that delivers far beyond just code. We are dedicated to driving meaningful results and cultivating strong, lasting client relationships...",
    gender: 'male',
    role: 'Founder & CEO',
  },
  {
    name: 'Prabhashankar Maurya',
    image: '/images/team/prabhashankar.jpeg',
    gender: 'male',
    role: 'Manager',
    quote: `Prabhashankar Maurya is a highly skilled professional specializing in client acquisition, project coordination, and strategic business development across India and the Global South...`,
  },
  {
    name: 'Sweta Kumari',
    image: '/images/icons/female.png',
    quote:
      "The branding and design services provided by 4U Consultancy Services have completely transformed our company's visual identity...",
    gender: 'female',
    role: 'UI/UX Designer',
  },
  {
    name: 'Gaurav Sharma',
    image: '/images/icons/male.png',
    quote:
      "I find great satisfaction in solving real-world problems through clean, scalable code...",
    gender: 'male',
    role: 'Full Stack Developer',
  },
  {
    name: 'Sunny Verma',
    image: '/images/icons/male.png',
    quote:
      "The team at 4UCS completely transformed our online presence with their expert SEO and digital marketing services...",
    gender: 'male',
    role: 'Digital Marketing Specialist',
  },
  {
    name: 'Ayesha Patel',
    image: '/images/icons/female.png',
    quote:
      "Managing the development team at 4UCS has been an incredible journey of growth and innovation...",
    gender: 'female',
    role: 'App Developer',
  },
];

// ===========================
// ✅ Component
// ===========================
export default function OurTeam() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4 md:p-16 mx-auto bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Introduction Section */}
      <motion.div
        className="w-full text-center lg:w-3/4 mb-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold text-black dark:text-blue-400 mb-4 tracking-tight drop-shadow-sm">
          Meet Our Visionary Team
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Behind our success is a passionate, skilled, and visionary team dedicated to pushing the
          boundaries of digital innovation. We&apos;npre not just building websites and apps—we’re building
          long-term partnerships that fuel success.
        </p>
      </motion.div>

      {/* Swiper Section */}
      <div className="w-full max-w-6xl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {defaultTestimonials.map((t, index) => (
            <SwiperSlide className='my-10' key={index}>
              <motion.div
                className="relative group w-full aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent transition-opacity duration-500 group-hover:from-gray-900/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full w-full flex flex-col justify-end p-8 text-white">
                  {/* Initial View */}
                  <motion.div className="flex flex-col items-start transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                    <h4 className="text-2xl font-bold">{t.name}</h4>
                    <p className="text-sm font-semibold text-blue-400">{t.role}</p>
                  </motion.div>

                  {/* Hover View */}
                  <motion.div
                    className="absolute inset-x-0 bottom-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out flex flex-col items-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <h4 className="text-2xl font-bold mb-1">{t.name}</h4>
                    <p className="text-sm font-semibold text-blue-400 mb-4">{t.role}</p>
                    <p className="text-sm line-clamp-4 leading-relaxed italic">{`"${t.quote}"`}</p>
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
