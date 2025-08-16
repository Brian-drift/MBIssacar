import './card.css'
import WhatsAppLink from "./wathApp.tsx";

function Card(props : any) {
    return (
        <div className={'card-container'}>
            <img className={'image'} src={props.image} alt={props.title} />
            <div>
                <text className={'texte'}>{props.titre}</text>
                <div>
                    <WhatsAppLink />
                </div>
            </div>
        </div>
    );
}

export default Card;