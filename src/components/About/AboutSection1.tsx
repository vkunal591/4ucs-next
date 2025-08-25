// components/About/AboutSectionOne.tsx

interface AboutSectionOneProps {
    title: string;
    content: string;
    subTitle: string;
    subContent: string;
}

const AboutSection1 = ({ title, content, subTitle, subContent }: AboutSectionOneProps) => {
    return (
        <section className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
            {/* Decorative Background SVG */}
            <div className="absolute top-10 -left-10 w-96 h-96 opacity-20 dark:opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bullseye text-primary w-full h-full drop-shadow-xl drop-shadow-blue-800" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                    <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">{content}</p>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{subTitle}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">{subContent}</p>
            </div>
        </section>
    );
};

export default AboutSection1;
