"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function TopSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate parallax values for different layers
  const parallaxSky = scrollY * 0.1 // Slowest - background sky
  const parallaxMoon = scrollY * 0.15 // Very slow - moon
  const parallaxDesertBg = scrollY * 0.25 // Slow - background desert
  const parallaxRock = scrollY * 0.4 // Medium - rocks
  const parallaxWater = scrollY * 0.5 // Medium-fast - water
  const parallaxMan = scrollY * 0.6 // Fast - man in boat
  const parallaxGrass = scrollY * 0.8 // Fastest - foreground grass
  const parallaxContent = scrollY * 0.3 // Content parallax

  // Enhanced fade effects
  const fadeOut = Math.max(0, 1 - scrollY / 1000)
  const fadeOutFast = Math.max(0, 1 - scrollY / 600)
  const fadeOutContent = Math.max(0, 1 - scrollY / 800)

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Sky Layer - Slowest parallax */}
      {/* <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${parallaxSky}px)`,
          opacity: fadeOut,
        }}
      >
        <Image src="/images/desert-sky.png" alt="Desert Sky" fill className="object-cover object-center" priority />
      </div> */}

      {/* Moon Layer */}
      {/* <div
        className="absolute top-10 left-1/2 transform -translate-x-1/2 w-32 h-32"
        style={{
          transform: `translateX(-50%) translateY(${parallaxMoon}px)`,
          opacity: fadeOut * 0.9,
        }}
      >
        <Image src="/images/desert-moon.png" alt="Moon" width={128} height={128} className="object-contain" />
      </div> */}

      {/* Background Desert Layer */}
      {/* <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${parallaxDesertBg}px)`,
          opacity: fadeOut,
        }}
      >
        <Image src="/images/desert-NoSky.png" alt="Desert Background" fill className="object-cover object-bottom" />
      </div> */}

      {/* Rock Layer */}
      {/* <div
        className="absolute w-full h-full"
        style={{
          transform: `translateY(${parallaxRock}px)`,
          opacity: fadeOutFast,
        }}
      >
        <Image src="/images/desert-rock.png" alt="Desert Rock" width={1920} height={1080} className="object-cover" />
      </div> */}

      {/* Water Layer */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/3"
        style={{
          transform: `translateY(${parallaxWater}px)`,
          opacity: fadeOutFast,
        }}
      >
        <Image src="/images/water.png" alt="Water" fill className="object-cover object-bottom" />
      </div>

      {/* Waterfall Layer */}
      {/* <div
        className="absolute bottom-0 right-1/4 w-1/3 h-2/3"
        style={{
          transform: `translateY(${parallaxRock * 0.8}px)`,
          opacity: fadeOutFast,
        }}
      >
        <Image src="/images/waterfall.png" alt="Waterfall" fill className="object-contain object-bottom" />
      </div> */}

      {/* Man in Boat Layer */}
      {/* <div
        className="absolute bottom-20 left-1/4 w-48 h-32"
        style={{
          transform: `translateY(${parallaxMan}px) translateX(${Math.sin(scrollY * 0.01) * 10}px)`,
          opacity: fadeOutFast,
        }}
      >
        <Image src="/images/man.png" alt="Man in Boat" fill className="object-contain object-bottom" />
      </div> */}

      {/* Foreground Grass Layer - Fastest parallax */}
      <div
        className="absolute bottom-0 left-0 w-full h-full"
        style={{
          transform: `translateY(${parallaxGrass}px)`,
          opacity: fadeOutFast,
        }}
      >
        <Image src="/images/grass.png" alt="Grass" fill className="object-cover object-bottom" />
      </div>

      {/* Main Content with parallax */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-10"
        style={{
          transform: `translateY(${parallaxContent}px)`,
          opacity: fadeOutContent,
        }}
      >
        <h1
          className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider"
          style={{
            textShadow: "3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)",
            fontFamily: "serif",
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          PORTFOLIO
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl px-4"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, dicta.
        </p>

        {/* Enhanced scroll indicator */}
        {/* <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{
            opacity: fadeOutContent,
            transform: `translateX(-50%) translateY(${Math.sin(Date.now() * 0.003) * 5}px)`,
          }}
        >
          <div className="flex flex-col items-center animate-bounce">
            <ChevronDown className="w-8 h-8 text-white mb-2" />
            <ChevronDown className="w-6 h-6 text-white/70 -mt-4" />
            <p className="text-white text-sm mt-2 font-medium">Scroll to explore</p>
          </div>
        </div> */}
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * (0.05 + Math.random() * 0.2)}px)`,
              opacity: fadeOut * (0.2 + Math.random() * 0.3),
              animation: `twinkle ${3 + Math.random() * 4}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Enhanced transition overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-20"
        style={{
          background: `linear-gradient(to top, 
            rgb(15, 23, 42) 0%, 
            rgba(15, 23, 42, 0.9) 30%, 
            rgba(15, 23, 42, 0.5) 60%, 
            transparent 100%)`,
          opacity: Math.min(1, scrollY / 300),
        }}
      ></div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}
