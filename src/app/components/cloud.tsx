"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface CloudData {
  id: number
  src: string
  size: number
  initialX: number
  initialY: number
  speed: number
  direction: number // 1 for right, -1 for left
  depth: number
}

export default function FloatingClouds() {
  const [scrollY, setScrollY] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)

  const clouds: CloudData[] = [
    // { id: 1, src: "/clouds/cloud1.webp", size: 600, initialX: 20, initialY: 10, speed: 0.8, direction: 1, depth: 0.4 },
    { id: 2, src: "/clouds/cloud2.png", size: 450, initialX: 70, initialY: 25, speed: 0.6, direction: -1, depth: 0.6 },
    { id: 3, src: "/clouds/cloud3.png", size: 700, initialX: 50, initialY: 40, speed: 0.7, direction: 1, depth: 0.3 },
    { id: 4, src: "/clouds/cloud4.png", size: 580, initialX: 30, initialY: 15, speed: 0.5, direction: 1, depth: 0.5 },
    { id: 5, src: "/clouds/cloud5.png", size: 560, initialX: 10, initialY: 35, speed: 0.4, direction: -1, depth: 0.7 },
    // { id: 6, src: "/clouds/cloud6.webp", size: 620, initialX: 80, initialY: 50, speed: 0.3, direction: -1, depth: 0.8 },
    { id: 7, src: "/clouds/cloud7.png", size: 940, initialX: 60, initialY: 70, speed: 0.2, direction: 1, depth: 0.9 },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }

    handleResize()

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {clouds.map((cloud) => {
        if (viewportWidth === 0) return null

        const parallaxX = scrollY * cloud.speed * cloud.direction * cloud.depth
        const parallaxY = scrollY * cloud.depth * 0.15
        const scaleMultiplier = 1 + (scrollY * cloud.depth * 0.0005)
        const finalSize = cloud.size * scaleMultiplier
        const centerX = (viewportWidth * cloud.initialX / 100) - (finalSize / 2)
        const centerY = (window.innerHeight * cloud.initialY / 100) - (finalSize * 0.6 / 2)

        return (
          <div
            key={cloud.id}
            className="absolute will-change-transform transition-all duration-300 ease-out"
            style={{
              left: `${centerX}px`,
              top: `${centerY}px`,
              width: `${finalSize}px`,
              height: `${finalSize * 0.6}px`,
              transform: `translate(${parallaxX}px, ${parallaxY}px) scale(${scaleMultiplier})`,
              opacity: Math.max(0.2, 0.1 - (scrollY * 0.0002)),
              zIndex: Math.floor(cloud.depth * 10),
            }}
          >
            <Image
              src={cloud.src || "/placeholder.svg"}
              alt={`Cloud ${cloud.id}`}
              fill
              className="object-contain"
              style={{
                filter: `brightness(${1 + cloud.depth * 0.3}) contrast(${1 - cloud.depth * 0.15}) blur(${(1 - cloud.depth) * 0.3}px)`,
              }}
              priority={cloud.id <= 3}
            />
          </div>
        )
      })}
    </div>
  )
}