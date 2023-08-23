import { Karantina } from 'next/font/google';

const karantina = Karantina({
    weight: '400',
    preload: false,
})

export const TheLogo = () => {
    return (
        <div>
            <div className='w-[61px] h-[22px] bg-[url("/logo.png")] bg-no-repeat bg-cover'>
            </div>
           <div className={karantina.className}>
           <span className='text-sm tracking-[2.59px]'>CarpTravel</span>
           </div>
        </div>
    )
}