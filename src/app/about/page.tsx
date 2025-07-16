"use client";

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, ContactShadows, Environment } from '@react-three/drei';
import { Group } from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../components/Navbar";
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// Cargo Ship 3D Model Loader
const Model = React.forwardRef<THREE.Object3D, any>((props, ref) => {
  const { scene } = useGLTF('/cargo_ship_02.glb');

  useFrame(() => {
    // This useFrame is empty, as animations are controlled by the parent Scene.
  });

  return <primitive ref={ref} object={scene} scale={0.06} position={[0.4, 0, 0]} {...props} />;
});

Model.displayName = 'Model';


// Update Scene props to receive scrollProgress instead of scrollY and sectionHeight
function Scene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const group = useRef<Group>(null);
  const modelRef = useRef<THREE.Object3D>(null);
  const { size } = useThree(); // Keep useThree if you plan to use mobile/desktop responsiveness later

  useFrame(() => {
    if (modelRef.current) {
      // Use the directly calculated scrollProgress (0 to 1)
      const normalizedScroll = scrollProgress.current;

      // Apply scroll-based rotation to the model
      // Rotates 4 times (2 full circles) over the entire scroll length
      modelRef.current.rotation.y = normalizedScroll * Math.PI * 2;

      // Optional: Add a subtle up/down float
      modelRef.current.position.y = Math.sin(normalizedScroll * Math.PI * 2) * 0.04; // Float as it rotates
    }
  });

  return (
    <group ref={group}>
      <Suspense fallback={null}>
        <Model ref={modelRef} />
        <ContactShadows position={[0, -1.2, 0]} opacity={0.4} scale={4.5} blur={3} far={3} />
      </Suspense>
    </group>
  );
}

export default function AboutPage() {
  // We no longer need scrollY to be tied to window.scrollY for the model animation
  const scrollProgress = useRef(0); // This will hold the 0-1 normalized scroll progress
  const sectionHeight = 800;
  const numSections = 3;
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the main scrollable container

  useEffect(() => {
    // Set up the main ScrollTrigger for the 3D model's animation
    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current, // The element that defines the scrollable area
        start: "top top", // When the top of the container hits the top of the viewport
        end: "bottom bottom", // When the bottom of the container hits the bottom of the viewport
        scrub: 1, // Smoothly link scroll position to animation
        onUpdate: (self) => {
          scrollProgress.current = self.progress; // Update the ref with current scroll progress (0-1)
        },
      });
    }

    // Existing GSAP animations for text sections remain as is
    textRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotateY: 5,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              end: 'bottom 15%',
              scrub: 1.5,
              toggleActions: "play none none reverse"
            },
          }
        );

        ref.addEventListener('mouseenter', () => {
          gsap.to(ref, {
            scale: 1.03,
            y: -5,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        ref.addEventListener('mouseleave', () => {
          gsap.to(ref, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        });
      }
    });

    return () => {
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="relative w-full" style={{ minHeight: `${sectionHeight * numSections}px` }} ref={containerRef}>
        <div className="fixed top-0 left-0 w-full h-screen z-0">
          <Canvas camera={{ position: [0, 0, 2.8], fov: 14 }} style={{ background: 'linear-gradient(180deg, #f0f4f8 0%, #d6e8f5 50%, #b8d4ea 100%)' }} shadows>
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 3, 2]} intensity={1.4} castShadow />
            <pointLight position={[-2, 1, 1]} intensity={0.6} color="#87ceeb" />
            <Environment preset="dawn" background={false} />
            {/* Pass the new scrollProgress ref to Scene */}
            <Scene scrollProgress={scrollProgress} />
          </Canvas>
        </div>

        <div className="relative z-10 overflow-x-hidden"> {/* No ref here anymore, containerRef is on parent */}
          {/* Hero Section */}
          <section style={{ height: sectionHeight }} className="flex items-center">
            <div ref={el => { textRefs.current[0] = el; }}
                 className="w-full md:w-1/2 px-6 md:px-20 transform transition-all duration-500 hover:shadow-2xl rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-8 md:p-12">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-[#2c3e50] leading-tight">
                Navigate Global Trade with
                <span className="text-[#3498db] block">Sourcing Sharks</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-[#34495e] leading-relaxed font-medium">
                We're the compass for your international business journey. For over a decade, we've been charting new waters in global commerce, connecting ambitious companies with premium suppliers across continents.
              </p>
              <p className="text-base md:text-lg text-[#5d6d7e] leading-relaxed">
                Experience the difference of working with trade navigators who understand both the currents and the destination.
              </p>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section style={{ height: sectionHeight }} className="flex items-center justify-start">
            <div
              ref={el => { textRefs.current[1] = el; }}
              className="w-full md:w-1/2 px-6 md:px-20 transform transition-all duration-500 hover:shadow-2xl rounded-2xl bg-white/25 backdrop-blur-md border border-white/30 p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2c3e50]">
                Our North Star
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#3498db]">Mission</h3>
                  <p className="text-base md:text-lg text-[#34495e] leading-relaxed">
                    To transform global trade from complex to simple, making international commerce accessible and profitable for businesses ready to expand their horizons.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#3498db]">Vision</h3>
                  <p className="text-base md:text-lg text-[#34495e] leading-relaxed">
                    To be the global leader in intelligent trade solutions, where every business—from startups to enterprises—can confidently navigate international markets.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section style={{ height: sectionHeight }} className="flex items-center">
            <div
              ref={el => { textRefs.current[2] = el; }}
              className="w-full md:w-1/2 px-6 md:px-20 transform transition-all duration-500 hover:shadow-2xl rounded-2xl bg-white/25 backdrop-blur-md border border-white/30 p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2c3e50]">
                Meet the Crew
              </h2>
              <p className="text-lg md:text-xl mb-6 text-[#34495e] leading-relaxed font-medium">
                Behind every successful voyage is an experienced crew. Our team combines decades of trade expertise with cutting-edge technology and an unwavering commitment to your success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-[#5d6d7e]">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#3498db] rounded-full"></div>
                  <span>International Trade Specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#3498db] rounded-full"></div>
                  <span>Logistics & Supply Chain Experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#3498db] rounded-full"></div>
                  <span>Customs & Compliance Advisors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#3498db] rounded-full"></div>
                  <span>Quality Assurance Professionals</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}