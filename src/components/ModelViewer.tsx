import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader, GLTF } from 'three/addons/loaders/GLTFLoader.js';
import { Box, CircularProgress, useTheme, useMediaQuery } from '@mui/material';

interface ModelViewerProps {
  modelPath: string;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({
  modelPath,
  width = '100%',
  height = '400px',
  backgroundColor = '#000000',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const frameIdRef = useRef<number>(0);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(backgroundColor);

    // Camera setup with mobile optimization
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 70 : 60, // Wider FOV for mobile
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    // Adjust camera position based on device
    camera.position.set(
      isMobile ? 2.5 : 2,
      isMobile ? 2 : 1.5,
      isMobile ? 2.5 : 2
    );

    // Renderer setup with mobile optimization
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile, // Disable antialiasing on mobile for better performance
      powerPreference: "high-performance"
    });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(isMobile ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Controls setup with mobile optimization
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = isMobile ? 0.07 : 0.05;
    controls.minDistance = isMobile ? 2 : 1.5;
    controls.maxDistance = isMobile ? 5 : 4;
    controls.enableZoom = true;
    controls.enablePan = !isMobile; // Disable panning on mobile
    controls.rotateSpeed = isMobile ? 0.7 : 1; // Slower rotation on mobile for better control
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_ROTATE
    };
    controls.target.set(0, 0, 0);
    controls.update();

    // Lighting setup with mobile optimization
    const ambientLight = new THREE.AmbientLight(0xffffff, isMobile ? 0.7 : 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, isMobile ? 0.8 : 1);
    directionalLight.position.set(
      isMobile ? 2.5 : 2,
      isMobile ? 2 : 1.5,
      isMobile ? 2.5 : 2
    );
    scene.add(directionalLight);

    // Load model with mobile optimization
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf: GLTF) => {
        if (modelRef.current) {
          scene.remove(modelRef.current);
        }

        const model = gltf.scene;
        modelRef.current = model;

        // Center and scale model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = isMobile ? 1.8 / maxDim : 2 / maxDim; // Slightly smaller on mobile
        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));

        scene.add(model);
        setIsLoading(false);
      },
      undefined,
      (error: unknown) => {
        console.error('Error loading model:', error);
        setIsLoading(false);
      }
    );

    // Optimized animation loop
    let previousTime = 0;
    const animate = (currentTime: number) => {
      frameIdRef.current = requestAnimationFrame(animate);

      // Limit to 60fps on mobile
      if (isMobile && (currentTime - previousTime) < (1000 / 60)) {
        return;
      }

      previousTime = currentTime;
      controls.update();
      renderer.render(scene, camera);
    };
    animate(0);

    // Optimized resize handler with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        if (!containerRef.current || !camera || !renderer) return;

        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        renderer.setPixelRatio(isMobile ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio);
      }, 250); // Debounce resize events
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameIdRef.current);

      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.domElement.remove();
      }

      if (modelRef.current) {
        modelRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (child.material instanceof THREE.Material) {
              child.material.dispose();
            }
          }
        });
      }
    };
  }, [modelPath, backgroundColor, isMobile]);

  return (
    <Box
      ref={containerRef}
      sx={{
        width,
        height: isMobile ? '300px' : height, // Smaller height on mobile
        position: 'relative',
        overflow: 'hidden',
        borderRadius: { xs: 1, sm: 2 }, // Smaller border radius on mobile
        boxShadow: { xs: 2, sm: 3 }, // Lighter shadow on mobile
        touchAction: 'none', // Prevent default touch behaviors
      }}
    >
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        >
          <CircularProgress
            color="primary"
            size={isMobile ? 40 : 48} // Smaller loading indicator on mobile
          />
        </Box>
      )}
    </Box>
  );
};

export default ModelViewer; 