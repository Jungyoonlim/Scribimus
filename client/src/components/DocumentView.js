// Hook { useState } to display the document's title and content
import React, { useState } from "react";

// need to access and display the list of documents
// figure out how to pass a document to it 
function DocumentView({document}) {
    const { title, content } = document;   

    // handle editing of the document 
    const [isEditing, setIsEditing] = useState(false);

    // handle the title and content of the document
    const [currentContent, setCurrentContent] = useState(content);

    const handleEditClick = () => {
        // When the Edit button is clicked, set isEditing to true
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // When the Save button is clicked, set isEditing to false
        setIsEditing(false);
        //update the document's content
        document.content = currentContent; 
    };

    const handleChange = (event) => {
        // When the content of the textarea changes, update the currentContent state variable
        setCurrentContent(event.target.value);
    };

    return (
        <div>
            <h1>{title}</h1>
            {/* content of the document */}
            <p>{content}</p>
        </div>
    );
}

export default DocumentView; // this line is necessary to import the component in other files