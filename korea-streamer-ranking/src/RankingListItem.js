import React from 'react';

function RankingListItem(props) {

    let streamLink = 'https://www.twitch.tv/' + encodeURIComponent(props.streamerName)
    let opggLink = 'https://www.op.gg/summoners/kr/' + encodeURIComponent(props.accountName)
    return (
        <div className="RankingListItem">
            <div className="RankingListItemText">{props.listIndex}</div>
            <div className="RankingListItemText"><a href={streamLink}>{props.streamerName}</a></div>
            <div className="RankingListItemText"><a href={opggLink}>{props.accountName}</a></div>
            <div className="RankingListItemText">{props.rankName}</div>
            <div className="RankingListItemText">{props.ladderRank}</div>
            <div className="RankingListItemText">{props.totalWins}</div>
            <div className="RankingListItemText">{props.totalLosses}</div>
        </div>
    );
}

export default RankingListItem;
