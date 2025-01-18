import React from 'react'
import Button from '../../../components/Button'
import HeroImage from '../../../assets/HeroImage.png'
import compLogo1 from '../../../assets/compLogo1.png'
import compLogo2 from '../../../assets/compLogo2.png'
import compLogo3 from '../../../assets/compLogo3.png'
import compLogo4 from '../../../assets/compLogo4.png'
import compLogo5 from '../../../assets/compLogo5.png'
import compLogo6 from '../../../assets/compLogo6.png'


const images = [
    compLogo1,
    compLogo2,
    compLogo3,
    compLogo4,
    compLogo5,
    compLogo6
]

function HeroSection() {
  return (
    <div className='flex flex-col gap-4 mt-8 justify-between items-center md:w-[85%] mx-auto p-5 md:p-4 text-black'>


        <div className='flex border border-rose-500 text-rose-600 py-1 gap-3 text-sm md:text-base rounded-2xl'>
            <p className='border border-rose-500 px-3 rounded-2xl ml-1'>New feature</p>
            <p className='mr-3'>Check out the team dashboard </p>
        </div>

        <h1 className='text-4xl md:text-5xl font-bold text-center'>
            Beautiful analytics to grow smarter
        </h1>

        <p className='text-gray-600 md:max-w-[70%] text-center'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>

        <div className='flex flex-col md:flex-row gap-3 w-full md:max-w-28'>
            <Button btnType='outline' className='rounded-3xl'>Demo</Button>
            <Button className='rounded-3xl'>Signup</Button>
        </div>

        {/* Hero image */}
        <div className='border-2 rounded-lg border-black'>
            <img src={HeroImage} alt="" />
        </div>

        <p className='text-center mt-4 md:mt-8 '>Join 4,000+ companies already growing</p>

        <div className="flex gap-5 flex-wrap justify-center items-center">
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt="" className='h-8' />
                </div>
            ))}
        </div>
    </div>
  )
}

export default HeroSection