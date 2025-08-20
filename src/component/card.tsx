import './card.css'
import WhatsAppLink from "./wathApp.tsx";
import PhoneLink from "./phoneLink.tsx";
import {useState} from "react";

const Skeleton = () => {
    return (
        <div className='card-skeleton'>
        </div>
    )
}

function Card(props : any) {
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = () => {
        setIsLoading(false);
    }
    return (
        <div className={'card'}>
            {isLoading && <Skeleton />}
            <img className={`image $ {isLoading ? 'hidden' : 'visible'}`} src={props.image} alt={props.titre} onLoad={handleImageLoad} />
            <text className={'texte'}>{props.text}</text>
            <div style={{display: 'flex', flexDirection: 'row', marginBottom : '10px',}}> <PhoneLink /> <WhatsAppLink /> </div>
        </div>
    );
}

export default Card;