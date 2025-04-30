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
// import Button from "@/components/buttons/Button";
// import Nav from '@/app/components/Nav';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from "~/svg/Logo.svg";

import StoryCard from "@/app/components/StoryCard";

export default function HomePage() {
  return (
    <main>
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
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          >
            {/* <h1 className="text-4xl md:text-6xl mb-4 font-thin font-garamond"> */}
            <h1 className="text-5xl md:text-6xl mb-4 font-thin font-garamond border-b border-primary-200">
              Meltwater Archives
            </h1>
            <p className="text-md mb-4 font-italics">
              Data-driven stories from a changing planet.
            </p>
            {/* <p className="text-lg md:text-2xl max-w-2xl">
            A visual journey through the forces shaping our changing planet.
          </p> */}
            <ButtonLink className="mb-12" variant="light" href="#stories">
              Explore
            </ButtonLink>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="w-full min-h-[50vh] px-8 py-12 flex flex-col-reverse lg:flex-row items-center justify-center bg-primary-900 text-white"
      >
        <figure>
          <Image
            src="/images/earth_20250425.gif"
            alt="Earth Satellite Imagery Animation"
            width={500}
            height={500}
          />
          <figcaption className="text-sm text-center mt-1 font-thin">
            Source:{" "}
            <a href="https://epic.gsfc.nasa.gov/" target="_blank">
              NASA EPIC Team
            </a>
          </figcaption>
        </figure>
        <div className="lg:pl-6">
          <h2 className="text-3xl mb-4">
            Data-Driven Stories from a Changing Planet
          </h2>
          <p className="mb-6">
            See the hidden patterns of Earth's climate — one story at a time.
          </p>
        </div>
      </section>

      <section
        id="stories"
        className="w-full min-h-[50vh] flex flex-col justify-center"
      >
        {/* Stories Grid */}
        <div
          id="stories"
          className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 px-8 py-12"
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

      {/* Copy Section */}
      <section
        id="copy"
        className="w-full min-h-[50vh] px-8 py-12 flex flex-col justify-center bg-primary-900 text-white"
      >
        <h2 className="text-3xl mb-4 text-center">
          Data-Driven Stories from a Changing Planet
        </h2>
        <p className="text-center mb-4">
          See the hidden patterns of Earth's climate — one story at a time.
        </p>
      </section>

      <Head>
        <title>Hi</title>
      </Head>
      <section className="bg-white">
        <div className="layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
          <Logo className="w-16" />
          <h1 className="mt-4">Next.js + Tailwind CSS + TypeScript Starter</h1>
          <p className="mt-2 text-sm text-gray-800">
            A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
            Import, Seo, Link component, pre-configured with Husky{" "}
          </p>
          <p className="mt-2 text-sm text-gray-700">
            <ArrowLink href="https://github.com/theodorusclarence/ts-nextjs-tailwind-starter">
              See the repository
            </ArrowLink>
          </p>

          <ButtonLink className="mt-6" href="/components" variant="light">
            See all components
          </ButtonLink>

          <UnstyledLink
            href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter"
            className="mt-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="92"
              height="32"
              src="https://vercel.com/button"
              alt="Deploy with Vercel"
            />
          </UnstyledLink>

          <footer className="absolute bottom-2 text-gray-700">
            © {new Date().getFullYear()} By{" "}
            <UnderlineLink href="https://theodorusclarence.com?ref=tsnextstarter">
              Theodorus Clarence
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
