import whatsApp from '../assets/whatsApp.jpg'

function WhatsAppLink() {
    const phoneNumber = "243843193064"; // Sans le + et sans les espaces, e.g., "33612345678"
    const message = "Bonjour, je souhaite plus d'informations."; // Message pré-rempli (facultatif)

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent : 'flex-start',
                height: '40px',
                width: '120px',
                marginLeft:'50px',
                borderRadius:'20px',
                borderWidth:'0px',
                backgroundColor:'#31783d',}}>
                <img src={whatsApp} alt ="Contacter via WhatsApp" style={{ width: '30px', height: '30px', borderRadius: '50%', margin: '5px' }} />
                <text style={{ color : '#c4c4c4',}}> WhatsApp </text>
            </button>

        </a>
    );
}

export default WhatsAppLink;