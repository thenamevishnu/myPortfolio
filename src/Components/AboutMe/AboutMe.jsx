import React from 'react'
import { links } from '../../Constants/Links'

const AboutMe = () => {
    return (
        <div className='mt-20 flex justify-center px-3'>
            <div className=' bg-primaryCard w-screen md:w-10/12 lg:w-7/12 md:px-10 px-2 p-5 text-center rounded-xl'>
                <div className='sticky top-0 uppercase z-10 bg-transparent'>
                    <h1 className='text-white bg-transparent text-2xl font-semibold'>VISHNU M K</h1>
                    <h6 className=' bg-transparent italic text-secondaryText text-xs mt-2'>MERN STACK DEVELOPER</h6>
                </div>
                <p className=' bg-transparent font-mono mt-5 text-secondaryText w-full'>Self-taught Full-stack web developer who is enthusiastic about web-development and loves to solve problems. Capable of thinking critically, solving problems independently, and learning new concepts and technologies quickly</p>
                <div className='flex text-xl bg-transparent justify-center mt-5'>
                    <i onClick={()=>window.open(links.github, "_blank")} className='fab fa-github mr-3 rounded-full bg-black bg-opacity-20 p-2 text-opacity-50 text-white cursor-pointer'></i>
                    <i onClick={()=>window.open(links.linkedIn, "_blank")} className='fab fa-linkedin mr-3 rounded-full bg-black bg-opacity-20 p-2 text-opacity-50 text-white cursor-pointer'></i>
                    <i onClick={()=>window.open(links.instagram, "_blank")} className='fab fa-instagram mr-3 rounded-full bg-black bg-opacity-20 p-2 text-opacity-50 text-white cursor-pointer'></i>
                    <i onClick={()=>window.open(links.email, "_blank")} className='fa fa-envelope rounded-full bg-black bg-opacity-20 p-2 text-opacity-50 text-white cursor-pointer'></i>
                </div>
                <button className=' bg-primaryButton p-2 px-4 rounded-full font-semibold mt-5 text-white' onClick={()=>window.open(links.resume, "_blank")}>View Resume <i className='fa fa-arrow-right bg-primaryButton ml-2'></i></button>
            </div>
        </div>
    )
}

export default AboutMe
