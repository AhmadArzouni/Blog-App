import { useState ,useEffect} from "react";
import Bloglist from "./Bloglist";
import Usefetch from "./Usefetch";





const Home = () => {
  const  {blogs,error,ispending}=Usefetch('http://localhost:8000/blogs');
   
    return (

        <div className="home">
           
           
          
        
        {error && <div>{error}</div>}
        {ispending && <div>Loading...</div>}
       { blogs && <Bloglist blogs={blogs} title='My Blogs' />}
       
        </div>
        
      );
}
 
export default Home;