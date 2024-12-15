import { Link } from "react-router-dom"


function Book(prop){
   const {arrBook}=prop
    return(
        <>
        {arrBook.map(i=>{return<div >{`${i.author} ${i.name}`} <br/><Link to={"/books/"+i.id}>more detailes</Link></div>})}
        </>
    )
}
export default Book