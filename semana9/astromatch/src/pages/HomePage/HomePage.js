import React, { useEffect, useState } from 'react'
// import { HomeContainer, Profile, ProfileImage } from './styled'
import axios from 'axios'


export const HomePage = () => {
    const [profile, setProfile] = useState({})

    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yara-nascimento-lovelace'


    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {
        axios.get(url)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    
    return (
        <div>
            <div>
                <img src={profile.photo} />
                    <h2>{profile.name}, {profile.age}</h2>
                    <p>{profile.bio}</p>
                    <div>
                        <button>Não quero</button>
                        <button>Eu quero</button>
                    </div>
            </div>
        </div>
    )

}
