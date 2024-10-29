import { useState } from "react";
import "./App.css";
import Drum from "./Drum";

const audioClips: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "W",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "E",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "A",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "S",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "D",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "Z",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "X",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "C",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    description: "Heater 1",
  },
];

function App() {

  const playAudio = (e:React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find(
      (clip) => clip.keyTrigger === e.key.toUpperCase()
    );

    if (!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);
    document.getElementById("drum-" + clip.keyTrigger)?.focus();
    document.getElementById("display")!.innerText=clip.description;
  };
    return (
      <div className="container" id="drume-machine" onKeyDown={playAudio}>
        <h1>FCC Drume Machine</h1>
        <div className="whole-drum">
          {audioClips.map((clip) => (
            <Drum audioClip={clip} key={clip.keyTrigger} />
          ))}
        </div>
        <div id="display"></div>
      </div>
    );
  };


export default App;
