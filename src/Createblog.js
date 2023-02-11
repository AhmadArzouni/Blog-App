import { useState } from "react";
import { useHistory } from "react-router-dom";

const Createblog = () => {
    const history=useHistory();
    const [title,settitle]=useState('');
    const [body,setbody]=useState('');
    const [author,setauthor]=useState('mario');
const [ispending,setispending]=useState(false);
const handlesubmit=(e)=>{
    e.preventDefault();
    const blog={title,body,author};
console.log(blog);
setispending(true);
fetch('http://localhost:8000/blogs/', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog)
  })
  .then(() => {
    console.log('new blog added');
    setispending(false);
    history.push('/');
    
  })



}
    return ( 
<div className="create">
    <h2>Add a new Blog</h2>
    <form onSubmit={handlesubmit}>
    <label>Blog title:</label>
    <input type="text" required value={title} onChange={(e)=>{settitle(e.target.value);}} />
    <label>Blog body:</label>
    <textarea required value={body} onChange={(e)=>{setbody(e.target.value);}}>
        
    
    </textarea>
    <label>Author:</label>
    <select value={author} onChange={(e)=>{setauthor(e.target.value);}}>
        <option value="mario">mario</option>
        <option value="yoshi">yoshi</option>


    </select>
    {!ispending && <button >Add Blog</button>}
    {ispending && <button>Adding Blog...</button>}
    </form>
    <div>{title}</div>
    <div>{body}</div>
    <div>{author}</div>
    



</div>


     );
}
 
export default Createblog;