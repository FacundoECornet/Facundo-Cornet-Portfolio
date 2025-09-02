import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function BackgroundStars() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bgstart = bgRef.current;
    if (!bgstart) return;

    const step = 20;
    const numberX = Math.floor(window.innerWidth / step);
    const colors = ['#cb8431', '#5197b2', '#00544f', '#ae86ad', '#E4D5F2', '#EDE9F2'];
    const numberStars = 100;

    for (let i = 0; i < numberStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      bgstart.appendChild(star);
      animateStar(star);
    }

    function animateStar(star: HTMLDivElement) {
      const starX = Math.floor(Math.random() * numberX) * step;
      const starColor = colors[Math.floor(Math.random() * colors.length)];
      star.style.background = `linear-gradient(to top, ${starColor}, transparent)`;
      star.style.left = `${starX}px`;

      const scale = 0.8 + Math.random() * 2;
      const duration = 4 + Math.random() * 5;
      const delay = Math.random() * 2;

      gsap.fromTo(
        star,
        { y: -100 },
        {
          y: (bgstart?.offsetHeight ?? window.innerHeight) + 100,
          duration,
          scale,
          delay,
          ease: 'power1.inOut',
          onComplete: () => animateStar(star),
        },
      );
    }
  }, []);

  return <div ref={bgRef} className="background-start fixed inset-0 pointer-events-none z-0" />;
}
