import React from 'react';
import whatsApp from '../assets/whatsApp.jpg'

function WhatsAppLink() {
    const phoneNumber = "243843193064"; // Sans le + et sans les espaces, e.g., "33612345678"
    const imageUrl = "/path/to/your/image.png"; // Le chemin vers ton image
    const message = "Bonjour, je souhaite plus d'informations."; // Message pré-rempli (facultatif)

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <img src={whatsApp} alt ="Contacter via WhatsApp" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        </a>
    );
}

export default WhatsAppLink;