import React from "react";
import { useNavigate } from "react-router-dom";


function Error() {
    const navigate = useNavigate();
    const err = {
        status: 404,
        statusText: "Not Found",
    };
    console.log(err);
    return (
        <>
            <h1>oops....!!</h1>
            <p> Something went wrong||</p>
            <h2> {err.status + " : " + err.statusText}</h2>
            <button onClick={() => navigate("/")}>Go back to home</button>
        </>
    )
}

export default Error;
