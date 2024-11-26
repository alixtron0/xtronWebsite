import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SpaceBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const shipRef = useRef({ x: 0, y: 0, angle: 0 });
  const particlesRef = useRef([]);

  // Star creation with enhanced properties
  const createStar = (width, height) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 3,
    speed: Math.random() * 0.5 + 0.1,
    color: `hsl(${Math.random() * 60 + 200}, 80%, 80%)`,
    twinkleSpeed: Math.random() * 0.05 + 0.02,
    twinklePhase: Math.random() * Math.PI * 2
  });

  // Particle creation for ship trail
  const createParticle = (x, y, angle) => ({
    x,
    y,
    angle,
    speed: Math.random() * 2 + 1,
    life: 1,
    size: Math.random() * 3 + 1,
    color: 'hsla(' + (Math.random() * 40 + 200) + ', 80%, 70%, '
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Set canvas size with higher pixel density
    const handleResize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(pixelRatio, pixelRatio);
      
      // Initialize more stars for denser field
      starsRef.current = Array.from({ length: 300 }, () => 
        createStar(window.innerWidth, window.innerHeight)
      );
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars with twinkling effect
      starsRef.current.forEach(star => {
        star.y += star.speed;
        star.twinklePhase += star.twinkleSpeed;
        
        if (star.y > window.innerHeight) {
          star.y = 0;
          star.x = Math.random() * window.innerWidth;
        }

        const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5;
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * (1 + twinkle)
        );
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(star.x, star.y, star.size * (1 + twinkle), 0, Math.PI * 2);
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

      // Create particles for ship trail
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        particlesRef.current.push(
          createParticle(
            ship.x - Math.cos(ship.angle) * 20,
            ship.y - Math.sin(ship.angle) * 20,
            ship.angle + Math.PI + (Math.random() - 0.5) * 0.5
          )
        );
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life -= 0.02;
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;
        particle.size *= 0.95;

        if (particle.life > 0) {
          ctx.beginPath();
          ctx.fillStyle = particle.color + particle.life + ')';
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          return true;
        }
        return false;
      });

      // Draw enhanced spaceship
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

      // Add details
      ctx.beginPath();
      ctx.fillStyle = '#818CF8';
      ctx.moveTo(-15, -5);
      ctx.lineTo(-10, -3);
      ctx.lineTo(-10, 3);
      ctx.lineTo(-15, 5);
      ctx.closePath();
      ctx.fill();

      // Enhanced engine glow
      const engineGlow = ctx.createRadialGradient(-15, 0, 0, -15, 0, 25);
      engineGlow.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
      engineGlow.addColorStop(0.5, 'rgba(59, 130, 246, 0.3)');
      engineGlow.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = engineGlow;
      ctx.beginPath();
      ctx.arc(-15, 0, 25, 0, Math.PI * 2);
      ctx.fill();

      // Add energy field effect
      const energyField = ctx.createRadialGradient(0, 0, 0, 0, 0, 40);
      energyField.addColorStop(0, 'rgba(99, 102, 241, 0)');
      energyField.addColorStop(0.5, 'rgba(99, 102, 241, 0.1)');
      energyField.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = energyField;
      ctx.beginPath();
      ctx.arc(0, 0, 40, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: 'linear-gradient(to bottom, #0F172A, #1E3A8A)',
        filter: 'blur(0px)'
      }}
    />
  );
};

export default SpaceBackground;
