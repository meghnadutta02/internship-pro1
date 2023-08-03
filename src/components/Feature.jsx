import { motion } from 'framer-motion';

const childVariant = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.05 },
};

const Feature = ({ image, title, description, index, setSelectedPage }) => {
  return (
    <motion.div
      key={index}
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-[#a1cfe6c8] lg:w-4/12 hover:scale-125 transition-scale duration-150 ease-in px-5 md:pb-10 pb-5 md:pt-4 pt-1 text-center shadow-sm hover:shadow-2xl "
      whileHover="hover" 
      transition={{ duration: 0.02 }}
    >
      <div className="md:mb-4 mb-0 flex justify-center">
        <img
          src={image}
          className="w-[280px] h-[300px] object-contain "
          alt={title}
        />
      </div>

      <h4 className="font-bold text-[#2a6a94]">{title}</h4>
      <p className="md:my-3 my-1 text-[#2a6a94]">{description}</p>
      
    </motion.div>
  );
};

export default Feature;
