// import React from 'react'
// import { motion } from "framer-motion";

// const fadeInUpVariant = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (i = 1) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             delay: i * 0.4,
//             duration: 0.8,
//             ease: "easeOut"
//         }
//     })
// };

// const Hero = () => {
//     return (
//         <div
//             className="relative min-h-screen flex items-center justify-end bg-[rgb(215,212,215)] px-36 bg-cover bg-center"
//             style={{ backgroundImage: "url('Background.png')" }}
//         >
//             <div className="text-6xl leading-tight text-left space-y-4">
//                 <motion.h1
//                     custom={0}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={fadeInUpVariant}
//                     className="font-semibold text-black"
//                 >
//                     The right way
//                 </motion.h1>

//                 <motion.h1
//                     custom={1}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={fadeInUpVariant}
//                     className="font-semibold text-white"
//                 >
//                     to build your
//                 </motion.h1>

//                 <motion.h1
//                     custom={2}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={fadeInUpVariant}
//                     className="font-extrabold text-red-700 flex items-center"
//                 >
//                     HOME{' '}
//                     <button className="ml-4 text-base animate-pulse text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md active:scale-95">
//                         <a href="https://wa.link/0v69u0" target='_blank'>Contact us -&gt;</a>
//                     </button>
//                 </motion.h1>
//             </div>

//             <button className="absolute bottom-7 left-1/2 -translate-x-1/2 text-2xl font-semibold text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95">
//                 Get a Quote
//             </button>
//         </div>
//     )
// }

// export default Hero




import React from 'react'
import { motion } from "framer-motion";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-end bg-[rgb(215,212,215)] 
      px-6 sm:px-12 md:px-24 lg:px-36 bg-cover bg-center"
      style={{ backgroundImage: "url('Background.png')" }}
    >
      <div className="text-4xl sm:text-5xl md:text-6xl leading-tight text-left space-y-4">
        <motion.h1
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
          className="font-semibold text-black"
        >
          The right way
        </motion.h1>

        <motion.h1
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
          className="font-semibold text-white"
        >
          to build your
        </motion.h1>

        <motion.h1
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
          className="font-extrabold text-red-700 flex flex-wrap items-center"
        >
          HOME{' '}
          <button className="ml-2 mt-2 sm:ml-4 sm:mt-0 text-sm sm:text-base animate-pulse text-white bg-blue-600 px-3 sm:px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md active:scale-95">
            <a href="https://wa.link/0v69u0" target='_blank' rel="noreferrer">Contact us -&gt;</a>
          </button>
        </motion.h1>
      </div>

      <button className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 text-lg sm:text-xl md:text-2xl font-semibold text-white bg-blue-600 px-4 sm:px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95">
        Get a Quote
      </button>
    </div>
  )
}

export default Hero


