import "./player.css";
import {
  AiOutlineStepBackward,
  AiOutlineStepForward,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";

const PlayerCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-image-section">
          <img
            className="card-image"
            src={props.ImageSource}
            alt="song-thumbnail"
          />
        </div>
        <div className="card-body-section">
          <div className="media-controls-section">
            <AiOutlineDislike className="card-icon" />
            <div className="card-song-detail-section">
              <p className="card-song-title">{props.Title}</p>
              <p className="card-song-artist">{props.Artist}</p>
            </div>
            <AiOutlineLike className="card-icon" />
          </div>
          <div className="card-range-section">
            <input
              type="range"
              name="song-progress"
              min="0"
              max={props.Duration}
              value={props.CurrentPlayingTime}
              onChange={(event) => props.HandleSeekChange(event)}
            />
          </div>
        </div>

        <div className="card-footer">
          <div className="card-footer-icon-section">
            <AiOutlineStepBackward
              className="card-icon"
              onClick={props.HandleBackWard}
            />
            {props.PlayIcon}
            <AiOutlineStepForward
              className="card-icon"
              onClick={props.HandleForward}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
