import React, {useState} from 'react';
import './inputform.css'

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
        setSocialCard] = useState({name: '', description: '', twitter: '', instagram: '', linkedin: ''});

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
            twitter: twitter.legnth <= 1
                ? ''
                : twitter
        })
        setDescription('')
        setName('')
        setTwitter('')
        setInstagram('')
        setLinkedin('')
    }

    return (
        <div>
            <form className="social_inputs">
                <input onChange={handleName} value={name} className='name' placeholder='Name'/>
                <textarea
                    onChange={handleDescription}
                    value={description}
                    placeholder='Description'
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

            <div>
                <h2>{socialCard.name}</h2>
                <p>{socialCard.description}</p>
                <p>{socialCard.twitter}</p>
            </div>
        </div>
    )
}