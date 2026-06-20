import React from "react";
import { useSpeech } from "../hooks/useSpeech";

const AudioPlayer = ({ text, lang }) => {
  const { speak, pause, stop, isPlaying, isPaused } = useSpeech(text, lang);

  if (!text) return null;

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={speak}
        disabled={isPlaying && !isPaused}
        className={`p-2 rounded-full ${
          isPlaying && !isPaused
            ? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400"
            : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
        }`}
        title="Play"
      >
        <i className="fas fa-play"></i>
      </button>
      <button
        onClick={pause}
        disabled={!isPlaying}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-40"
        title={isPaused ? "Resume" : "Pause"}
      >
        <i className={`fas ${isPaused ? "fa-play" : "fa-pause"}`}></i>
      </button>
      <button
        onClick={stop}
        disabled={!isPlaying}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-40"
        title="Stop"
      >
        <i className="fas fa-stop"></i>
      </button>
    </div>
  );
};

export default AudioPlayer;
