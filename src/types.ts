export type movie = {
    id: number, 
    title: string, 
    year: number
}

export enum GENDER{
    MALE = "Masculino", 
    FEMALE = "Feminino", 
    OTHER = "OTHER"
}

export type caracter = {
    id: number, 
    name: string, 
    gender: GENDER
}
