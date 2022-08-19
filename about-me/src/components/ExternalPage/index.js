import React, { useEffect } from "react";

const RedirectedPage = () => {
    useEffect(()=>{
        window.location.replace('https://github.com/devArczi');
    },[])
    return(
        <div></div>
    )
}

export default RedirectedPage