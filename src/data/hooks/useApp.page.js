import { useState } from "react";

const musicList = [
    {
        id: 1,
        name: "Quero Subir",
        artist: "Diante do Trono",
        time: 357,
        url: 'musics/Quero_Subir.mp3',
    },
    {
        id: 2,
        name: "Show Me Your Glory",
        artist: "Jesus Culture",
        time: 601,
        url: 'musics/Show_Me_Your_Glory.mp3',
    },
];

export function useApp() {
    const [selectedMusic, setSelectedMusic] = useState();
    const [time, setTime] = useState(0);    

    function selectMusic(music) {
        setTime(0);
        setSelectedMusic(music);
    }

    return {
        selectedMusic,
        time,
        setTime,
        selectMusic,
        musicList
    };
}