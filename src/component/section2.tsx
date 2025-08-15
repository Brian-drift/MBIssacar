import Card from "./card.tsx";
import mitsubishi from '../assets/MITSUBISHI.jpg'
import volvagen from '../assets/VW.jpg'
import honda from '../assets/HONDA.jpg'
import Toyota from '../assets/TOYOTA.jpg'
import Crown from "../assets/crown.jpg";
import Range from  "../assets/Range-Rover.jpg"
import dahiatsu from "../assets/DAIHATSU.jpg"
import Interieur from "../assets/interieur.jpg";
import Bmw1 from "../assets/BMV1.jpg";
import './section2.css'
import './App.css'
import WhatsAppLink from "./wathApp.tsx";
import mercedes from "../assets/MERCEDES.jpg";
import lexus from "../assets/LEXUS.jpg";
import mazdaImage from "../assets/MAZDA.jpg";

function Section2() {
    return (
        <div className='container'>
            <text style={{
                textAlign: "center",
                color: "white",
                top: '120%',
                fontSize: '2em',
                fontWeight: 'bold',
                fontFamily: 'Roboto',
            }}> DECOUVREZ NOS MODELES !!!! </text>

                <div className="sectionPrin">
                    <div className={"section"}>
                        <div>
                            <Card image={Toyota} titre =  {'Toyota'} />
                            <Card image={honda} titre =  {'honda'} />
                        </div>
                        <div>
                            <Card image={mazdaImage} titre={'Mazda'}/>
                            <Card image={lexus} titre={'lexus'}/>
                        </div>
                    </div>
                    <div className={"section"}>
                        <div>
                            <Card image={mercedes} titre =  {'Mercedes'} description={'Benz'} />
                            <Card image={mitsubishi} titre =  {'Mitsubishi'} />
                        </div>
                        <div>
                            <Card image={dahiatsu} titre={'dahiatsu'}/>
                            <Card image={Range} titre={'Range'}/>
                        </div>
                    </div>
                    <div className={"section"}>
                        <div>
                            <Card image={Crown} titre =  {'Crown'} description ={'Athelete'} />
                            <Card image={Bmw1} titre =  {'Interieur'} />
                        </div>
                        <div>
                            <Card image={volvagen} titre={'Volkswa..'}/>
                            <Card image={Interieur} titre={'Interieur'} description={'Des interieur de qualité'} />
                        </div>
                    </div>

                    <div>
                        <WhatsAppLink />
                    </div>
                </div>
        </div>
    );
}

export default Section2;