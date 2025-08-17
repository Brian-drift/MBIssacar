import Card from "./component/card.tsx";
import mitsubishi from './assets/MITSUBISHI.jpg'
import volvagen from './assets/VW.jpg'
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
import backGroundImage from "./assets/Allways for website.png"

function Section2() {
    return (
        <div className='container'>
            <div className={"header"}> <text> Bonjours </text> <text> I&B business </text> <WhatsAppLink /> </div>
            <div className='row'>
                <img src={backGroundImage}  alt="Background" className='img-fluid' />
                <text className='col-1'>
                    ACHETER <br/> DES  <span className={"voiture"}> VOITURES </span> <br/> DE  <br/> <span className={"qualite"}> QUALITER. </span>
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
                <Card image={Toyota}/>
                <Card image={lexus}/>
            </div>
            <div  className='row-2'>
                <Card image={mazdaImage}/>
                <Card image={mercedes}/>
            </div>
            <div  className='row-2'>
                <Card image={mitsubishi}/>
                <Card image={Bmw1}/>
            </div>
            <div  className='row-2'>
                <Card image={dahiatsu}/>
                <Card image={Crown}/>
            </div>
            <div  className='row-2'>
                <Card image={volvagen}/>
                <Card image={Range}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
            }}>
                <text className={"col-3"}>
                    A noter : ceci n'est qu'un site vitrine, en d'autre mots aucune transaction n'est faite via ce site.
                    Donc le but de ce site est de mettre en avant des vehicules ainsi que le whatsapp des vendeurs.
                </text>
            </div>

        </div>
    );
}

export default Section2;