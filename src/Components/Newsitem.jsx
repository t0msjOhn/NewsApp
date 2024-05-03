import React from "react";

const Newsitem = ({title,description,url,src})=>{
    return(
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
            <img src={src?src:"https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-1,h-1:w-325,h-200"} style={{height:"200px" , width:"325px"}} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text">{description?description.slice(0,90):"The news is intresting please click the below buttom for more details"}</p>
                <a href={url} className="btn btn-primary">More Info..</a>
            </div>
        </div>
    )
}

export default Newsitem;