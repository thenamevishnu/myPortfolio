
import { useNavigate } from 'react-router-dom'
import { projects } from '../../Constants/Projects'

const Featured = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='flex justify-center text-center mt-10 px-3'>
                <div className='w-screen md:w-10/12 lg:w-7/12 px-2 md:px-10 bg-primaryCard p-5 rounded-xl'>
                    <h1 className=' bg-transparent text-white text-2xl font-semibold sticky top-3.5 uppercase z-10'>Featured Projects</h1>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 bg-transparent mt-10'>
                        {
                            projects.filter(item => item.fearued).map(item => {
                                return(
                                    <div key={item.title} className=' bg-transparent'>
                                        <img src={item.logo} alt={item.title} className='w-full shadow-xl rounded-2xl'/>
                                        <p className='text-start mt-2 text-white bg-transparent font-semibold text-lg'>{item.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className=' bg-primaryButton p-2 px-4 rounded-full font-semibold mt-10 text-white' onClick={()=>navigate("/projects")}>More Projects <i className='fa fa-arrow-right bg-primaryButton ml-2'></i></button>
                </div>
            </div>
        </>
    )
}

export default Featured
