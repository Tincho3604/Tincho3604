import React from 'react'
import '../styles/popularHouses.css'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { faBed, faCheck, faCross, faDollarSign, faToilet, faTree } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const PopularHouse = (props) =>{

    return (
        <>
        <div className="house">
            
            <AliceCarousel mouseTrackingEnabled touchTrackingEnabled={true} autoPlay autoPlayInterval={4000}> 
                <img src={props.house.photo}/>
                <img src={props.house.photo2}/>
            </AliceCarousel>
            
            <div className="details">
                <p><FontAwesomeIcon icon={faToilet} /> {props.house.bathrooms}</p>
                <p><FontAwesomeIcon icon={faBed} /> {props.house.bedrooms}</p>
                <p><FontAwesomeIcon icon={faDollarSign} />{props.house.price} USD</p>
                <p>{props.house.garden ? <><FontAwesomeIcon icon={faCheck} /> <FontAwesomeIcon icon={faTree} /></>: <><FontAwesomeIcon icon={faCross} /> <FontAwesomeIcon icon={faTree} /></>}</p>
            </div>
        </div>
         </>
    )

}

export default PopularHouse