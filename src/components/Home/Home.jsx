import React from 'react'
import { HeroSection } from './HeroSection'
import iPhoneHero from '../../assets/iphone-14-pro.webp'
import mac from '../../assets/mac-system-cut.jfif'

export const Home = () => {
  return (
    <div>
      <HeroSection title="Buy iphonre 14 pro" subtitle="E$xperince the power of the latest iphone 14 with our most Pro cemera ever" link="/"image={iPhoneHero}/>
      <HeroSection title="Build the ultimate setup" subtitle="You can add Studio Dispaly and colour-matched Magic acessories to your bag after configure your Mac mini" link="/"image={mac}/>
        
        
    </div>
  )
}
