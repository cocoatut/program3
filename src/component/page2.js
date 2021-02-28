import React from "react"
import ReactDOM from "react-dom"
import pic1 from "./1.jpeg";
import pic2 from "./2.jpeg";
import pic3 from "./3.jpeg";
import pic4 from "./4.jpeg";
import pic5 from "./5.jpeg";
import pic6 from "./6.jpeg";

import "./image.css";

function Photo(){
    return (
        <div>
        < img src={pic1} class="img-editor" />
        < img src={pic2} class="img-editor" />
        < img src={pic3} class="img-editor" />
        < img src={pic4} class="img-editor" />
        < img src={pic5} class="img-editor" />
        < img src={pic6} class="img-editor" />
        </div>
        );
        
}


export default Photo