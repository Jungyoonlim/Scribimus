import React, { useState } from "react";

function Document({document}) {
    return(
        <div>
            <h1>{document.title}</h1>
            <p>{document.content}</p>
        </div>
    )
};

function DocumentList(){
    return(
        <div>
            <Document key = {document.id} document = {document} />
        </div>
    )
}; 

export default DocumentList;