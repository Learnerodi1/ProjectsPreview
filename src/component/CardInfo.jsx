import React,{Component, useState, useEffect} from "react"
import LearnerGames1 from "../images/pic1.png"
import LearnerFood1 from "../images/pic2.png"
import NecheTreat1 from "../images/pic4.png"
import ShalomBlog1 from "../images/pic3.png"
import Cure1 from "../images/pic5.png"
import TodoList1 from "../images/pic6.png"

const CardInfo = [
    {
        name : "Learner Games",
        imageLink1 : LearnerGames1,
        link : "https://learner-games.netlify.app/"
    },
    {
        name : "Learner Food",
        imageLink1 : LearnerFood1,
        link : "https://learnerfood.netlify.app/"
    },
    {
        name : "Neche Treat Rush",
        imageLink1 : NecheTreat1,
        link : "https://nechetreatrus.netlify.\app/"
    },
    {
        name : "Shalom Blog",
        imageLink1 : ShalomBlog1,
        link : "https://shalomblog.netlify.app/"
    },
    {
        name : "CureM4",
        imageLink1 : Cure1,
        link : "https://curem.netlify.app/"
    },
    {
        name : "TodoList",
        imageLink1 : TodoList1,
        link : "https://learnertodolist.netlify.app/"
    }
]

export {CardInfo}