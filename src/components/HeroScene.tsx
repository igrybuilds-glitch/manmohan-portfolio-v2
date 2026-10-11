import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroSceneProps {
  scrollProgress?: number;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ scrollProgress = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<number>(scrollProgress);

  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Color constants
    const paperColor = 0xF6F1E8;
    const inkLineColor = 0x221D16;
    const goldAccentColor = 0x9C7414;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(paperColor);
    scene.fog = new THREE.Fog(paperColor, 14, 32);

    // Camera
    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    const initialCamZ = 16;
    const initialCamY = 5.5;
    camera.position.set(0, initialCamY, initialCamZ);
    camera.lookAt(0, -0.5, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Topographic wireframe wave plane
    const planeWidth = 34;
    const planeDepth = 24;
    const segmentsX = 64;
    const segmentsY = 48;
    const geometry = new THREE.PlaneGeometry(planeWidth, planeDepth, segmentsX, segmentsY);
    geometry.rotateX(-Math.PI / 2.3);

    // Store base positions
    const posAttribute = geometry.attributes.position;
    const basePositions = posAttribute.array.slice() as Float32Array;

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: inkLineColor,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });

    const waveMesh = new THREE.Mesh(geometry, wireframeMaterial);
    waveMesh.position.set(0, -2.4, 0);
    scene.add(waveMesh);

    // ONE small thin gold torus ring floating as the single accent object
    const torusRadius = 0.9;
    const tubeRadius = 0.028;
    const torusGeometry = new THREE.TorusGeometry(torusRadius, tubeRadius, 24, 72);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: goldAccentColor,
      wireframe: false,
    });

    const goldTorus = new THREE.Mesh(torusGeometry, torusMaterial);
    goldTorus.position.set(4.2, 1.2, 2.5);
    goldTorus.rotation.set(0.6, 0.4, 0.2);
    scene.add(goldTorus);

    // Mouse interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (event.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation & Lifecycle state
    let animationFrameId: number;
    let isTabVisible = !document.hidden;
    let clock = new THREE.Clock();

    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !prefersReducedMotion) {
        clock.start();
        animate();
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    // Render loop
    const animate = () => {
      if (!isTabVisible) return;

      const time = clock.getElapsedTime();
      const currentScroll = scrollRef.current;

      // Mouse smoothing
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // Camera dolly & subtle mouse tilt based on scroll
      camera.position.x = mouseX * 1.2;
      camera.position.y = initialCamY - mouseY * 0.8 + currentScroll * 1.5;
      camera.position.z = initialCamZ - currentScroll * 4.0;
      camera.lookAt(mouseX * 0.3, -0.5, -currentScroll * 2.0);

      // Wave calculation: scrolling gently increases wave energy
      const waveEnergy = 0.55 + currentScroll * 0.6;
      const currentPositions = posAttribute.array as Float32Array;
      const count = posAttribute.count;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = basePositions[i3];
        const y = basePositions[i3 + 1];

        // Harmonic topographic sine waves
        const elevation =
          Math.sin(x * 0.28 + time * 0.75) * 0.48 +
          Math.cos(y * 0.34 + time * 0.55) * 0.42 +
          Math.sin((x + y) * 0.18 + time * 0.4) * 0.25;

        currentPositions[i3 + 2] = basePositions[i3 + 2] + elevation * waveEnergy;
      }
      posAttribute.needsUpdate = true;

      // Floating gold torus movement: subtle slow precession
      goldTorus.rotation.x = 0.6 + Math.sin(time * 0.35) * 0.25;
      goldTorus.rotation.y = time * 0.2;
      goldTorus.position.y = 1.2 + Math.sin(time * 0.6) * 0.3;
      goldTorus.position.x = 4.2 + Math.cos(time * 0.4) * 0.2;

      renderer.render(scene, camera);

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Initial render
    if (prefersReducedMotion) {
      // Just render single static frame
      renderer.render(scene, camera);
    } else {
      animate();
    }

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);

      geometry.dispose();
      wireframeMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    />
  );
};
