"use client";
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = imageRef.current;
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [])

  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
      <div className='space-y-6 text-center'>
        <div className='space-y-6 mx-auto'>
          <h1 className='bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
            Accelerate Your Career with
            <br />
            AI-powered Coach
          </h1>
          <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
            Elevate your career with tailored guidance, expert interview preparation, and advanced AI-driven tools for professional achievement.
          </p>
        </div>
        <div className='flex justify-center space-x-4'>
          <Link href={'/dashboard'}>
            <Button className='px-8' size='lg'>Get Started</Button>
          </Link>
          <Link href={'https://github.com/kushagras22/WorkSense'} target='_blank'>
            <Button className='px-8' size='lg' variant={'outline'}>Watch Demo</Button>
          </Link>
        </div>

        <div className='hero-image-wrapper mt-5 md:mt-0'>
          <div ref={imageRef} className='hero-image'>
            <Image
              src={'/banner.avif'}
              width={1280} height={720} alt='WorkSense Banner'
              className='rounded-lg shadow-2xl border mx-auto'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection