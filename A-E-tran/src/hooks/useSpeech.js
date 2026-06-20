import { useState, useEffect, useRef } from "react";

export const useSpeech = (text, lang = "en") => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef(null);

  const speak = () => {
    if (!window.speechSynthesis) {
      alert("Text-to-speech not supported in this browser.");
      return;
    }
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utteranceRef.current = utterance;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };
    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };
    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const pause = () => {
    if (window.speechSynthesis && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => window.speechSynthesis.cancel();
  }, []);

  return { speak, pause, stop, isPlaying, isPaused };
};
