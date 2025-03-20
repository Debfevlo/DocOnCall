import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const faq = [
  {
    category: "General",
    questions: [
      {
        q: "How do I book an appointment?",
        a: "You can book an appointment through our website by selecting a service and choosing a time slot that suits you.",
      },
      {
        q: "Can I reschedule or cancel my appointment?",
        a: "Yes, you can reschedule or cancel your appointment from your account dashboard.",
      },
    ],
  },
  {
    category: "Doctor Consultation",
    questions: [
      {
        q: "How do online doctor consultations work?",
        a: "Simply book a consultation, and a doctor will connect with you via video call at the scheduled time.",
      },
      {
        q: "Can I get a prescription after an online consultation?",
        a: "Yes, prescriptions are provided digitally if required.",
      },
    ],
  },
  {
    category: "Lab Services",
    questions: [
      {
        q: "Can I get my test results online?",
        a: "Yes, test results are available in your account dashboard.",
      },
      {
        q: "Do you offer home sample collection?",
        a: "Yes, we provide home sample collection for select tests.",
      },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 px-4 sm:max-w-4xl md:max-w-5xl md:px-0 mx-auto">
      {/* Headings (Always Centered) */}
      <p className="text-center text-secondary font-medium text-sm sm:text-base">
        Got Questions? We've Got Answers
      </p>
      <p className="text-xl sm:text-2xl md:text-3xl text-center mt-2 font-semibold">
        Frequently Asked Questions
      </p>

      {/* FAQ Section (Centered on Mobile, Left-Aligned on Larger Screens) */}
      <div className="mt-6 sm:max-w-xl mx-auto md:max-w-full">
        {faq.map((category, categoryIndex) => (
          <div className="mt-6" key={categoryIndex}>
            {/* Category Name */}
            <p className="font-semibold text-lg sm:text-xl">{category.category}</p>

            {/* Questions List */}
            {category.questions.map((question, questionIndex) => {
              const uniqueIndex = `${categoryIndex}-${questionIndex}`;

              return (
                <div key={uniqueIndex} className="mt-4 border-b pb-3">
                  {/* Question Section */}
                  <div
                    className="flex justify-between items-center cursor-pointer py-2"
                    onClick={() => toggleQuestion(uniqueIndex)}
                  >
                    <p className="font-medium text-sm sm:text-base">{question.q}</p>
                    <FaChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                        openIndex === uniqueIndex ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Answer Section (only show when clicked) */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === uniqueIndex ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="mt-2 text-gray-600 text-sm sm:text-base">{question.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
