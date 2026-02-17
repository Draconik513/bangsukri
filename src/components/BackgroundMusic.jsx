import { useState, useRef } from "react";
import musicFile from "../assets/audio/The 1975 - About You Official.mp3";

const BackgroundMusic = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isMusicPlaying) {
      audio.play().catch(err => console.log("Audio play error:", err));
      setIsMusicPlaying(true);
    } else {
      audio.pause();
      setIsMusicPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={musicFile} type="audio/mpeg" />
      </audio>

      {/* Tombol kontrol */}
      <div className="fixed bottom-20 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg flex items-center border border-pink-200">
          <button
            onClick={toggleMusic}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-md hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
          >
            {isMusicPlaying ? "🔊" : "🔇"}
          </button>
          <span className="ml-2 text-sm text-pink-600 font-medium">
            {isMusicPlaying ? "Music ON" : "Music OFF"}
          </span>
        </div>
      </div>
    </>
  );
};

export default BackgroundMusic;
