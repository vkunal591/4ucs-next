// components/Projects/ProjectCard.tsx

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
    project: {
        id: number;
        title: string;
        category: string;
        description: string;
        image: string;
        url: string;
    };
    direction: "left" | "right" | "bottom";
}

const directionVariants = {
    left: { opacity: 0, x: -100 },
    right: { opacity: 0, x: 100 },
    bottom: { opacity: 0, y: 100 },
};

const ProjectCard = ({ project, direction }: Props) => {
    return (
        <motion.div
            initial={directionVariants[direction]}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
        >
            <div
                onClick={() => window.open(project.url, "_blank")}
                className="cursor-pointer h-full bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-xl transition duration-300 group"
            >
                <div className="rounded overflow-hidden mb-4">
                    <Image src={project.image} alt={project.title} width={900} height={900} className="rounded w-full" />
                </div>
                <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2 group-hover:text-primary transition">
                    {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
