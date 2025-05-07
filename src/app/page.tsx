"use client";

import Head from "next/head";
import * as React from "react";
import "@/lib/env";
import Image from "next/image";
import { motion } from "framer-motion";

import ArrowLink from "@/components/links/ArrowLink";
import ButtonLink from "@/components/links/ButtonLink";
import UnderlineLink from "@/components/links/UnderlineLink";
import UnstyledLink from "@/components/links/UnstyledLink";

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Logo from "~/svg/Logo.svg";
import StoryCard from "@/app/components/StoryCard";
import FadeInOnScroll from "@/app/components/FadeInOnScroll";

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Meltwater Archive</title>
      </Head>
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full h-[100vh] flex flex-col justify-center"
      >
        <div className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src="/images/hero-alt4.jpg"
            alt="Hero Image"
            fill
            // objectFit="cover"
            priority
            className="object-cover animate-slow-zoom"
          />
          <motion.div
            className="absolute inset-0 bg-black flex flex-col justify-center items-center text-white text-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          />
          <motion.div
            className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white p-4"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          >
            {/* <h1 className="text-4xl md:text-6xl mb-4 font-thin font-garamond"> */}
            <h1 className="text-4xl md:text-6xl mb-2 font-bold font-garamond italic">
              Meltwater Archive
            </h1>
            <p className="mb-4 font-light">
              Data-driven stories from a changing planet.
            </p>
            {/* <p className="text-lg md:text-2xl max-w-2xl">
            A visual journey through the forces shaping our changing planet.
          </p> */}
            {/* <ButtonLink className="mb-12" variant="light" href="#stories">
              Explore ↓
            </ButtonLink> */}
            <ArrowLink
              as={ButtonLink}
              className="inline-flex items-center mb-12"
              href="#stories"
              variant="light"
            >
              Read Now
            </ArrowLink>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="w-full min-h-[50vh] px-8 py-20 flex flex-col-reverse lg:flex-row items-center justify-center bg-primary-900 text-white"
      >
        <figure>
          <Image
            src="/images/earth_20250425.gif"
            alt="Earth Satellite Imagery Animation"
            width={500}
            height={500}
          />
          <figcaption className="text-xs md:text-sm text-center mt-2 font-thin">
            Source images from{" "}
            <a href="https://epic.gsfc.nasa.gov/" target="_blank">
              NASA EPIC Team
            </a>
          </figcaption>
        </figure>
        <FadeInOnScroll>
          <div className="lg:pl-6 max-w-2xl">
            <h2 className="text-4xl mb-4">Signals and Vital Signs</h2>

            <p className="mb-6 font-light">
              See the hidden patterns of Earth's climate — one story at a time.
              The Earth is always speaking. In the rise and fall of carbon. In
              the breath of forests. In the slow retreat of ice. These are
              stories told by numbers, but felt through time. They are not
              speculative. They are what's already happened — and what continues
              to unfold.
            </p>

            <ArrowLink
              as={ButtonLink}
              className="inline-flex items-center mb-6"
              href="#stories"
              variant="light"
            >
              Learn the Basics
            </ArrowLink>
          </div>
        </FadeInOnScroll>
      </section>

      <section
        id="stories"
        className="w-full min-h-[50vh] px-8 py-20 flex flex-col justify-center"
      >
        {/* Stories Grid */}
        <div
          id="stories"
          className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 py-8"
        >
          <StoryCard
            title="The Keeling Curve 📈"
            slug="/stories/keeling-curve"
            description="A 60-year record of rising CO₂ and Earth’s seasonal breath."
          />
          <StoryCard
            title="Surface Temperature 📈"
            slug="/stories/surface-temp"
            description="The record of global surface temperature anomalies."
          />
          <StoryCard
            title="Disappearing Ice 📈"
            slug="/stories/disappearing-ice"
            description="Shrinking ice sheets and rising sea levels."
          />
        </div>
      </section>

      {/* Quote Section */}
      <section
        id="quote"
        className="w-full min-h-[50vh] px-8 py-20 flex flex-col justify-center items-center bg-primary-900 text-white"
      >
        <FadeInOnScroll>
          <blockquote className="border-l-8 border-primary-200 p-4 max-w-3xl">
            <p className="font-light">
              Human activities, principally through emissions of greenhouse
              gases, have unequivocally caused global warming, with global
              surface temperature reaching 1.1°C above 1850–1900 in 2011–2020.
              Global greenhouse gas emissions have continued to increase, with
              unequal historical and ongoing contributions arising from
              unsustainable energy use, land use and land-use change, lifestyles
              and patterns of consumption and production across regions, between
              and within countries, and among individuals.
            </p>
            <footer className="mt-4 text-sm font-thin">
              — IPCC Sixth Assessment Report
            </footer>
          </blockquote>
        </FadeInOnScroll>
      </section>

      <section
        id="about"
        className="w-full min-h-[50vh] px-8 py-20 flex flex-col justify-center items-center bg-primary-700 text-white"
      >
        <FadeInOnScroll>
          <div className="max-w-3xl">
            <h2 className="text-4xl mb-4">About the Project</h2>
            <p className="mb-6 font-light">
              See the hidden patterns of Earth's climate — one story at a time.
              The Earth is always speaking. In the rise and fall of carbon. In
              the breath of forests. In the slow retreat of ice. These are
              stories told by numbers, but felt through time. They are not
              speculative. They are what's already happened — and what continues
              to unfold.
            </p>
          </div>
        </FadeInOnScroll>
      </section>

      <section className="bg-white">
        <div className="layout relative flex flex-col items-center justify-center py-12 text-center">
          <footer className="absolute bottom-2 text-gray-700">
            © {new Date().getFullYear()} By{" "}
            <UnderlineLink href="https://theodorusclarence.com?ref=tsnextstarter">
              Joy Paulsen
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
