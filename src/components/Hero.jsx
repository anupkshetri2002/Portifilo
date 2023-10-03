import React from 'react';
import {FaTwitter, FaFacebook, FaLinkedin, FaArrowDown} from 'react-icons/fa';
import avatar from "../assets/avatar.png";

const Hero = () => {
const SOCIAL =[
    {
        id:1,
        link: "https//twitter.com",
        icon: <FaTwitter />
    },
    {
        id:2,
        link:"https//facebook.com",
        icon: <FaFacebook />
    },
    {
        id:3,
        link:"https//linkedin.com",
        icon: <FaLinkedin />
    },
];
  return (
  <section className='min-h-screen flex flex-col justify-start
   items-center p-5 text-center'>
    <h2 className='text-5xl text-rose-600 uppercase font-bold
    '> Anup Chhetri</h2>
    <h3 className='py-3 text-2xl'>Developer</h3>
<p  className='max-w-xl font-light text-end text-gray-500 '>
    Hello<span className='animate-pulse text-4xl'>👋</span>Welcome to my
    Website. I am a student at islington college. I love to work on Web development, Mobile dev and others projects.
</p>
 <div className='flex justify-evenly space-x-2 py-8 lg:py-16 text-3xl w-full md:1/3'>
    {SOCIAL.map(({id, link, icon}) => (

        < a href={link}
         key={id}
         target='_blank'
         rel='noopener noreferrer'
          className='cursor-pointer duration-500 hover:text-rose-600'>
            {icon}</a>
        ) ) }
        <div>
            <img src={avatar} alt='' />
            <a href =''></a>
        </div>
        </div>
  </section>
  );
};

export default Hero;