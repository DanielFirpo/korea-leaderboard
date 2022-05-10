import React, { useEffect, useState } from 'react';
import RankingListItem from './RankingListItem';

function RankingList() {

    const [streamerData, setStreamerData] = useState([]);

    const StreamerData = class {
        streamerName = "";
        accountName = "";
        rankName = "";
        ladderRank = "";
        totalWins = 0;
        totalLosses = 0;
        constructor(streamerName, accountName, rankName, ladderRank, totalWins, totalLosses) {
            this.streamerName = streamerName;
            this.accountName = accountName;
            this.rankName = rankName;
            this.ladderRank = ladderRank;
            this.totalWins = totalWins;
            this.totalLosses = totalLosses;
        }
    }

    useEffect(() => {
        // //to do: scrape account data from opgg for each streamer in STREAMERS
        // scrapeData(STREAMERS);

        // //for now some sample data:
        // let exampleData = [new StreamerData("LolTyler1", "loltyler1", "Gold", 1923898, 0, 200), new StreamerData("TF Blade", "TF Bladeee", "Challenger", 1, 200, 200)];
        // console.log("ecample data", exampleData)
        // let sortedExampleData = exampleData.sort((a, b) => { return a.ladderRank < b.ladderRank ? -1 : 1 });
        // console.log("ecample data sorted", sortedExampleData)
        // setStreamerData(sortedExampleData);

        getStreamerData();

    }, []);

    function getStreamerData() {
        fetch(process.env.REACT_APP_BACKEND_URL + `/streamerData`)
            .then(response => response.json())
            .then(data => {
                console.log("sucessfully got streamer data", data)
                let newStreamerDataArray = [];
                data.forEach(streamer => {
                    newStreamerDataArray.push(new StreamerData(streamer.streamerName, streamer.accountName, `${streamer.rankName} ${streamer.lp} LP`, streamer.ladderRank, streamer.totalWins, streamer.totalLosses))
                });
                setStreamerData(newStreamerDataArray);
            })
            .catch(error => {
                console.log("Error fetching streamer data.", error)
            })

        //get data again every minute
        setTimeout(() => { getStreamerData() }, 60000)
    }

    return (
        <div id="RankingList">
            <div id='RankingListHeader'><div></div><div>Streamer</div><div>League Account</div><div>Rank</div><div>Ladder Rank</div><div>Wins</div><div>Losses</div></div>
            <div id="StreamerTable">
                {
                    streamerData.sort((a, b) => { return a.ladderRank < b.ladderRank ? -1 : 1 }).map((streamer, index) => {
                        console.log("number ", index, "streamer with ladder rank", streamer.ladderRank)
                        return <RankingListItem listIndex={index + 1} streamerName={streamer.streamerName} accountName={streamer.accountName}
                            rankName={streamer.rankName} ladderRank={streamer.ladderRank} totalWins={streamer.totalWins} totalLosses={streamer.totalLosses}></RankingListItem>
                    })
                }
            </div>
        </div>
    );
}

export default RankingList;
