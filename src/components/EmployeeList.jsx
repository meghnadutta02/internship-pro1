import React from "react";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2"
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
const dummyEmployeeData = [

    {
        id: 3,
        name: "Michael Johnson",
        jobPost: "Backend Developer",
        yearsOfExperience: "5+ years",
        skills: "Python, Django, SQL",
        education: "Postgraduate",
        location: "New York, USA",
        availability: "Full-Time",
        salaryRange: "More than ₹1,00,000",
    },
    {
        id: 4,
        name: "Emily Lee",
        jobPost: "Data Scientist",
        yearsOfExperience: "3-5 years",
        skills: "Machine Learning, R, Python",
        education: "Postgraduate",
        location: "San Francisco, USA",
        availability: "Full-Time",
        salaryRange: "₹75,000 - ₹1,00,000",
    },
    {
        id: 5,
        name: "David Brown",
        jobPost: "Frontend Developer",
        yearsOfExperience: "1-3 years",
        skills: "HTML, CSS, JavaScript",
        education: "Undergraduate",
        location: "London, UK",
        availability: "Part-Time",
        salaryRange: "₹50,000 - ₹75,000",
    },
    {
        id: 6,
        name: "Sophia Wilson",
        jobPost: "Product Manager",
        yearsOfExperience: "5+ years",
        skills: "Product Development, Agile",
        education: "Postgraduate",
        location: "Sydney, Australia",
        availability: "Full-Time",
        salaryRange: "More than ₹1,00,000",
    },
    {
        id: 7,
        name: "Daniel Kim",
        jobPost: "Mobile App Developer",
        yearsOfExperience: "3-5 years",
        skills: "iOS, Swift, Android",
        education: "Undergraduate",
        location: "Seoul, South Korea",
        availability: "Remote",
        salaryRange: "₹75,000 - ₹1,00,000",
    },
    {
        id: 8,
        name: "Olivia Johnson",
        jobPost: "Graphic Designer",
        yearsOfExperience: "1-3 years",
        skills: "Adobe Illustrator, Photoshop",
        education: "Undergraduate",
        location: "Berlin, Germany",
        availability: "Freelance/Contract",
        salaryRange: "₹50,000 - ₹75,000",
    },
];

const EmployeeList = () => {
    const isMobile = useMediaQuery({ maxWidth: 640 });
    return (
        <div className="lg:w-[92%] w-[70%]  mx-auto my-10">

            <div className=" grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">

                {dummyEmployeeData.map((employee) => (
                    <motion.div
                        key={employee.id}
                        whileHover="hover"
                        variants={{ hover: { scale: 1.1 } }}
                        transition={{ duration: 0.1 }}
                        className="bg-white rounded-md shadow-md px-6 py-4 mb-4 hover:shadow-4xl transition-shadow"
                    >
                        <div className="flex justify-between">
                            <h3 className="md:text-lg font-semibold text-[#2a6a94] mb-1">{employee.name}</h3>
                            {!isMobile && <button className="bg-[#2a6a94] text-white py-2 px-4 text-sm flex rounded-md font-semibold items-center"><HiOutlineDocumentArrowDown className="inline mr-1.5 text-white w-4 h-4" />Resume</button>}
                        </div>

                        <p className="text-sm text-[#2a6a94] mb-2">
                            {employee.jobPost} | {employee.yearsOfExperience}
                        </p>
                        <p className="text-sm text-[#2a6a94] mb-2">Skills: {employee.skills}</p>
                        <p className="text-sm text-[#2a6a94] mb-2">Education: {employee.education}</p>
                        <p className="text-sm text-[#2a6a94] mb-2">Location: {employee.location}</p>
                        <p className="text-sm text-[#2a6a94] mb-2">Availability: {employee.availability}</p>
                        {isMobile && <div className="mt-3">
                            <button className="bg-[#2a6a94] text-white py-2 px-4 text-sm flex rounded-md font-semibold items-center"><HiOutlineDocumentArrowDown className="inline mr-1.5 text-white w-4 h-4" />Resume</button></div>}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EmployeeList;
