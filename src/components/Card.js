/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export default function Card(props){
    return(
        <div className="card">
            <img className="card--image" src={`../images/${props.img}`} alt="" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}