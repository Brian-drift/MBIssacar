import phone from '../assets/img_3.png'

function PhoneLink() {
    const phoneNumber = "+243843193064";
    const phoneLink = `tel:${phoneNumber}`;
    return (

            <a href={phoneLink} target="_blank" rel="noopener noreferrer">
                <button style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent : 'flex-start',
                    height: '40px',
                    width: '100px',
                    borderRadius:'20px'}}>
                    <img src={phone} alt ="Contacter" style={{ width: '20px', height: '20px', borderRadius: '50%',margin: '5px' }} />
                    <text style={{ color : 'black',}}> Appelle </text>
                </button>

            </a>


    );
}

export default PhoneLink;