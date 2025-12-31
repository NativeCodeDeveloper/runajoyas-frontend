import Image from "next/image"
import {ShadcnButton} from "@/Componentes/shadcnButton";
import {Meow_Script} from 'next/font/google';

const meow = Meow_Script({
    subsets: ['latin'],
    weight: '400',
    display: 'swap'
})


export default function Portada2() {
    return (
<div>
    <section className="relative w-full h-[750px] hidden md:block">

        <Image
            src={'/hero3.png'}
            alt={'hero1'}
            fill
            priority
            className='object-cover' />

        <div className="relative z-10 flex flex-col justify-center h-full items-center mr-200">
            <Image src={'/logohd.png'} alt={'logohd'} width={450} height={300}  />

            <h1  className={`${meow.className} text-5xl font-bold text-gray-900 ml-50 -mt-10`}>Cuando el verano florece en el sur de <span className='text-7xl'>Chile</span>.</h1>
            <br/>

            <div className='mr-50 text'>
                <a href="https://wa.me/56945486466" target="_blank" rel="noopener noreferrer">
                    <ShadcnButton nombre={'Comprar'} />
                </a>
            </div>


        </div>


    </section>








    <section className="relative w-full h-[600px] block md:hidden">
        <Image
            src={'/hero4.png'}
            alt={'hero1'}
            fill
            priority
            className='object-cover' />
        <div className="relative z-10 flex flex-col justify-center h-full items-center">
            <Image src={'/logohd.png'} alt={'logohd'} width={220} height={160} className='mt-75' />
            <h1  className={`${meow.className} text-base font-bold text-gray-900 ml-30 -mt-10`}><span className='text-3xl'>Chile</span>.</h1>

        </div>

    </section>
</div>












    )
}