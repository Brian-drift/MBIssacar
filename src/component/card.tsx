import './card.css'
import WhatsAppLink from "./wathApp.tsx";
import PhoneLink from "./phoneLink.tsx";

function Card(props : any) {
    return (
        <div className={'card-container'}>
            <img className={'image'} src={props.image} alt={props.titre} loading={'lazy'}/>
            <div>
                <text className={'texte'}>{props.titre}</text>
                <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                    <WhatsAppLink />
                    <PhoneLink />
                </div>
            </div>
        </div>
    );
}

export default Card;