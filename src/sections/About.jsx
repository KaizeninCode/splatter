import React from 'react'

const About = () => {
  return (
    <section id='about' className='bg-[#b10000] min-h-screen'>
      <div className='w-5/6 m-auto h-[297px] flex justify-evenly'>
        <p className='font-annie w-2/5 text-white text-2xl my-auto'>Dive into a world of captivating art projects that ignite imagination and inspire innovation. <br/>Whether you’re an experienced artist or just starting your creative journey, we offer a range of projects to spark your passion and elevate your skills.</p>
        <img src='../public/red-white-abstraction.jpg' alt="Image" className='h-5/6 my-auto'/>
      </div>
        <div className='w-5/6 h-[297px] m-auto flex flex-1 justify-evenly items-center'>
          <img src="../public/distressed.jpg" alt="image" className='h-5/6 my-auto'/>
          <p className='font-annie w-2/5 text-white text-2xl my-auto'>Explore our diverse collection of art projects, carefully curated to cater to various   interests and skill levels. From painting and drawing to sculpture and mixed media, there’s something here for everyone to explore and enjoy.</p>
        </div>
    </section>
  )
}

export default About
