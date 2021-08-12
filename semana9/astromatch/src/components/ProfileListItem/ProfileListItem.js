import React from 'react'
import { ListItemContainer, RoundImage } from './styled'

export const ProfileListItem = () => {
    return (
        <ListItemContainer>
            <RoundImage src="https://picsum.photo/50/50?=1"/>
                <h2>Nome Pessoa</h2>
        </ListItemContainer>
    )

}