/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'

export default function TitleBox({ sectionName }) {
    return (
        <div className="d-flex">
            <div className="title-box bg-esea-secondary">
                <text className="kumbh-sans font-1p5-em">{sectionName}</text>
            </div>
        </div>
    )
}
