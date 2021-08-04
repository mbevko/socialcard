import React, {useState} from 'react';
import './inputform.css';

export default function InputForm() {

    const [name,
        setName] = useState('');

    const [description,
        setDescription] = useState('');

    const [twitter,
        setTwitter] = useState();

    const [instagram,
        setInstagram] = useState()

    const [linkedin,
        setLinkedin] = useState();

    const [socialCard,
        setSocialCard] = useState({
        name: 'John Doe',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, molestiae molesti' +
                'as! Dolor pariatur laborum voluptas alias repudiandae quisquam cum? Quidem cupid' +
                'itate nesciunt voluptates odio amet nisi praesentium ipsa, eum et?',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
    });

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleTwitter = (e) => {
        setTwitter(e.target.value)
    }

    const handleInstagram = (e) => {
        setInstagram(e.target.value)
    }

    const handleLinkedin = (e) => {
        setLinkedin(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setSocialCard({
            name: name,
            description: description,
            twitter: twitter,
            instagram: instagram,
            linkedin: linkedin

        });

        setDescription('')
        setName('')
        setTwitter('')
        setInstagram('')
        setLinkedin('')
    }

    return (
        <div className="app">
            <form className="social_inputs">
                <input onChange={handleName} value={name} className='name' placeholder='Name'/>
                <textarea
                    onChange={handleDescription}
                    value={description}
                    placeholder='Bio'
                    className='description'/>
                <input
                    onChange={handleTwitter}
                    value={twitter}
                    className='twitter'
                    placeholder='Twitter'/>
                <input
                    onChange={handleInstagram}
                    value={instagram}
                    className='instagram'
                    placeholder='Instagram'/>
                <input
                    onChange={handleLinkedin}
                    value={linkedin}
                    className='linkedin'
                    placeholder='LinkedIn'/>

                <input type="submit" className="btn" onClick={handleSubmit}/>
            </form>

            <div className="social_card">
                <div className="row">

                    <div>
                        <h2>{socialCard.name}</h2>
                        <p>{socialCard.description}</p>
                        <button>See more</button>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1528721071427-cab7de8e8050?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'/>
                    </div>

                </div>
                <div className="social_icons">
                    {socialCard.twitter
                        ? <a href={socialCard.twitter} alt="Twitter" title="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        : ''}
                    {socialCard.instagram
                        ? <a
                                href={socialCard.instagram}
                                alt="Instagram"
                                title="Instagram"
                                target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                        : ''}
                    {socialCard.linkedin
                        ? <a href={socialCard.linkedin} alt="LinkedIn" title="LinkedIn" target="_blank">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        : ''}
                </div>
            </div>
        </div>
    )
}


