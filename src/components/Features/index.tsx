import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="At 4U Consultancy Services (4UCS), we provide end-to-end digital solutions to help businesses grow faster in the modern tech landscape. From custom web and mobile app development to CRM systems, SaaS products, cloud solutions, and digital marketing—our team ensures innovation, scalability, and long-term success."
            center
          />


          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
