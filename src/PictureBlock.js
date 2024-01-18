// PictureBlock.js

import React from 'react';

const PictureBlock = ({ content, isEditing, onEditToggle }) => {
    return (
        <div>
            <div>
                {isEditing ? (
                    <input type="file" accept="image/*" />
                ) : (
                    <img src={content} alt="Uploaded" className="image-content" />
                )}
                <button className="edit-toggle-btn" onClick={onEditToggle}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
            </div>
        </div>
    );
};

export default PictureBlock;