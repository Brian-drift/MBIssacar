import {useRef} from 'react';
import {useFrame} from "@react-three/fiber";
import {PerspectiveCamera, useScroll} from "@react-three/drei";
import Bmw from "./bmw.tsx";



function Scene() {
    const move = useRef<any>();
    const scroll = useScroll()
    useFrame(()=>{
        move.current.position.set(0, 0,0)
        if (move.current) {
            move.current.rotation.x = scroll.offset * +10;
            move.current.position.y = scroll.offset * -100;
            move.current.position.z = scroll.offset * -5;

        }
    })

    return (
        <group ref ={move}>
            <Bmw/>
        </group>
    );
}

export default Scene;