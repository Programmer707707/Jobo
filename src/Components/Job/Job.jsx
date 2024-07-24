import React from 'react'
import { BiTimeFive } from 'react-icons/bi'

const Data = [
  {
    id: 1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'Novac Linus Co.',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    time: '1Hr',
    location: 'USA',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'Tech Solutions Ltd.',
  },
  {
    id: 3,
    title: 'Backend Developer',
    time: '2Hrs',
    location: 'UK',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'Global Tech Inc.',
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    time: '2Hrs',
    location: 'Australia',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'Innovatech Corp.',
  },
  {
    id: 5,
    title: 'Software Engineer',
    time: '3Hrs',
    location: 'Germany',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'FutureWorks LLC.',
  },
  {
    id: 6,
    title: 'Mobile Developer',
    time: '4Hrs',
    location: 'India',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'Appify Co.',
  },
  {
    id: 7,
    title: 'DevOps Engineer',
    time: '5Hrs',
    location: 'France',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'CloudNet Solutions.',
  },
  {
    id: 8,
    title: 'Data Scientist',
    time: '6Hrs',
    location: 'Japan',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'DataPulse Analytics.',
  },
  {
    id: 9,
    title: 'System Administrator',
    time: '7Hrs',
    location: 'Brazil',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'NetSecure Co.',
  },
  {
    id: 10,
    title: 'UX/UI Designer',
    time: '8Hrs',
    location: 'Netherlands',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'DesignWorks Studio.',
  },
  {
    id: 11,
    title: 'AI Specialist',
    time: '9Hrs',
    location: 'Singapore',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'AI Innovators Ltd.',
  },
  {
    id: 12,
    title: 'Cybersecurity Analyst',
    time: '10Hrs',
    location: 'USA',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'SecureTech Solutions.',
  },
  {
    id: 13,
    title: 'Blockchain Developer',
    time: '11hrs',
    location: 'Switzerland',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'CryptoDev Co.',
  },
  {
    id: 14,
    title: 'ML & AI Developer',
    time: '12Hrs',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'ML Futureworks.',
  },
  {
    id: 15,
    title: 'DevOps & Cloud Architect',
    time: '13Hrs',
    location: 'Australia',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'SkyHigh Cloud Services.',
  },
  {
    id: 16,
    title: 'HR Manager',
    time: '14Hrs',
    location: 'California',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Kimet consectetur adipisicing elit. Lorem consectetur adipisicing elit',
    company: 'TechnoLab Inc.',
  },


]

const Job = () => {
  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>

       {
        Data.map(({id,title,time,location,desc,company})=> {
          return(
            <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue shadow-lg shadow-greyish-400/700 hover:shadow-lg'>
        
            <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive/>{time}
              </span>
            </span>
            <h6 className='text-[#ccc]'>{location}</h6>
            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20xp] group-hover:text-white'>
              {desc}
            </p>
  
            <div className='company flex items-center gap-2'>
              <span className='text-[14px] py-[1rem] block group-hover:text-white '>{company}</span>
            </div>
  
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>
          
          </div>
          )
        })
       }

      </div>
    </div>
  )
}

export default Job