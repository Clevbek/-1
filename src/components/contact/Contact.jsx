import './contact.css'
import karaoke from '../../img/karaoke.png'

const Contact = () => {
    return (
        <>
        <section className='contact-container'>
            <div className='karaoke-slice-contact'>
            
            <div className='btn-right'></div>

            <div className='meet-page'>
                <p>meet your host</p>
                </div>
            
            

                <div className='page-one'>
                <p>Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
                </div>
                <div className='page-two'>
                <p>He's here to help you level up your game by sharing everything he's learned along the way.</p>
                </div>
            
            </div>
            <div className='karaoke-img-contact'>
                <img src={karaoke} alt="" />
            </div>
        </section>

        <section className='contacts-container'>
            <div className='contacts-option'>
                <div className='option'>
                    <p>Email Newsletter</p>

                    <h1>
                        Subscribe for updates
                    </h1>
                </div>  
                
            <div className='option-contacts'>

                <div className='option-name'>
                <input type="text" placeholder='Name'/>
                </div>

                <div className="option-email">
                <input type="email" placeholder='Email'/>
                </div>

                <div className='option-text'>
                <p>Submit</p>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}

export default Contact;
