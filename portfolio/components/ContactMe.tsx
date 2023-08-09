import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {}

type Inputs= {
    name: string,
    email: string,
    subject: string,
    message: string
}

export default function ContactMe({}: Props) {

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => window.location.href=`mailto: tahmidahmed1@usf.edu?subject=${data.subject}&body=Hi my name is ${data.name}. ${data.message}`;

  return (
    <div className='h-screen flex relative flex-col text-center md:text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='pageHeading'>Contact
        </h3>
    <div className='flex flex-col mt-400'>
        <h5 className='text-xl font-semibold text-center'>
            I have got just what you need. {" "} <span className='underline decoration-[#332B3A]/50'>Let's talk</span> 
        </h5>
        <div className='space-y-6'>
            <div className='flex items-center space-x-5'>
            <PhoneIcon className='text-[#332B3A] h-7 w-7 animate-pulse'/>            
            <p className='text-lg'>813-729-3351</p>
            </div>

            <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-[#332B3A] h-7 w-7 animate-pulse'/>            
            <p className='text-lg'>tahmidahmed1@usf.edu</p>
            </div>

            <div className='flex items-center space-x-5'>
            <MapPinIcon className='text-[#332B3A] h-7 w-7 animate-pulse'/>            
            <p className='text-lg'>2037 Blue Rock Dr, Tampa, FL 33612</p>
            </div>

            
        </div>
        <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex space-x-2'>
                <input {...register('name')} placeholder='Name' className='contactInput' type="text"/> <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
            </div>
            <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
            <textarea  {...register('message')} placeholder='Message' className='contactInput' />
            <button  type='submit' className='bg-[#332B3A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
    </div>
    
    </div>
  )
}