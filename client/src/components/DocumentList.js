import React, { useState } from "react";

function DocumentView({document}) {
    const { title, content } = document;
    return(
        <div>
            <h1>{document.title}</h1>
            <p>{document.content}</p>
        </div>
    )
};