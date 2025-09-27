"use client";

import type * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/app/lib/utils";
import { useState,useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TextShimmer from "@/app/components/typography/text-shrim";

interface SocialCardProps {
  className?: string;
  image: string;
  title?: string;
  name?: string;
  position?: string;
  pitch?: string;
  icon?: React.ReactNode;
  buttons?: Array<{
    label: string;
    icon?: React.ReactNode;
    link?: string;
  }>;
}

const SocialCard = ({
  className,
  image,
  title,
  name,
  position,
  pitch,
  icon,
  buttons,
}: SocialCardProps) => {
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {

    if (isHovered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isHovered]);
  
  return (
    <>
       <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
      />
    <motion.div
      className={cn(
        `group relative h-[330px] overflow-hidden rounded-lg p-0 w-[330px] z-50 `,
        "border-2 border-gray-50/5 bg-black/10 backdrop-blur-sm hover:cursor-pointer",
        "shadow-sm transition-shadow duration-300 hover:shadow-lg",
        className,
      )}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
     
      <div className="relative mb-2 p-6 pb-4">
        
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-neutral-600">
                {icon}
              </div>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-neutral-200/20 to-transparent "></div>
            </div>
           
          </div>
        </div>

        {isHovered && (
          <>
            <motion.img
              src={image}
              alt={title}
              className="absolute right-6 top-6 h-[90px] w-[90px] rounded-lg shadow-lg ring-2 ring-white "
              width={500}
              height={500}
              layoutId="card-image"
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute right-6 top-6 h-[90px] w-[90px] rounded-lg border-2 border-dashed border-neutral-400/80 bg-transparent "
              initial={{ opacity: 0, scale: 1.6, filter: "blur(4px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{ delay: 0.35, duration: 0.15, ease: "easeInOut" }}
            />
          </>
        )}
      </div>

      <div className="mb-4 flex flex-col items-center px-6">
        <motion.img
          src={image}
          alt={title}
          className="h-[160px] w-[160px] rounded-lg border-4 border-white shadow-xl ring-1 ring-neutral-200/50 "
          width={500}
          height={500}
          layoutId="card-image"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        {isHovered && (
          <motion.div 
          className="text-start"
          animate={{
            y: isHovered ? -180 : 20,
            x: isHovered ? -55 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h4 className="text-lg font-semibold text-white">
            <TextShimmer>{name || ""}</TextShimmer>
          </h4>
          <p className="text-sm text-neutral-400 md:mt-0.5">
            {position}
          </p>
        </motion.div>
        )}
      </div>

      <motion.div
        className={`absolute bottom-0 left-0 right-0 ${isHovered ? 'rounded-lg' : 'rounded-0'} overflow-hidden bg-transparent px-6 pb-5 pt-3 backdrop-blur-sm `}
        initial={{ y: "100%" }}
        animate={{
          y: isHovered ? 0 : "calc(100% - 43px)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="text-neutral-900 ">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold text-white ">
            <span>Contact me</span>
            <span>
            <ArrowUpRight className="ml-2 h-4 w-4 opacity-100 group-hover:opacity-100 transition-opacity" />
            </span>
          </div>
          <p className="mb-4 text-xs font-normal leading-relaxed text-neutral-400 ">
            {pitch}
          </p>

          <div className="flex flex-wrap gap-2">
            {buttons?.map((button, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 20,
                }}
                transition={{
                  duration: 0.3,
                  delay: isHovered ? index * 0.2 : 0,
                  ease: "easeInOut"
                }}
              >
                <Link
                  target="_blank"
                  href={button.link ?? ""}
                  className="flex w-fit items-center gap-3 rounded-lg border-2 border-neutral-200/5 bg-white/10 px-4 py-2 text-sm font-medium text-neutral-700 transition-all duration-200  hover:bg-neutral-100/20 hover:text-neutral-900 "
                >
                  <span className="flex h-5 w-5 items-center justify-center text-white ">
                    {button.icon}
                  </span>
                  <span className="text-sm font-medium text-white ">
                    {button.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default SocialCard;
