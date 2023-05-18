import {useState} from "react";

import DiaryEntry from "./DiaryEntry";
import DiaryHistory from "./DiaryHistory";

const Home = () => {

    const [diaryHistories, setDiaryHistories] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState({});

    const addDiaryHistory = (entry) => {        
        setDiaryHistories((prevState) => [...prevState, {...entry, id:crypto.randomUUID()}]);
    }

    return (
        <div className="flex">
            <DiaryEntry data={selectedEntry} add={addDiaryHistory} />
            <DiaryHistory data={diaryHistories} setSelectedEntry={setSelectedEntry} />
        </div>
    );
}

export default Home;