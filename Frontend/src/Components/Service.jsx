import { FaUserDoctor } from "react-icons/fa6";
import { GiTestTubes } from "react-icons/gi";
import { TbDental } from "react-icons/tb";
import { IoNutritionOutline } from "react-icons/io5";

const serviceLists = [
    {
        id:1,
        icon: <FaUserDoctor />,
        service: 'Physicians',
        description: 'Personalized care and expert medical advice from trusted physicians.',
        button: 'Explore Now'
        
    },

    {
        id:2,
        service: 'Laboratory',
        icon: <GiTestTubes />,
        description: 'Reliable diagnostic tests for accurate and timely health insights.',
        button: 'Explore Now'
    },

    {
        id:3,
        service: 'Dental',
        icon: <TbDental />,
        description: 'Comprehensive dental care for a healthy and confident smile forever.',
        button: 'Explore Now'
    },

    {
        id:4,
        icon:<IoNutritionOutline />,
        service: 'Nutrition',
        description: 'Personalized nutrition plans to support your health and wellness goals.',
        button: 'Explore Now'
    }
]

const Service = () => {
  return (
    <div className="mt-6">
  <div className="text-center space-y-3">
    <p className="text-xs text-[#00695f]">SERVICE</p>
    <p className="md:text-xl font-medium">
      We offer a comprehensive range of medical care
    </p>

    <div className="flex flex-wrap gap-9 justify-center items-stretch">
      {serviceLists.map((serviceList) => (
        <div
          key={serviceList.id}
          className="border border-[#e0f2f1] rounded-lg p-6 space-y-4 w-[250px] flex flex-col items-center text-center shadow-md hover:scale-105"
        >
          <div className="text-3xl bg-[#80cbc4] p-4 rounded-full">
            {serviceList.icon}
          </div>
          <p className="font-semibold">{serviceList.service}</p>
          <p className="text-sm text-gray-600">{serviceList.description}</p>
          <div>
            <button className="text-[#00695f]">{serviceList.button}</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Service