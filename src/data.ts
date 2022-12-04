
import { character,GENDER, movie } from "./types";


export let movies: movie[] = [
    {
        id:1, 
        title: "x-man: O filme", 
        year: 2000
    },

    {
        id: 2, 
        title:"DeadPool", 
        year: 2010
    }, 

    {
        id: 3, 
        title: "IP Man - O Filme",
        year: 2008
    },

    {
        id: 4, 
        title: "IP Man O Grande mestre  2 ", 
        year: 2010
    
    }, 

    {
        id: 5, 
        title: "IP Man O Grande mestre 3 ", 
        year: 2015
    
    },

    {
        id: 6, 
        title: "IP Man O Grande mestre 4 ", 
        year: 2019
    
    }, 

    {
        id: 8, 
        title: "007, Cassino Royale ", 
        year: 2006
    
    }, 

    {
        id: 9, 
        title: "007, Quanto of Solace", 
        year: 208
    
    }, 

    {
        id: 10, 
        title: "007, Contra Spetre ", 
        year: 2015
    
    },

     {
        id: 11, 
        title: "007, Sem Tempo pra Morrer ", 
        year: 2022
    
    }

    
]

export let characters: character[] = [

    {
        id: 1, 
        name: "Storn", 
        gender: GENDER.OTHER,
        description: "Sexy notherf***"
    }
]
