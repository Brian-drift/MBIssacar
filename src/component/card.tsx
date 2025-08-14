import './card.css'

function Card(props : any) {
    return (
        <div className={'card-container'}>
            <img className={'image'} src={props.image} alt={props.title} />
            <text className={'texte'}>{props.titre}</text>
            <text className={'description'}>{props.description}</text>
        </div>
    );
}

export default Card;