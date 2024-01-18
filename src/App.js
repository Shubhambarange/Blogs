// App.js

import React, { useState } from 'react';
import Block from './Block';
import './App.css';

const App = () => {
  const [blocks, setBlocks] = useState([]);

  const addBlock = (type, index) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index + 1, 0, { type, content: type === 'text' ? '' : null });
    setBlocks(newBlocks);
  };

  const deleteBlock = (index) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index, 1);
    setBlocks(newBlocks);
  };

  const updateBlockContent = (index, content) => {
    const newBlocks = [...blocks];
    newBlocks[index].content = content;
    setBlocks(newBlocks);
  };

  return (
    <div>
      <div className="py-4 border-b-2 z-10 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white">
        <h1 className="font-bold text-3xl uppercase text-center ">Blogs</h1>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition p-10 border-5 mt-8">
        <div className="w-11/12 flex flex-col justify-center items-center h-screen mb-10">
          {blocks.map((block, index) => (
            <Block
              key={index}
              type={block.type}
              content={block.content}
              onUpdateContent={(content) => updateBlockContent(index, content)}
              onDelete={() => deleteBlock(index)}
            />
          ))}

          <button className="add-block-btn" onClick={() => addBlock('text', blocks.length - 1)}>
            Add Text Block
          </button>
          <button className="add-block-btn" onClick={() => addBlock('picture', blocks.length - 1)}>
            Add Picture Block
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
