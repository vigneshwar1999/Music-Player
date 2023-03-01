import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import { audioData } from "./utils/audioData";
import { AiOutlinePlayCircle, AiOutlinePause } from "react-icons/ai";

const MusicPlayer = () => {
  const [allSongs] = useState(audioData);

  const [currentMedia, setcurrentMedia] = useState({
    song: audioData[0],
    index: 0,
    currentTime: 0,
  });

  const [isPlaying, setisPlaying] = useState(false);

  const handleBackward = () => {
    currentMedia?.song?.audio.pause();
    setcurrentMedia((prev) => ({
      ...prev,
      index: currentMedia?.index > 0 ? currentMedia?.index - 1 : 3,
    }));
  };
  const handleForward = () => {
    currentMedia?.song?.audio.pause();
    setcurrentMedia((prev) => ({
      ...prev,
      index: currentMedia?.index < 3 ? currentMedia?.index + 1 : 0,
    }));
  };
  const handlePlay = (action) => {
    setisPlaying(action === "play");
  };
  const currentTimeInterval = () => {
    setcurrentMedia((prev) => ({
      ...prev,
      currentTime: currentMedia?.song?.audio?.currentTime,
    }));
  };
  const handleSeekChange = (event) => {
    let song = currentMedia?.song;
    song.audio.currentTime = event.target.value;
    setcurrentMedia((prev) => ({ ...prev, song: song }));
  };
  useEffect(() => {
    setcurrentMedia((prev) => ({
      ...prev,
      song: allSongs[currentMedia.index],
    }));
  }, [allSongs, currentMedia.index]);

  useEffect(() => {
    if (currentMedia?.song) {
      if (isPlaying) {
        currentMedia?.song?.audio.play();
        setInterval(currentTimeInterval, 1000);
      } else {
        currentMedia?.song?.audio.pause();
        clearInterval(currentTimeInterval);
      }
    }
  }, [currentMedia?.song, isPlaying]);

  return (
    <>
      <div className="music-player-section">
        <PlayerCard
          ImageSource={currentMedia?.song?.thumbnail}
          Title={currentMedia?.song?.title}
          Artist={currentMedia?.song?.artist}
          HandleBackWard={handleBackward}
          HandlePlay={handlePlay}
          HandleForward={handleForward}
          PlayIcon={
            isPlaying ? (
              <AiOutlinePause
                onClick={() => handlePlay("pause")}
                className="card-icon"
              />
            ) : (
              <AiOutlinePlayCircle
                onClick={() => handlePlay("play")}
                className="card-icon"
              />
            )
          }
          Duration={currentMedia?.song?.audio?.duration}
          CurrentPlayingTime={currentMedia?.currentTime}
          HandleSeekChange={(event) => handleSeekChange(event)}
        />
      </div>
    </>
  );
};

export default MusicPlayer;
