import React,{Component, useState, useEffect} from "react"
import LearnerGames1 from "../images/pic1.png"
import LearnerFood1 from "../images/pic2.png"
import NecheTreat1 from "../images/pic4.png"
import ShalomBlog1 from "../images/pic3.png"
import Cure1 from "../images/pic5.png"
import TodoList1 from "../images/pic6.png"
import DiceGame1 from "../images/p7.png"

const CardInfo = [
    {
        name : "Learner Games",
        imageLink1 : LearnerGames1,
        link : "https://learner-games.vercel.app/"
    },
    {
        name : "Learner Food",
        imageLink1 : LearnerFood1,
        link : "https://food-kappa-self.vercel.app/"
    },
    {
        name : "Neche Treat Rush",
        imageLink1 : NecheTreat1,
        link : "https://neche-treat-rush.vercel.app/"
    },
    {
        name : "Shalom Blog",
        imageLink1 : ShalomBlog1,
        link : "https://shalom-chi-ochre.vercel.app/"
    },
    {
        name : "CureM4",
        imageLink1 : Cure1,
        link : "https://cure-m4-gules.vercel.app/"
    },
    {
        name : "DiceGame",
        imageLink1 : DiceGame1,
        link : "https://learnerdicegame.vercel.app/"
    },
    {
        name : "TodoList",
        imageLink1 : TodoList1,
        link : "https://todo-list-nine-pi-95.vercel.app/"
    }
]

export {CardInfo}