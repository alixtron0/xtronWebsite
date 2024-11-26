import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const shipRef = useRef({ x: 0, y: 0, angle: 0 });
  const particlesRef = useRef([]);
  const isMobileRef = useRef(window.innerWidth <= 768);

  // Star creation with simplified properties for mobile
  const createStar = (width, height) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * (isMobileRef.current ? 2 : 3),
    speed: Math.random() * 0.3 + 0.1,
    color: `hsl(${Math.random() * 60 + 200}, 80%, 80%)`
  });

  // Simplified particle creation for mobile
  const createParticle = (x, y, angle) => ({
    x,
    y,
    angle,
    speed: Math.random() * 1.5 + 0.5,
    life: 1,
    size: Math.random() * 2 + 1
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let lastFrameTime = 0;
    const targetFPS = isMobileRef.current ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    // Set canvas size with conditional pixel density
    const handleResize = () => {
      isMobileRef.current = window.innerWidth <= 768;
      const pixelRatio = isMobileRef.current ? 1 : (window.devicePixelRatio || 1);
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(pixelRatio, pixelRatio);
      
      // Reduce stars on mobile
      const starCount = isMobileRef.current ? 100 : 300;
      starsRef.current = Array.from({ length: starCount }, () => 
        createStar(window.innerWidth, window.innerHeight)
      );
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    handleResize();

    const animate = (timestamp) => {
      // Throttle frame rate on mobile
      if (timestamp - lastFrameTime < frameInterval) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Simplified star rendering
      starsRef.current.forEach(star => {
        star.y += star.speed;
        
        if (star.y > window.innerHeight) {
          star.y = 0;
          star.x = Math.random() * window.innerWidth;
        }

        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update spaceship position with smooth movement
      const ship = shipRef.current;
      const targetX = mouseX;
      const targetY = mouseY;
      
      ship.x += (targetX - ship.x) * 0.08;
      ship.y += (targetY - ship.y) * 0.08;

      const dx = targetX - ship.x;
      const dy = targetY - ship.y;
      const targetAngle = Math.atan2(dy, dx);
      
      let angleDiff = targetAngle - ship.angle;
      if (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      if (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      ship.angle += angleDiff * 0.15;

      // Reduce particle generation on mobile
      if ((Math.abs(dx) > 1 || Math.abs(dy) > 1) && (!isMobileRef.current || Math.random() > 0.5)) {
        particlesRef.current.push(
          createParticle(
            ship.x - Math.cos(ship.angle) * 20,
            ship.y - Math.sin(ship.angle) * 20,
            ship.angle + Math.PI + (Math.random() - 0.5) * 0.5
          )
        );
      }

      // Simplified particle rendering
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life -= isMobileRef.current ? 0.04 : 0.02;
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;
        particle.size *= 0.95;

        if (particle.life > 0) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(99, 102, 241, ${particle.life})`;
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          return true;
        }
        return false;
      });

      // Simplified spaceship rendering
      ctx.save();
      ctx.translate(ship.x, ship.y);
      ctx.rotate(ship.angle);
      
      // Main body
      ctx.beginPath();
      ctx.fillStyle = '#4F46E5';
      ctx.moveTo(-20, -10);
      ctx.lineTo(20, 0);
      ctx.lineTo(-20, 10);
      ctx.lineTo(-15, 0);
      ctx.closePath();
      ctx.fill();

      // Basic details
      ctx.beginPath();
      ctx.fillStyle = '#818CF8';
      ctx.moveTo(-15, -5);
      ctx.lineTo(-10, -3);
      ctx.lineTo(-10, 3);
      ctx.lineTo(-15, 5);
      ctx.closePath();
      ctx.fill();

      ctx.restore();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: 'linear-gradient(to bottom, #0F172A, #1E3A8A)'
      }}
    />
  );
};

export default SpaceBackground;
