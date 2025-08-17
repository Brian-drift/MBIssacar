import phone from '../assets/img_3.png'

function PhoneLink() {
    const phoneNumber = "+243843193064";
    const phoneLink = `tel:${phoneNumber}`;
    return (
        <a href={phoneLink} target="_blank" rel="noopener noreferrer">
            <img src={phone} alt ="Contacter" style={{ width: '50px', height: '50px', borderRadius: '50%', paddingLeft : "15px",}} />
        </a>
    );
}

export default PhoneLink;