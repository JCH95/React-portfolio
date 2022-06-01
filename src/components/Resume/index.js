import React from 'react';
import resumePdf from '../../assets/documents/developer-resume-converted.pdf';

function Resume() {
    return (
        <div>
            <a href={resumePdf} target='_blank' rel='noreferrer'>Download the Resume PDF Here!</a>
        </div>
    );
}

export default Resume;