// AUDIO FILES 
import AUDIO_ONE from "../../../assets/audios/Aval.mp3";
import AUDIO_TWO from "../../../assets/audios/Kannamma.mp3";
import AUDIO_THREE from "../../../assets/audios/Maya-Nadhi.mp3";
import AUDIO_FOUR from "../../../assets/audios/Ram.mp3";

// SONG THUMBNAILS
import THUMBNAIL_ONE from "../../../assets/images/songs-thumbnail/aval.jpg";
import THUMBNAIL_TWO from "../../../assets/images/songs-thumbnail/kannamma.jpg"; 
import THUMBNAIL_THREE from "../../../assets/images/songs-thumbnail/maya-nadhi.jpg"; 
import THUMBNAIL_FOUR from "../../../assets/images/songs-thumbnail/ram.jpg"; 

export const audioData = [ 
  {
    audio: new Audio(AUDIO_ONE),
    thumbnail: THUMBNAIL_ONE,
    title: "Aval",
    artist: "Pradeep Kumar"
  },
  {
    audio: new Audio(AUDIO_TWO),
    thumbnail: THUMBNAIL_TWO,
    title: "Kannamma",
    artist: "Pradeep Kumar"
  },
  {
    audio: new Audio(AUDIO_THREE),
    thumbnail: THUMBNAIL_THREE,
    title: "Maya Nadhi",
    artist: "Pradeep Kumar"
  },
  {
    audio: new Audio(AUDIO_FOUR),
    thumbnail: THUMBNAIL_FOUR,
    title: "Life Of Ram",
    artist: "Pradeep Kumar"
  },
];
