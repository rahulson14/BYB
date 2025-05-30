import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Alper Kamu",
    role: "UI Developer",
    img: "https://dummyimage.com/200x200",
    bio: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Holden Caulfield",
    role: "Frontend Engineer",
    img: "https://dummyimage.com/201x201",
    bio: "Passionate about clean UI, seamless UX, and accessibility-first design.",
  },
  {
    name: "Atticus Finch",
    role: "Backend Developer",
    img: "https://dummyimage.com/202x202",
    bio: "Believes in strong APIs, secure systems, and automated deployments.",
  },
  {
    name: "Henry Letham",
    role: "DevOps Specialist",
    img: "https://dummyimage.com/203x203",
    bio: "Streamlining cloud infrastructure and CI/CD pipelines at scale.",
  },
];

export default function Peoples() {
  return (
    <section className="text-gray-600 body-font bg-gray-50 py-24">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-blue-700">OUR TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            Meet the people building the future of our platform with innovation, empathy, and excellence.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-4 lg:w-1/4 md:w-1/2"
            >
              <div className="h-full flex flex-col items-center text-center bg-white shadow-md hover:shadow-xl rounded-xl p-6 transition">
                <img
                  alt={member.name}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={member.img}
                />
                <div className="w-full">
                  <h2 className="title-font font-semibold text-lg text-gray-900">{member.name}</h2>
                  <h3 className="text-blue-600 mb-2 font-medium">{member.role}</h3>
                  <p className="mb-4 text-sm text-gray-600">{member.bio}</p>
                  <span className="inline-flex space-x-2">
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 
                        8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
