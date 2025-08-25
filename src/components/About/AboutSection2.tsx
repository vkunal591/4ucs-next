// components/About/AboutSectionTwo.tsx

interface AboutSectionTwoProps {
  title: string;
  points: string[];
  subTitle: string;
  subContent: string;
}

const AboutSection2 = ({ title, points, subTitle, subContent }: AboutSectionTwoProps) => {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-transparent overflow-hidden">
      {/* Decorative SVG */}
      <div className="absolute top-20  right-0 w-80 h-80 opacity-20 dark:opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back text-primary drop-shadow-xl drop-shadow-blue-800 w-full h-full" viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{title}</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mb-10 space-y-2">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{subTitle}</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">{subContent}</p>
      </div>
    </section>
  );
};

export default AboutSection2;
