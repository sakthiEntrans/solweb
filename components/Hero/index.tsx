"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const backgroundAnimation = {
    initial: { backgroundSize: "0% 100%" },
    animate: {
      backgroundSize: ["0% 100%", "100% 100%"],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Soltrisk – Elevating Compliance, Minimizing Risk
              </h4> */}
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Elevating Compliance,
                <motion.span
                  className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark"
                  initial="initial"
                  animate="animate"
                  variants={backgroundAnimation}
                >
                  Minimizing Risk
                </motion.span>
              </h1>
              <p className="font-bold">
                Soltrisk enhances compliance operations by automating workflows and seamlessly integrating them, thereby simplifying the complexities of compliance management into a unified platform.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                  <Link href="/calendy"><button
                    
                      aria-label="get started button"
                      className="flex items-center rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      
                      Get Started
                      <FaArrowRight className="ml-2 animate-pulse" />
                    </button></Link>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Elevate compliance with our SaaS platform.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="animate_right hidden md:w-1/2 lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative 2xl:-mr-7.5">
                <motion.div
                  className="absolute -left-11.5 top-0"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                >
                  <Image
                    src="/images/shape/shape-01.png"
                    alt="shape"
                    width={46}
                    height={246}
                  />
                </motion.div>
                <motion.div
                  className="absolute bottom-0 right-0 z-10"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Image
                    src="/images/shape/shape-02.svg"
                    alt="shape"
                    width={36.9}
                    height={36.7}
                  />
                </motion.div>
                <motion.div
                  className="absolute -right-6.5 bottom-0 z-1"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1.2 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  <Image
                    src="/images/shape/shape-03.svg"
                    alt="shape"
                    width={21.64}
                    height={21.66}
                  />
                </motion.div>
                <div className="relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
