import React from 'react'

const steps = [
{
  step: 1,
  title:'Find service',
  message:'Quickly find the care or service you need. Choose the option that works best for you.',
},
{
  step: 2,
  title:'Search doctor',
  message:'Quickly search for the doctor you need. Choose the one that fits your care.',
},
{
  step: 3,
  title:"Check doctor's profile",
  message:"View the doctor’s profile and credentials. Learn more before making your choice",
},
{
  step: 4,
  title:'Schedule appointment',
  message:'Book an appointment at your convenience. Choose the time that works for you',
},


]

const ProcessGrid = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-3">
        <p className="text-xs text-[#00695f]">FASTEST SOLUTION</p>
        <p className="md:text-xl font-medium">5 easy steps to get your solution</p>
      </div>

      {/* Center the grid itself + center items inside */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center text-center ">
        {steps.map((step) => (
          <div key={step.step} className="p-4 text-center hover:scale-105">
            <p className="text-xl font-bold text-[#00695f]">{step.step}</p>
            <p className="text-lg font-semibold">{step.title}</p>
            <p className="text-sm text-gray-600">{step.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProcessGrid
