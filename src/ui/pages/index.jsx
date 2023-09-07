import { useState } from "react";
import MusicList from "../components/data.display/MusicList/MusicList";
import Timeline from "../components/inputs/Timeline/Timeline";

const musics = [
    {
        id: 1,
        name: "Music 1",
        artist: "Artist Alfa",
        time: 90,
    },
    {
        id: 2,
        name: "Music 2",
        artist: "Artist Bravo",
        time: 95,
    },
    {
        id: 3,
        name: "Music 3",
        artist: "Artist Charlie",
        time: 100,
    },
];

export default function Index() {
    const [width, setWidth] = useState(20);
    return (
        <div>
            <MusicList 
            musics={musics} 
            selectedMusic={musics[0]} 
            onSelect={() => {}}
            />

            <Timeline width={width} onChangeWidth={setWidth}/>
        </div>
    );
}