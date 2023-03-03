import { useState } from 'react'
import { baner1 } from '../../assets/home/slider/slider'

export default function ImageSlider() {
    const [step, setStep] = useState(0)
    return (
        <div className='pt-[5rem] md:pt-[6rem] relative'>
            <img className="xl:object-contain w-full min-h-[50vh] xl:min-h-0 object-cover" src={baner1} alt="" />
            <div className='absolute inset-0 padding pt-[3in]'>
                <h1 className='text-white font-bold text-[4rem] leading-none capitalize'>WSPOMÓŻ FUNDACJĘ<br />SYNAPSIS!</h1>
            </div>
            <button className='text-[#1A356D] font-bold open-sans bg-primary py-6 px-12 text-3xl absolute right-0 bottom-16'>PRZEKAŻ DAROWIZNĘ</button>
        </div>
    )
}