import React, { useEffect, useState } from 'react'
import { skillset } from '../../Constants/Skills'

const SkillsAndExperience = () => {

    const [skills, setSkills] = useState([])

    useEffect(() => {
        const groupedByType = skillset.reduce((result, item) => {
            const existingGroup = result.find(group => group.type === item.type);
            
            if (existingGroup) {
              existingGroup.items.push(item);
            } else {
              result.push({
                type: item.type,
                items: [item],
              });
            }
            
            return result;
          }, []);
        setSkills(groupedByType)
    },[])

    return (
        <div className='mt-10 flex justify-center px-3'>
            <div className=' bg-primaryCard w-screen md:w-10/12 lg:w-7/12 px-2 md:px-10 p-5 text-center rounded-xl'>
                <h1 className='text-2xl text-white font-semibold bg-transparent sticky top-3.5 uppercase z-10'>Skills & Experience</h1>
                <div className='bg-transparent flex flex-wrap gap-4 mt-10 justify-center'>
                    {
                        skills.map((item, index) => {
                            return(
                                <div key={index} className=' bg-black bg-opacity-10 shadow-inner p-2 rounded-xl w-full'>
                                    <h1 className=' bg-transparent text-white font-semibold mb-3'>{item.type}</h1>
                                    <div className='flex flex-wrap gap-4 justify-center bg-transparent'>
                                        {
                                            item.items.map(items => {
                                                return(
                                                    <div key={items.title} className='bg-black p-2 px-2 bg-opacity-[0.2] uppercase justify-center text-secondaryText flex items-center rounded-lg'>
                                                        <img src={items.logo} alt={items.title} className='w-6 h-6 rounded-full mr-2'/>{items.title}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillsAndExperience
