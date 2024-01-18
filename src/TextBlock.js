import React, { useState } from 'react';

const TextBlock = ({ content, onUpdateContent, isEditing, onEditToggle }) => {
    const [text, setText] = useState(content);

    const handleContentChange = (e) => {
        const newText = e.target.value;

        // Check if the new text contains more than 250 words
        const words = newText.trim().split(/\s+/);
        if (words.length > 250) {
            // If there are more than 250 words, truncate the text
            setText(words.slice(0, 250).join(' '));
        } else {
            // Otherwise, update the text
            setText(newText);
        }
    };

    const handleSave = () => {
        onUpdateContent(text);
        onEditToggle();
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <textarea
                        className="text-block"
                        value={text}
                        onChange={handleContentChange}
                    />
                    <p className="word-count">
                        Words: {text.trim().split(/\s+/).length}/250
                    </p>
                    <button className="edit-toggle-btn" onClick={handleSave}>
                        Save
                    </button>
                </div>
            ) : (
                <div>
                    <p className="text-content">{content}</p>
                    <button className="edit-toggle-btn" onClick={onEditToggle}>
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
};

export default TextBlock;
