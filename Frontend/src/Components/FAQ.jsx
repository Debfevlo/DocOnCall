import { useState } from "react";
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const homepageFaqs = [
    {
    question: "How do I book a medical appointment?",
    answer:
      "Select a service, choose a specialist, and pick a date and time. You'll receive confirmation once it's booked."
    },

    {
    question: "Can I consult a doctor online?",
    answer:
      "Yes! You can have video or chat consultations with certified doctors through our telemedicine feature."
  },

  {
    question: "Are my medical records secure?",
    answer:
      "Yes, we use encrypted systems to ensure your health data is kept private and protected."
  }
]
const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index)
    }

  return (
        <section className='px-4 py-12 md:mt-16 mt-8 space-y-4 '>
             <p className="text-xs text-[#00695f] text-center">FAQ</p>
            <h3 className="md:text-xl font-medium text-center">
                 Your health matters — here are answers to questions you may have.
            </h3>
         <div className="space-y-6">
        {homepageFaqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 py-3 text-left text-lg font-medium text-gray-800 flex justify-between items-center"
            >
              {faq.question}
              <span className="text-2xl text-[#80cbc4]">
                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-700 border-t border-gray-200 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

        </section>
  )
}

export default Faq