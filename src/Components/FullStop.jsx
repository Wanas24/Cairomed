import React from 'react';

function LoopingParagraph({ text }) {
  if (!text) {
    return null; // or return an appropriate fallback
  }

  const sentences = text.split('. ');

  return (
    <p>
      {sentences.map((sentence, index) => (
        <React.Fragment key={index}>
          {index > 0 && '. '}
          {sentence}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
}

export default LoopingParagraph;