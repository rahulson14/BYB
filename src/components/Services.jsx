
import React, { useState } from 'react';

const services = [
  {
    title: "BUILDING PERMISSION",
    image: "BUILDING PERMISSION.jpeg",
    description:
      "At Brick by Bricks Construction, we simplify the process of obtaining building permissions for both municipal and development authority areas. From preparing accurate permission drawings to coordinating with government departments, we handle everything on your behalf. Our end-to-end service ensures you don’t have to visit any government offices—saving you time, effort, and unnecessary stress."
  },
  {
    title: "HOME LOAN CONSULTATION",
    image: "HomeLoan.jpeg",
    description:
      "Building your dream home is easier with Brick by Bricks Construction. Our Home Loan Consultation service guides you through the entire loan process—from choosing the right bank to getting approvals. We provide dedicated support, accurate loan-related drawings, and cost estimates, so you don’t have to make unnecessary visits to the bank. Let us handle the paperwork while you focus on building your future."
  },
  {
    title: "PLANNING AND DESIGN",
    image: "planningAndDesign.jpg",
    description:
      "At Brick by Bricks Construction, we turn your vision into a well-planned reality. Our Planning and Design service ensures your home is designed to match your budget, lifestyle, and material preferences—without compromising on quality. We offer customized designs based on your requirements, complete with Vastu compliance. From layout planning to material selection, we handle it all so you can relax while we create the perfect plan for your dream home."
  },
  {
    title: "PROJECT MANAGEMENT AND CONSTRUCTION",
    image: "construction-manager.jpg",
    description:
      "At Brick by Bricks Construction, we take full responsibility for managing your construction project from start to finish. Our service includes skilled labor supervision, quality control, and efficient material management—all under the guidance of experienced civil engineers. You won’t have to worry about coordinating workers, checking on-site progress, or handling construction hassles. We ensure the final outcome matches the 3D design we promised, so you can focus on your profession while we build your dream home—on time and with precision."
  },
  {
    title: "RENOVATION",
    image: "Renovation.jpg",
    description:
      "Give your home a fresh start with Brick by Bricks Construction. Our Renovation service is designed to upgrade and transform your space with expert planning and execution. We manage skilled workers, ensure quality workmanship, and minimize material wastage—all under the supervision of qualified civil engineers. With us, you won’t need to worry about day-to-day site issues. We deliver results that match the initial 3D design, so you can carry on with your routine while we bring new life to your home."
  },
  {
    title: "INTERIOR",
    image: "Interior.jpg",
    description:
      "At Brick by Bricks Construction, we transform your house into a beautiful, functional home with expertly planned interior design. From concept to completion, we manage skilled workers and execute the design under professional architectural and engineering supervision. You won’t need to worry about coordinating labor, monitoring quality, or handling material wastage. We ensure your interiors are completed on time and exactly as planned in the initial 3D design—giving your home a fresh, stunning new look while you continue your daily routine without disruption."
  },
  {
    title: "WATER PROOFING",
    image: "Waterproofing-Services.jpeg",
    description:
      "In Assam and the Northeast, heavy rainfall and frequent waterlogging can cause serious damage to buildings—leading to issues like wall blistering, ceiling damage, and slab leakage. At Brick by Bricks Construction, we offer expert waterproofing solutions to protect your home from these monsoon-related problems. Our treatments are designed to safeguard your walls, ceilings, and structures, ensuring a dry and healthy living space. With proper waterproofing, you can enjoy the monsoon season without worrying about damage to your home."
  },
  {
    title: "ANTI TERMITE TREATMENT",
    image: "ANTITERMITE TREATMENT.jpg",
    description:
      "Assam and the Northeast are known for their rich biodiversity—but that also includes termites, which can silently damage your home from the ground up. At Brick by Bricks Construction, we provide effective anti-termite treatment at the foundation level to protect your floors, doors, windows, walls, furniture, and more. Our treatment ensures long-term protection against termite infestation, helping you maintain a safe, strong, and pest-free home from the very beginning."
  }
];

const ServiceCard = ({ title, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const shouldTruncate = description.length > 160;
  const displayedText = isExpanded || !shouldTruncate
    ? description
    : description.substring(0, 160) + '...';

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{displayedText}</p>
        {shouldTruncate && (
          <button
            onClick={toggleReadMore}
            className="text-blue-600 text-sm font-semibold hover:underline"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
