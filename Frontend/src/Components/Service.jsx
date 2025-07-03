import { FaUserDoctor } from "react-icons/fa6";
import { GiTestTubes } from "react-icons/gi";
import { TbDental } from "react-icons/tb";
import { IoNutritionOutline } from "react-icons/io5";

const serviceLists = [
    {
        id:1,
        icon: <FaUserDoctor />,
        service: 'Physicians',
        description: 'Personalized care and expert medical advice from trusted physicians.'
    },

    {
        id:2,
        service: 'Laboratory',
        icon: <GiTestTubes />,
        description: 'Reliable diagnostic tests for accurate and timely health insights.'
    },

    {
        id:3,
        service: 'Dental',
        icon: <TbDental />,
        description: 'Comprehensive dental care for a healthy and confident smile forever.'
    },

    {
        id:4,
        icon:<IoNutritionOutline />,
        service: 'Nutrition',
        description: 'Personalized nutrition plans to support your health and wellness goals.'
    }
]

const Service = () => {
  return (
    <div className='space-y'>
        <div className="text-center space-y-3">
        <p className="text-xs text-[#00695f]">SERVICE</p>
        <p className="md:text-xl font-medium">We offer a comprehensive range of medical care</p>

        <div className="flex gap-8 justify-center items-center ">
            {
                serviceLists.map((serviceList)=>{
                    return(
                        <div key={serviceList.id} className="border flex-col justify-center p-6 space-y-4 ">
                            <div className="flex items-center justify-center text-3xl bac">
                                {serviceList.icon}
                            </div>
                            <p>{serviceList.service}</p>
                            <p>{serviceList.description}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Service