"use client";

import Head from "next/head";
import * as React from "react";
import "@/lib/env";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ArrowLink from "@/components/links/ArrowLink";
import ButtonLink from "@/components/links/ButtonLink";
import UnderlineLink from "@/components/links/UnderlineLink";
import UnstyledLink from "@/components/links/UnstyledLink";
import Button from "@/components/buttons/Button";
import ScrollIndicator from "@/app/components/ScrollIndicator";

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
  const { ref, inView } = useInView({
    threshold: 0.6, // show until 60% of section scrolled past
    triggerOnce: false,
  });

  return (
    <main>
      <Head>
        <title>Meltwater Archive</title>
      </Head>
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full h-[100vh] flex flex-col justify-center"
        ref={ref}
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
            <div className="flex flex-1 flex-col justify-center items-center">
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
              <span className="mb-12">
                <ArrowLink
                  // as={ButtonLink}
                  className="mr-4 rounded-none border-color-white"
                  href="#stories"
                  variant="light"
                >
                  Read
                </ArrowLink>
                <ArrowLink
                  // as={ButtonLink}
                  className="rounded-none border-color-white"
                  href="#newsletter"
                  variant="light"
                >
                  Subscribe
                </ArrowLink>
              </span>
            </div>
            <motion.div
              className="mb-2"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
            >
              <ScrollIndicator show={inView} displayText={false} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* <section
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
      </section> */}

      <section
        id="stories"
        className="w-full min-h-[70vh] px-8 py-20 flex flex-col justify-center items-center"
      >
        <FadeInOnScroll>
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl mb-4">Featured Stories</h2>
          </div>
          {/* Stories Grid */}
          <div
            id="stories"
            className="max-w-5xl grid gap-8 md:grid-cols-2 py-8"
          >
            <StoryCard
              title="The Keeling Curve"
              slug="/stories/keeling-curve"
              description="Earth’s seasonal breath, recorded since 1958"
              isPublished={false}
            />
            <StoryCard
              title="At the Surface"
              slug="/stories/surface-temp"
              description="Over 150 years of surface temperature changes"
              isPublished={false}
            />
            {/* <StoryCard
            title="Disappearing Ice 📈"
            slug="/stories/disappearing-ice"
            description="Shrinking ice sheets and rising sea levels."
          /> */}
          </div>
        </FadeInOnScroll>
      </section>

      {/* Quote Section */}
      <section
        id="quote"
        className="w-full min-h-[70vh] px-8 py-20 flex flex-col justify-center items-center bg-primary-900 text-white"
      >
        <FadeInOnScroll>
          <blockquote className="border-l-8 border-primary-200 p-4 max-w-3xl">
            <p className="font-light pb-4">
              Human activities, principally through emissions of greenhouse
              gases, have unequivocally caused global warming, with global
              surface temperature reaching 1.1°C above 1850–1900 in 2011–2020.
              Global greenhouse gas emissions have continued to increase, with
              unequal historical and ongoing contributions arising from
              unsustainable energy use, land use and land-use change, lifestyles
              and patterns of consumption and production across regions, between
              and within countries, and among individuals.
            </p>
            <p className="font-bold">
              Rapid and far-reaching transitions across all sectors and systems
              are necessary to achieve deep and sustained emissions reductions
              and secure a liveable and sustainable future for all.
            </p>
            <footer className="mt-4 text-sm">
              — IPCC Sixth Assessment Report
            </footer>
          </blockquote>
        </FadeInOnScroll>
      </section>

      <section
        id="about"
        className="w-full min-h-[70vh] px-8 py-20 flex flex-col justify-center items-center bg-primary-700 text-white"
      >
        <FadeInOnScroll>
          <div className="max-w-3xl">
            <h2 className="text-4xl mb-4">About the Project</h2>
            <p className="mb-4 font-light">
              <b className="font-bold">
                Meltwater Archive is a public project that turns climate and
                environmental data into visual and interactive stories.
              </b>{" "}
              Each narrative is backed by reliable and well-studied datasets
              that have shaped our understanding of the climate crisis. The goal
              is to expand access to vital information and make it easier for
              everyone to learn about the changes happening to our planet.
              Whether you are a teacher, student, policymaker, or just curious,
              we aim to provide you impactful educational tools rooted in data.
            </p>
          </div>
        </FadeInOnScroll>
      </section>

      <section
        id="newsletter"
        className="w-full min-h-[70vh] px-8 py-20 flex flex-col justify-center items-center bg-primary-900 text-white"
      >
        <FadeInOnScroll>
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl mb-4">Stay Connected</h2>
            <p className="mb-6 font-light">
              Subscribe to our newsletter for updates. No spam :)
            </p>
          </div>
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/yourusername"
            method="post"
            target="popupwindow"
            onSubmit={() =>
              window.open(
                "https://buttondown.email/yourusername",
                "popupwindow",
              )
            }
            className="h-[3rem] flex flex-col sm:flex-row gap-2 justify-center sm:items-center"
          >
            <input
              type="email"
              name="email"
              id="bd-email"
              required
              placeholder="Your email"
              className="h-[inherit] px-4 py-2 rounded w-full sm:w-auto text-black border-none focus:ring-primary-500 focus:ring-2"
            />
            <Button
              type="submit"
              variant="primary"
              className="justify-center h-full"
            >
              Subscribe
            </Button>
          </form>
        </FadeInOnScroll>
      </section>

      <section className="bg-white h-[15vh]">
        <div className="layout relative flex flex-1 flex-col items-center justify-center py-12 text-center h-full">
          <footer className="absolute text-gray-700 flex-1">
            <p>Built with open data and open tools.</p>©{" "}
            {new Date().getFullYear()} By{" "}
            <UnderlineLink href="https://joypaulsen.com/">
              Joy Paulsen
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
