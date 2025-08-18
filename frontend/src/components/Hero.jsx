import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugin
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const animatedTextRef = useRef(null);
  const subtitleRef = useRef(null);
  const heroRef = useRef(null);

  const texts = [
    "Adarsh Raghuvanshi",
    "Full Stack Developer", 
    "Video Editor"
  ];

  const subtitles = [
    "Passionate about creating digital experiences",
    "Building responsive & interactive web applications", 
    "Crafting compelling visual stories"
  ];

  useEffect(() => {
    const animatedText = animatedTextRef.current;
    const subtitle = subtitleRef.current;

    // Initial animation on load
    gsap.fromTo(animatedText, 
      { opacity: 0, y: 100, rotationX: -90 },
      { opacity: 1, y: 0, rotationX: 0, duration: 1, ease: "back.out(1.7)" }
    );

    gsap.fromTo(subtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power2.out" }
    );

    // Create the cycling animation
    const tl = gsap.timeline({ repeat: -1, delay: 3 });

    texts.forEach((text, index) => {
      if (index === 0) return; // Skip first iteration since it's already displayed

      tl.to(animatedText, {
        duration: 0.3,
        rotationX: 90,
        y: -20,
        opacity: 0,
        ease: "power2.in",
        transformOrigin: "center center"
      })
      .call(() => {
        // Change text and subtitle during the middle of rotation
        animatedText.textContent = text;
        subtitle.textContent = subtitles[index];
        
        // Add different colors for different texts
        if (index === 1) {
          gsap.set(animatedText);
        } else if (index === 2) {
          gsap.set(animatedText);
        }
      })
      .to(animatedText, {
        duration: 0.4,
        rotationX: 0,
        y: 0,
        opacity: 1,
        ease: "back.out(1.7)",
        transformOrigin: "center center"
      })
      .to({}, { duration: 3 }); // Pause for 3 seconds
    });

    // Return to first text
    tl.to(animatedText, {
      duration: 0.3,
      rotationX: 90,
      y: -20,
      opacity: 0,
      ease: "power2.in"
    })
    .call(() => {
      animatedText.textContent = texts[0];
      subtitle.textContent = subtitles[0];
      // Reset to original color
      gsap.set(animatedText, { background: "none", color: "#000000" });
    })
    .to(animatedText, {
      duration: 0.4,
      rotationX: 0,
      y: 0,
      opacity: 1,
      ease: "back.out(1.7)"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-white to-gray-50 relative overflow-hidden">
      
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:flex sm:flex-col sm:items-center sm:justify-around relative z-10" ref={heroRef}>
        
          <div className=''>

            <p className='text-xl md:text-3xl'>Hii, I am</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 inline-block"
                  ref={animatedTextRef}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  Adarsh Raghuvanshi
                
            </h1>

            
            <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Passionate about creating digital experiences
            </p>
          </div>   
          
      </div>
    </section>
  );
};

export default Hero;
