import axios from "axios";

export default async function getPersons(page?:number){
    let url;
    page ? (url = 'https://swapi.dev/api/people/?page=' + page) : (url = 'https://swapi.dev/api/people')
    return await axios.get(url)
}
export async function getOnePerson(id:number){
    return await axios.get("https://swapi.dev/api/people/"+id+"/")
}
export async function searchByName(name:string){
    return await axios.get('https://swapi.dev/api/people/?search=' + name)
}