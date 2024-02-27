import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computers = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      {/* <hemisphereLight intensity={3} groundColor="black" /> */}
      {/* <pointLight intensity={1} />
      <spotLight position={[0, 0, 20]} /> */}
      {/* <ambientLight intensity={1} />
       */}
      <directionalLight />
      <primitive
        object={computers.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [-1, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.2]}
      />
    </mesh>
  );
};

// export default Computers;

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <directionalLight intensity={0.5} position={[-50, 0, 30]} castShadow /> */}
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight
        intensity={1}
        position={[-5, -1, 0]}
        rotation={[-0.3, -0.2, -0.2]}
        castShadow
      />
      {/* <ambientLight intensity={1} /> */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.5}
        castShadow
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
