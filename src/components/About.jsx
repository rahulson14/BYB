import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-blue-50 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-blue-700 mb-4">About Us</h1>
          <p className="text-lg max-w-7xl mx-auto">
            At Brick by Bricks, we believe that a home is more than just a structure—it's a lifelong dream. We specialize in constructing private residential buildings that blend strength, beauty, and comfort, creating the perfect space for families to thrive. With a commitment to using only the highest quality materials and delivering exceptional service, we set a new standard in the construction industry. Our mission is to craft aesthetically pleasing, structurally sound homes where families can create lasting memories. When you build with Brick by Bricks, you're not just building a house—you're building your future.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every home has a story. Ours began in 2024, when we saw too many families in Assam struggling through the process of building their dream homes. There was no order—just confusion. Materials were poor, engineers were missing, workers came and went as they pleased, and the final homes rarely matched the dreams people started with. Worst of all, no one stood beside the homeowners to guide them, protect their budget, or ensure their peace of mind. That’s when we knew something had to change. We started Brick by Bricks to give people more than just walls and roofs—we wanted to give them comfort, trust, and the joy of building without the pain. With honest supervision, quality construction, and clear communication, we are here to help families create homes that are beautiful, strong, and truly theirs—without the pressure.
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Mission(Written by me)</h2>
          <p className="text-gray-700 text-lg">
            At Brick by Bricks, our mission is to redefine the homebuilding experience by blending trust, quality, and care into every step of the process. We are committed to constructing beautiful, durable homes that reflect the dreams of the families who live in them. Born from a desire to bring order to chaos, we guide homeowners with transparent communication, honest supervision, and unmatched craftsmanship. Our goal is not just to build structures—but to build lasting relationships and homes where families can thrive, dream, and feel truly at peace.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
