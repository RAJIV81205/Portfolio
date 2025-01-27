import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import GlobeGlobe from 'three-globe'; // Ensure this is installed

const Globel = () => {
  const globeRef = useRef();

  useEffect(() => {
    // Create a new Globe instance
    const globe = new GlobeGlobe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg') // Night view
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png') // Topology for 3D effect
      .showAtmosphere(true)
      .atmosphereColor('#3a228a')
      .atmosphereAltitude(0.25);

    // Add a sample label
    globe
      .labelsData([
        {
          lat: 45.3271,
          lng: 14.4422,
          text: 'Rijeka, Croatia',
          size: 1,
          color: 'white',
        },
      ])
      .labelSize('size')
      .labelText('text')
      .labelColor(() => 'white');

    // Add the globe to the scene
    if (globeRef.current) {
      globeRef.current.add(globe);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <mesh ref={globeRef} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Globel;
