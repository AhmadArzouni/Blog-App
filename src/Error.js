import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <div className="error">
           <h1>Error 404</h1> <br></br>
            <Link to='/'>Return to Home?</Link>
        </div>
     );
}
 
export default Error;