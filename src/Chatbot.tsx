import React, { useEffect } from 'react';

const Chatbot: React.FC = () => {
  useEffect(() => {
    // If Ollama provides an embed script, dynamically add it
    const script = document.createElement('script');
    script.src = 'https://your-ollama-chatbot-script.js'; // Replace with the correct URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="ollama-chatbot">
      {/* Optionally, include a placeholder or container where the chatbot will render */}
      <h2>Chat with me</h2>
    </div>
  );
};

export default Chatbot;
