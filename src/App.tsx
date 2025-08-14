import {Environment, OrbitControls, ScrollControls, Scroll} from "@react-three/drei";
import './App.css'
import {Canvas, useThree} from "@react-three/fiber";
import Scene from "./component/scene.tsx";
import Section2 from "./component/section2.tsx";

function App() {

  return (
      <div className={'container'}>
          <text className={'heroSection'}>
              ACHETER <br/> DES <br/> VOITURES <br/> DE <br/> QUALITES
          </text>
          <Canvas shadows camera={{position : [50, 5, 0], fov : 20}}>
              <ScrollControls damping={0.250}>
                  <Scroll>
                      <Scene />
                  </Scroll>
              </ScrollControls>
              <ambientLight intensity ={1}/>
              <directionalLight
                  castShadow
                  position = {[5,20,15]}
                  intensity = {5}
                  shadow-mapSize-width = {1024}
                  shadow-mapSize-height = {1024}
                  shadow-camera-far = {50}
                  shadow-camera-left = {10}
                  shadow-camera-right = {10}
                  shadow-camera-top = {10}
                  shadow-camera-bottom = {-10}/>
          </Canvas>
          <Section2 />
      </div>
  )
}

export default App
