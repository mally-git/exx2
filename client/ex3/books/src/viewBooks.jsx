import { useParams } from "react-router-dom"

const ViewBooks=(prop)=>{
    const {id}=useParams();
    const {arrBook}=prop
    const book1=arrBook.find(b=>String(b.id)===String(id))
    return(
        <>
        <div>{`name: ${book1.name}   author: ${book1.author}  id: ${book1.id}`}</div>
       
        </>
    )
}
export default ViewBooks