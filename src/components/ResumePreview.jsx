import React from 'react';

const ResumePreview = ({data}) => {
    console.log(data.name);
    console.log(data.email);
    return (
        <div>
            <h1>This is ResumePreview</h1>
        </div>
    );
};

export default ResumePreview;