import React from "react";
import { motion } from "framer-motion";
import Software from "../assets/software.svg"
import Team from "../assets/team.svg"
import Skills from "../assets/skills.svg"
import Feature from "../components/Feature"



const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const benefits = [
  {
    image:Software ,
    title: "Top Software Engineers",
    description:
      "Access a curated pool of top-tier software engineers with a track record of excellence. Our platform connects you with highly skilled developers ready to contribute to your projects.",
  },
  {
    image: Skills,
    title: "Diverse Skillsets",
    description:
      "Find software engineers with diverse skillsets. Whether you need frontend, backend, full-stack, mobile, or specialized developers, we've got you covered.",
  },
  {
    image: Team,
    title: "Collaborative Team Players",
    description:
      "Hire software engineers who are not only technically proficient but also excellent team players. They will seamlessly integrate into your existing teams and projects.",
  },
];

const Features = ({ setSelectedPage }) => {
  return (
    <motion.section
      
      id="services"
      className="min:h-full mx-auto w-5/6 py-20"
    >
      {/* headers */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0 },
        }}
        className="md:w-3/4"
      >
    
        <p className="text-md my-4 font-semibold sm:text-3xl text-2xl text-[#2a6a94] ">
        Build your dream team and bring your ideas to life, whether you're a startup, enterprise, or tech company.
        </p>
      </motion.div>
      {/* benefits */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        className="mt-5 items-center justify-between gap-8 md:flex"
      >
        {benefits.map((benefit, index) => (
          <Feature
            key={index}
            index={index}
            image={benefit.image}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Features;
