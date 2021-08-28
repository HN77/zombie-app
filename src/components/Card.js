import React from 'react'

const Card = ({ id, name, email, address, street, city }) => {
    return (
        <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/104.236.21.134.png${id}?set=set2`} alt="monster" />
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{id.city}</p>
            {console.log(Card)}
        </div>
    )
}

export default Card
