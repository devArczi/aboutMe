import React, { useEffect } from "react";
import styled from "styled-components";

const Loader = styled.div`
    padding: 40px;
    height: 100vh;
    width: 100vw;
`
const RedirectedPage = () => {
    useEffect(()=>{
        window.location.replace('https://github.com/devArczi');
    },[])
    return(
        <Loader>
            <h1>Redirecting...</h1>
        </Loader>
    )
}

export default RedirectedPage