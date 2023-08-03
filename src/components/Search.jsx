import React, { useState } from "react";
import { BsSearch } from "react-icons/bs"
import EmployeeList from "./EmployeeList";
import { motion } from "framer-motion"
const salaryRanges = [
    { id: 1, value: "Less than ₹25,000" },
    { id: 2, value: "₹25,000-₹50,000" },
    { id: 3, value: "₹50,000 - ₹75,000" },
    { id: 4, value: "₹75,000 - ₹1,00,000" },
    { id: 5, value: "More than ₹1,00,000" },
];
const yearsOfExperienceOptions = [
    { id: 1, value: "0-1 years" },
    { id: 2, value: "1-3 years" },
    { id: 3, value: "3-5 years" },
    { id: 4, value: "5-10 years" },
    { id: 5, value: "10+ years" },
];
const educationOptions = [
    { id: 1, value: "10th Pass" },
    { id: 2, value: "12th Pass" },
    { id: 3, value: "Undergraduate" },
    { id: 4, value: "Postgraduate" },
    { id: 5, value: "PhD" },

];

const availabilityOptions = [
    { id: 1, value: "Full-Time" },
    { id: 2, value: "Part-Time" },
    { id: 3, value: "Freelance/Contract" },
    { id: 4, value: "Remote" },
    { id: 5, value: "On-Site" },

];

const Search = ({ onSearch }) => {
    const [jobPost, setJobPost] = useState("Software Engineer");
    const [yearsOfExperience, setYearsOfExperience] = useState("");
    const [skills, setSkills] = useState("");
    const [education, setEducation] = useState("");
    const [location, setLocation] = useState("Kolkata,WB");
    const [availability, setAvailability] = useState("");
    const [salaryRange, setSalaryRange] = useState("");
    const [showCards, setShowCards] = useState(false);


    return (
        <>
            <div className="md:mt-5 flex flex-col w-[92%] mx-auto mb-20">
                <motion.div className="text-md my-10 font-semibold md:text-2xl text-md text-[#2a6a94] md:w-4/5" initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -60 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    Finding the perfect candidate for your company is now easier than ever with our advanced candidate search tools.
                </motion.div>
                <div className="flex md:flex-row flex-col gap-6 items-center justify-between w-full">
                    <input
                        type="text"
                        value={jobPost}
                        onChange={(e) => setJobPost(e.target.value)}
                        className="py-2 px-4 rounded-md border border-gray-300 w-[95%] sm:w-[80%] md:w-2/6"
                        placeholder="Job Post"
                    />
                    {/* Years of Experience */}
                    <select
                        value={yearsOfExperience}
                        onChange={(e) => setYearsOfExperience(e.target.value)}
                        className="py-2 px-4 rounded-md border border-gray-300 w-[95%] md:w-auto sm:w-[80%]"
                    >
                        <option value="">Select Years of Experience</option>
                        {yearsOfExperienceOptions.map((option) => (
                            <option key={option.id} value={option.value}>
                                {option.value}
                            </option>
                        ))}
                    </select>
                    {/* Education */}
                    <select
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        className="py-2 px-4 rounded-md border border-gray-300 w-[95%] md:w-auto sm:w-[80%]"
                    >
                        <option value="">Select Education</option>
                        {educationOptions.map((option) => (
                            <option key={option.id} value={option.value}>
                                {option.value}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="py-2 px-4 rounded-md border border-gray-300 w-[95%] sm:w-[80%] md:w-auto"
                        placeholder="Location"
                    />

                    <select
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                        className="py-2 px-4 rounded-md border border-gray-300 w-[95%] md:w-auto sm:w-[80%]"
                    >
                        <option value="">Select Availability</option>
                        {availabilityOptions.map((option) => (
                            <option key={option.id} value={option.value}>
                                {option.value}
                            </option>
                        ))}
                    </select>

                    <select
                        value={salaryRange}
                        onChange={(e) => setSalaryRange(e.target.value)}
                        className="py-2 px-4 rounded-md border border-gray-300 w-[95%] md:w-auto sm:w-[80%]"
                    >
                        <option value="">Select Salary Range</option>
                        {salaryRanges.map((range) => (
                            <option key={range.id} value={range.value}>
                                {range.value}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={() => setShowCards(true)}
                    className="bg-[#2a6a94] text-white py-2 px-14 flex justify-center items-center mx-auto rounded-md font-semibold mt-8"
                >
                    Search <BsSearch className="text-white inline ml-2" />
                </button>

            </div>
            {showCards && <EmployeeList />}
        </>
    );
};

export default Search;
