'use client'
import React from 'react'
import Hyperspeed from './Hyperspeed'
import Link from 'next/link'
import SplitText from './SplitText'
import CurvedLoop from './CurvedLoop'
 import { Spotlight } from './ui/spotlight'
import ShinyText from './ShinyText'
import { ScrollVelocityContainer, ScrollVelocityRow } from './ui/scroll-based-velocity'
import { Marque } from './Marque'
const HeroSection = () => {
  return (
    <div className='w-full min-h-screen'>
      <div className='w-full h-screen bg-black relative'>
        <Spotlight/>
        <div className='text-white absolute w-full h-full p-5 flex flex-col items-center'>
    <div className=' bg-white/10 

 rounded-full flex items-center justify-center gap-5 p-3'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/login'>Login</Link>

    </div>


<div className='w-full flex gap-2 items-center justify-center mt-20 flex-col'>
<SplitText
  text="Turn Your Bio Link Into a Mini Website."
  className="text-3xl md:text-8xl text-white font-bold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
<p className='text-lg font-medium text-balance text-center'>Be ✦ Creative ✦ With ✦ Zentro  ✦</p>
<h1 className='text-3xl md:text-8xl font-medium text-balance text-center'>So Whats Zentro</h1>
<ShinyText

  text="Zentro is a modern link-in-bio platform that lets creators and businesses showcase all their links, socials,
  and content in one customizable page designed to boost engagement and visibility.!" 
  disabled={false} 
  speed={3} 
  className='custom-class text-balance text-center' 
/>
<Link href='/sign-in' className='px-6 py-3  bg-white/10 rounded-full' >Get Started </Link>


</div>
        </div>
 

      </div>
      <div className='w-full h-screen bg-black relative flex items-center justify-center flex-col'>

        <Marque/>
        <h1 className='text-white text-3xl md:text-8xl text-center mt-auto md:mt-0 md:pt-10 '>That,s Why its Called Zentro</h1>
        <div className='w-full flex pb-5 mt-auto'>

      <ScrollVelocityContainer className="text-4xl mt-auto text-white font-bold md:text-7xl">
  <ScrollVelocityRow baseVelocity={20} direction={1}>
Made By @404faheem
  </ScrollVelocityRow>
  <ScrollVelocityRow baseVelocity={20} direction={-1}>

  Made By @404faheem
  </ScrollVelocityRow>
</ScrollVelocityContainer>
        </div>
     

      </div>
      
    </div>
  )
}

export default HeroSection
{/*         
      <Hyperspeed
  effectOptions={{
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3,
    }
  }}
/> */}