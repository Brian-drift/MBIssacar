import Card from "./component/card.tsx";
import mitsubishi from './assets/MITSUBISHI.jpg'
import volvagen from './assets/VW.jpg'
import honda from './assets/HONDA.jpg'
import Toyota from "./assets/TOYOTA.jpg"
import Crown from "./assets/crown.jpg";
import Range from  "./assets/Range-Rover.jpg"
import dahiatsu from "./assets/DAIHATSU.jpg"
import Interieur from "./assets/interieur.jpg";
import Bmw1 from "./assets/BMV1.jpg";
import './App.css'
import WhatsAppLink from "./component/wathApp.tsx";
import mercedes from "./assets/MERCEDES.jpg";
import lexus from "./assets/LEXUS.jpg";
import mazdaImage from "./assets/MAZDA.jpg";

function Section2() {
    return (
        <div className='container'>
            <div className='row'>
                <text className='col-1'>
                    ACHETER <br/> DES  <span className={"voiture"}> VOITURES </span> <br/> DE  <br/> <span className={"qualite"}> QUALITER. </span>
                </text>
            </div>
            <div className='col-2-div'>
                <text className={'col-2'}> DECOUVREZ NOS MODELES !!!! </text>
            </div>
            <div className="sectionPrin">
                <div className={"section"}>
                    <div>
                        <Card image={Toyota} titre =  {'Toyota'} />
                    </div>
                    <div>
                        <Card image={mazdaImage} titre={'Mazda'}/>
                        <Card image={lexus} titre={'Lexus'}/>
                    </div>
                </div>
                <div className={"section"}>
                    <div>
                        <Card image={mercedes} titre =  {'Mercedes'}/>
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
                    </div>
                </div>
            </div>
            <text style={{ color : "white",
                            marginBottom : "25px",}}> Me contacter </text>
                <WhatsAppLink />
        </div>
    );
}

export default Section2;