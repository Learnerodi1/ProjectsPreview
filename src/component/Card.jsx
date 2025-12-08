import React,{Component, useState,useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronRight} from  "@fortawesome/free-solid-svg-icons"

const Card = (props) =>{
    return(
        <section className="card">
            <figure>
                 <img src={props.imgLink1} alt={props.name} />
            </figure>
            <h2>{props.name}</h2>
            <div className="hr"></div>
            <a target="_blank" href={props.link}>Preview<FontAwesomeIcon icon={faChevronRight} /></a>
        </section>
    )
}
export {Card}