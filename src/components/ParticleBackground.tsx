'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseSize: number;
  color: string;
  isTextParticle: boolean;
  textTargetX: number;
  textTargetY: number;
  theta: number;
  radiusOffset: number;
  rotationSpeed: number;
  horizontalSpeed: number;
  rotationDirection: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const time = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const getTargetPoints = (text: string, w: number, h: number) => {
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return [];

      tempCanvas.width = w;
      tempCanvas.height = h;
      
      const fontSize = Math.min(w / 8, 100);
      tempCtx.font = `bold ${fontSize}px sans-serif`;
      tempCtx.textAlign = 'center';
      tempCtx.textBaseline = 'middle';
      tempCtx.fillText(text, w / 2, h / 2);

      const imageData = tempCtx.getImageData(0, 0, w, h).data;
      const points = [];
      const step = 4;

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          if (imageData[(y * w + x) * 4 + 3] > 128) {
            points.push({ x, y });
          }
        }
      }
      return points;
    };

    const init = () => {
      const container = containerRef.current;
      width = canvas.width = container ? container.clientWidth : window.innerWidth;
      height = canvas.height = container ? container.clientHeight : 800;

      particles = [];
      const particleCount = 1000;
      const textPoints = getTargetPoints('solooo dev', width, height);

      for (let i = 0; i < particleCount; i++) {
        const isTextParticle = i < textPoints.length && Math.random() > 0.1;
        const initialBaseX = Math.random() * (width + 200);
        const theta = Math.random() * Math.PI * 2;
        const radiusOffset = Math.random() * 0.6 + 0.7;
        const amplitude = height * 0.4;
        const angle = (initialBaseX * 0.002) + theta;
        
        particles.push({
          x: initialBaseX - 100,
          y: height / 2 + Math.sin(angle) * amplitude * radiusOffset,
          z: Math.cos(angle) * amplitude * radiusOffset,
          baseX: initialBaseX,
          baseSize: Math.random() * 1.5 + 1,
          color: '',
          isTextParticle,
          textTargetX: isTextParticle ? textPoints[i].x : 0,
          textTargetY: isTextParticle ? textPoints[i].y : 0,
          theta,
          radiusOffset,
          rotationSpeed: 0.05 + Math.random() * 0.2,
          horizontalSpeed: 0.05 + Math.random() * 0.6,
          rotationDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time.current += 0.01;

      particles.sort((a, b) => a.z - b.z);

      particles.forEach((p, i) => {
        let displaySize = p.baseSize;

        if (mouse.current.active && p.isTextParticle) {
          p.x += (p.textTargetX - p.x) * 0.08;
          p.y += (p.textTargetY - p.y) * 0.08;
          p.z = 100;
          ctx.fillStyle = `rgba(59, 130, 246, ${0.4 + Math.sin(time.current * 3 + i) * 0.1})`;
        } else {
          const amplitude = height * 0.4;
          const wrapWidth = width + 200;
          
          const prevBaseX = p.baseX;
          p.baseX = (p.baseX + p.horizontalSpeed) % wrapWidth;
          
          // ワープ検知：右端→左端に飛んだ場合、p.xも即座にリセット
          if (p.baseX < prevBaseX - 1) {
            p.x = p.baseX - 100;
          }
          
          const currentX = p.baseX - 100;

          const angle = (currentX * 0.002) + time.current * p.rotationSpeed * p.rotationDirection + p.theta;
          const radius = amplitude * p.radiusOffset;
          
          const targetY = height / 2 + Math.sin(angle) * radius;
          const targetZ = Math.cos(angle) * radius;

          // 滑らかに目標位置へ移動（ホバーアウト時もふわっと解散する）
          p.x += (currentX - p.x) * 0.05;
          p.y += (targetY - p.y) * 0.05;
          p.z = targetZ;

          const zNorm = (p.z + amplitude) / (amplitude * 2); 
          displaySize = p.baseSize * (0.3 + zNorm * 2.2);
          const opacity = 0.02 + zNorm * 0.25;
          
          if (zNorm > 0.8) {
            ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 1.3})`;
          } else {
            ctx.fillStyle = `rgba(71, 85, 105, ${opacity})`;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.1, displaySize), 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto"
      onMouseEnter={() => { mouse.current.active = true; }}
      onMouseLeave={() => { mouse.current.active = false; }}
      onTouchStart={() => { mouse.current.active = !mouse.current.active; }}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-80"
      />
    </div>
  );
}
