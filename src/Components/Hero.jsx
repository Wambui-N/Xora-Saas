"use client";

import React from "react";
import { Element } from "react-scroll";
import { Link as LinkScroll } from "react-scroll";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>
            <p className="max-w-440 mb-14 b0dy-1 max-md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32 left-[calc(50%-270px)] pointer-events-none hero-img_res">
            <Image
              className="size-1230 max-lg:h-auto"
              src="/images/hero.png"
              alt="hero"
              width={2000}
              height={2000}
              quality={100}
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
