import React, {useState} from "react";
import SubRedditCard from "./SubRedditCard";
import styles from './style/SubRedditList.module.css';

const SubRedditList = ({changeSubReddit}) => {
    const [activeSubreddit, setActiveSubreddit] = useState(null);
    const listOfSubReddit = [
        'Home',
        'AskReddit',
        'NoStupidQuestions',
        'BaldursGate3',
        'facepalm',
        'interestingasfuck',
        'Damnthatsinteresting',
        'LivestreamFail',
        'pics',
        'Palworld',
        'AmItheAsshole',
        'mildlyinfuriating',
        'Piracy',
        'PeterExplainsTheJoke',
        'funny',
        'movies',
        'Helldivers',
        'gaming',
        'worldnews',
        'leagueoflegends',
        'pcmasterrace',
        'Unexpected',
        'news',
        'politics',
    ];
    return (
        <div className={styles.subredditList}>
            <div className={styles.subRedditHeader}>
                Subreddit
            </div>
            {listOfSubReddit.map((name, index) => (
                <div
                    key={index}
                    className={`${styles.subredditItem} ${activeSubreddit === name ? styles.active : ''}`}
                    onClick={() => setActiveSubreddit(name)}
                >
                    
                    <SubRedditCard name={name} isActive={activeSubreddit === name} changeSubReddit={changeSubReddit}/>
                </div>
            ))}
        </div>
    );
}

export default SubRedditList;