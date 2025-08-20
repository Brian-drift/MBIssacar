import Card from "./component/card.tsx";
import mitsubishi from './assets/MITSUBISHI.jpg'
import Toyota from "./assets/TOYOTA.jpg"
import Crown from "./assets/crown.jpg";
import Range from  "./assets/Range-Rover.jpg"
import dahiatsu from "./assets/DAIHATSU.jpg"
import Bmw1 from "./assets/BMV1.jpg";
import './App.css'
import WhatsAppLink from "./component/wathApp.tsx";
import mercedes from "./assets/MERCEDES.jpg";
import lexus from "./assets/LEXUS.jpg";
import mazdaImage from "./assets/MAZDA.jpg";
import backGroundImage from "./assets/FOND-site.png"

function App() {
    return (
        <div className='container'>
            <div className={"header"}> <text> I&B business </text> <WhatsAppLink /> </div>
            <div className='row'>
                <img src={backGroundImage}  alt="Background" className='img-fluid' />
                <text className='col-1'>
                    ACHETER <br/> VOTRE <span className={"voiture"}> PROCHAIN </span> <br/> VEHICULE  <br/>  DE <span className={"qualite"}> QUALITER. </span>
                </text>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    marginTop: "30px",
                }}>
                    <text className={"col-3"}>
                        Trouver votre prochaine voiture à un prix imbatable et à une des qualités
                        pas encore égaler dans le marchés à lubumbashi qu'ils sagisses d'un SUV robuste, de voiture economique vous trouverais
                        sûrement votre prochaine voiture parmis nos models.
                    </text>
                    <div className='col-2-div'>
                        <text className={'col-2'}> DECOUVREZ NOS MODELES !!!! </text>
                    </div>
                </div>
            </div>
            <div  className='row-2'>
                <Card image={Toyota} text={'Toyota'}/>
                <Card image={lexus} text={'Lexus'}/>
                <Card image={mercedes} text={'Mercedes  Benz'}/>
            </div>
            <div  className='row-2'>
                <Card image={mitsubishi} text={'Mitsubishi'}/>
                <Card image={mazdaImage} text={'Mazda'}/>
                <Card image={Bmw1} text={'BMW'}/>
            </div>
            <div  className='row-2'>
                <Card image={dahiatsu} text={'Daihatsu'}/>
                <Card image={Crown} text={'Crown'}/>
                <Card image={Range} text={'Discovery'}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
            }}>
                <text className={"col-3"}>
                    Ce site est en cours d'éxécution car en éffet nous dettenons plusieurs vehicules à notre actif, pour plus d'information veiller nous contacter.
                </text>
            </div>

        </div>
    );
}

export default App;