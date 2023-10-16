import React from 'react'
import { projects } from '../../Constants/Projects'

const Projects = () => {
    return (
        <div className='mx-3 md:mx-10 bg-transparent mt-20'>
            <h1 className=' uppercase text-center bg-transparent mb-5 text-2xl font-semibold text-white'>PROJECTS</h1>
            <div className='flex justify-center gap-4 flex-wrap p-2 bg-transparent'>
                {
                    projects.map(item => {
                        return(
                            <div key={item.title} className='w-80 bg-transparent group cursor-pointer'>
                                <img src={item.logo} alt={item.title} className='rounded-xl object-cover'/>
                                <div className='h-0 group-hover:h-auto overflow-hidden text-center bg-black bg-opacity-20 text-secondaryText rounded-xl w-80 group-hover:p-3 transition-all duration-300'>
                                    <h1 className='text-lg font-semibold bg-transparent'>{item.title}</h1>
                                    <span className=' bg-transparent mb-5 text-xs italic'>{item.type}</span>
                                    <p className='bg-transparent whitespace-nowrap'>Front-end: <span className=' bg-transparent text-blue-500 font-mono' onClick={()=>window.open(item.links.frontEnd, "_blank")}>{item.links.frontEnd.replace("https://github.com/thenamevishnu/","")}</span></p>
                                    {item.links.backEnd && <p className=' bg-transparent whitespace-nowrap'>Back-end: <span className=' bg-transparent text-blue-500 font-mono' onClick={()=>window.open(item.links.backEnd, "_blank")}>{item.links.backEnd.replace("https://github.com/thenamevishnu/","")}</span></p>}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects
