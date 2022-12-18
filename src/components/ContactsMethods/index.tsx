import { PropsWithChildren } from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'


interface contact extends PropsWithChildren {
  link: string
}

function ContactMethod(props: contact){
  return (
      <a href={props.link} target='_blank' className="text-[#fff] hover:scale-110 transition-transform">
        {props.children}
      </a>
  )
}

export const ContactMethods = function(){
  const SIZE = 40

  return (
    <nav id='contact-methods' className='flex items-start gap-8'>
      <ContactMethod link='https://www.linkedin.com/in/jeffersonalves7/'>
        <AiFillLinkedin size={SIZE} className=" text-blue"/>
      </ContactMethod>
      <ContactMethod link='https://github.com/JeffersonAlves7'>
        <AiFillGithub size={SIZE} className=' dark:text-[#fff] text-black'/>
      </ContactMethod>
      <ContactMethod link='mailto:ilj031420@gmail.com'>
        <AiFillMail size={SIZE} className=' text-[#a94040]'/>
      </ContactMethod>
    </nav>
  )
}