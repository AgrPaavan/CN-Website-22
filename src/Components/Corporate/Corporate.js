import React from 'react'
import style from './Corporate.module.css'
import img from './assets/Img1.svg'
import leftar from './assets/leftar.svg'
import middle from './assets/middle.svg'
import rightar from './assets/rightar.svg'
import { Link } from 'react-router-dom'

function Corporate() {
    return (
        <div className={`${style.corporatebg}`}>
        <div className={`md:text-7xl text-5xl text-transparent bg-clip-text font-extrabold md:pt-20 md:mt-12 mt-12 pt-10 ${style.corporateheading}`}>CORPORATE</div>
        <div className={`md:text-9xl  text-6xl text-transparent bg-clip-text font-extrabold md:mb-10 mb-5 pb-2 ${style.domainsheading}`}>DOMAIN</div>
        <div className='md:flex md:pb-10 justify-center'>
            <p className='text-left md:text-xl mx-auto font-light text-white px-16 pt-10 md:px-20 md:pt-10 md:mx-2 md:pb-0 pb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna.
            orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna .<p className='md:pt-10 pt-10 mt-5 md:mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna.
            orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna .</p>
            </p>
            <img className='md:mb-5 md:block hidden md:w-100 md:h-100 w-1/2 h-1/2 md:mr-10 md:pr-20' src={img}/>
        </div>
        <div className='flex justify-center pb-20'>
                <Link to='/technical'><img src={leftar} className='mx-10'/></Link>
                <img src={middle}/>
                <Link to='/creative'><img src={rightar} className='mx-10'/></Link>
            </div>
        </div>
    )
}

export default Corporate;