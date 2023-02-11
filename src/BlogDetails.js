import Usefetch from "./Usefetch";
import { useHistory, useParams } from "react-router-dom";

const BlogDetails = () => {
    const history=useHistory();
    const {id}=useParams();
   const  {blogs,error,ispending}=Usefetch('http://localhost:8000/blogs/' + id);
   const handledelete=()=>{
    fetch('http://localhost:8000/blogs/' + blogs.id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/');
      }) 


   }
    return ( 

        <div className="blogdetails">
         
        {ispending  &&  <div>Loading...</div>} 
        {error && <div>{error}</div>}
        { blogs && <h2>{blogs.title}</h2>}
        { blogs && <h3>written by {blogs.author}</h3>}
        { blogs && <div>{blogs.body}</div>}
        <div className='delete'>
        <button onClick={handledelete}>Delete Blog?</button>
        </div>
        




        </div>
     );
}
 
export default BlogDetails;