import React from "react";

const Error = ({ message }) => {
    return (
        <div style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
            <h2>Sorry,Something went wrong.
            </h2>
            <p>Error: {message}</p>
        </div>
    );
};

export default Error;