import { useState , useEffect } from "react";


const Usefetch = (url) => {
 const [blogs,setblogs]=useState(null);
 const [ispending,setispending]=useState(true);
 const [error,seterror]=useState(null);


       
 useEffect(()=>{
            fetch(url)
            .then(res => {console.log(res);
              if (!res.ok){

                    throw Error('there is a problem');
                }

                return res.json();
            })
            .then(data => {

                      setblogs(data);
                      setispending(false);
                      seterror(null);
            })
            .catch(err=>{

                      console.log(err.message);
                      seterror(err.message);
                      setispending(false);

            })


        },[url]);

        return {blogs,error,ispending};
  
}
 
export default Usefetch ;
