import React, { useState, useRef } from 'react';
import video from "../../assets/1.mp4";

const Video = () => {
  const videoRef = useRef(null);
  const [questionVisible, setQuestionVisible] = useState(false);
  const [question, setQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [time , setTime] = useState(0);

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    setTime(currentTime);
    
    if (currentTime >= 2 && currentTime <= 2.5) { // Example: Show question between 10-15 seconds
      setQuestion('What is the capital of France?');
      setQuestionVisible(true);
      videoRef.current.pause();
    } else {
      setQuestionVisible(false);
    }
  };

  const handleAnswer = (answer) => {
    setCurrentAnswer(answer);
    alert(`You chose: ${answer}`);
    setQuestionVisible(false);
    videoRef.current.play();
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="600"
        controls
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {questionVisible && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <p>{question}</p>
          <button onClick={() => handleAnswer('Paris')}>Paris</button>
          <button onClick={() => handleAnswer('London')}>London</button>
        </div>
      )}
      <p>{time}</p>
    </div>
  );
};

export default Video;
