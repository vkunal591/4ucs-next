import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div key={title} className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="bg-primary/0 mb-10 flex h-[120px] w-[120px] p-2 items-center justify-center rounded-md">
          <Image
            src={`${icon}`}
            alt={title}
            width={800}
            height={800}
            className="w-full h-full object-contain"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(37%) sepia(99%) saturate(747%) hue-rotate(207deg) brightness(95%) contrast(94%)",
            }}
          />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
