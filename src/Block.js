// Block.js

import React, { useState } from 'react';
import TextBlock from './TextBlock';
import PictureBlock from './PictureBlock';
import './Block.css';

const Block = ({ type, content, onUpdateContent, onDelete }) => {
    const [isEditing, setIsEditing] = useState(true);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="border shadow-lg">
            <div className={`block ${type === 'text' ? 'text-block' : 'picture-block'}`} >
                {type === 'text' ? (
                    <TextBlock
                        content={content}
                        onUpdateContent={onUpdateContent}
                        isEditing={isEditing}
                        onEditToggle={handleEditToggle}
                    />
                ) : (
                    <PictureBlock content={content} isEditing={isEditing} onEditToggle={handleEditToggle} />
                )}
                <button className="delete-block-btn" onClick={onDelete}>
                    Delete
                </button>
            </div>
        </div>

    );
};

export default Block;
