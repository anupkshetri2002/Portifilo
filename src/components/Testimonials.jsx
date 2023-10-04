import React from 'react';
import Section from './common/Section';
import avatarr from '../assets/avatarr.png'
import avatar1 from '../assets/avatar1.png'
import avatar22 from '../assets/avatar22.png'


const Testimonials = () => {
    const TESTIMONIALS =[
        {
            id:1,
            image:avatarr,
            name:"Kirtan kunwar",
            comment:
            "Working with Anup was a revelation. Their meticulous attention to detail is evident in every pixel of our website. The result? A stunning, user-friendly platform that has exceeded our expectations."

        },
        {
            id:2,
            image:avatar1,
            name:"Abhijan Basyal",
            comment:
             "Collaborating with Anup on their e-commerce project was a true highlight of my career. Their passion for their products was infectious, and it motivated me to create a platform that not only showcases their offerings but also provides an exceptional shopping experience for their customers. "

        },
        {
            id:3,
            image:avatar22,
            name:"Raj Lamichhane",
            comment:"Partnering with Anup on their startup project was an exhilarating ride. Their vision for the product was ambitious, and it challenged me to push my technical skills to new heights. Together, we built a platform that I believe will disrupt the industry. "

        },

    ];



  return (
    <Section title='Testimonials ☁️'
     subtitle='These are the Reviews of my client about me.
     I accepts them. working with them was an incredible experience. 
    Together, we transformed their website into a powerful tool that beautifully represents their brand.'>

        <div className='max-w-xl flex flex-col gap-8'>
            
                {TESTIMONIALS.map(({id,image,name,comment}) =>(
                    <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300'>
                            <div className='w-1/3'>
                            <img src={image}
                             alt="name" className='w-50 h-50 object-cover object-top gap-3 pt-2' />
                            </div>
                            <div className='w-2/3 flex flex-col items-center gap-3 p-2'>
                                <h3 className='text-xl font-semibold'>
                                    {name}
                                </h3>
                                <p className='text-sm font-extralight'>
                                    {comment}
                                </p>
                            </div>
                     </div>     
                ))}
        </div>
         </Section>
  )
};

export default Testimonials;
