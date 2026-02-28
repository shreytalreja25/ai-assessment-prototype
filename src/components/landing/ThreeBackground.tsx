"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function ParticleCloud(props: any) {
    const ref = useRef<any>();
    // Generate a sphere distribution of points
    const sphere = random.inSphere(new Float32Array(3000 * 3), { radius: 1.5 });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffcc00" // UNSW primary yellow tinted
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

export function ThreeBackground() {
    return (
        <div className="absolute inset-0 -z-20 h-full w-full bg-background overflow-hidden">
            {/* Subtle radial gradient overlay to ensure text readability */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]" />
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ParticleCloud />
            </Canvas>
        </div>
    );
}
