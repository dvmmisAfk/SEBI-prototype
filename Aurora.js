const { useEffect, useRef } = React;

const Aurora = ({
  particleCount = 100, 
  particleSpread = 10, 
  speed = 0.1, 
  mouseInfluence = 50,
  colorStops = ['#5227FF', '#7cff67', '#ff6b6b'],
  amplitude = 1.0,
  blend = 0.5 
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particleColors = colorStops.map(color => {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16) / 255;
      const g = parseInt(hex.substr(2, 2), 16) / 255;
      const b = parseInt(hex.substr(4, 2), 16) / 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
      return `hsl(${h * 360}, ${s * 100}%, ${l * 100}%)`;
    });

    const particles = [];
    const alphaParticles = blend > 0.5;
    for (let i = 0; i < particleCount; i++) {
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: (Math.random() * particleSpread + 1) * amplitude,
        speedX: (Math.random() - 0.5) * speed * 2 * amplitude,
        speedY: (Math.random() - 0.5) * speed * 2 * amplitude,
        color: color,
        opacity: (Math.random() * 0.5 + 0.5) * blend
      });
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;

      particles.forEach(particle => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = mouseInfluence;
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.speedX += (dx / distance) * force * 0.25;
          particle.speedY += (dy / distance) * force * 0.25;
        }

        if (Math.random() < 0.02) {
          particle.speedX += (Math.random() - 0.5) * 0.2;
          particle.speedY += (Math.random() - 0.5) * 0.2;
        }

        particle.speedX *= 0.98;
        particle.speedY *= 0.98;
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = alphaParticles ? 30 * blend : 10;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, particleSpread, speed, mouseInfluence, colorStops, amplitude, blend]);

  return React.createElement('canvas', { 
    ref: canvasRef, 
    style: { 
      width: '100%', 
      height: '100%', 
      display: 'block', 
      position: 'absolute', 
      top: 0, 
      left: 0 
    } 
  });
};

window.Aurora = Aurora;
