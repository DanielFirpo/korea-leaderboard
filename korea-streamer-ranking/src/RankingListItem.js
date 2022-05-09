import React from 'react';

function RankingListItem(props) {

    return (
        <div className="RankingListItem">
            <div className="RankingListItemText">{props.listIndex}</div>
            <div className="RankingListItemText">{props.streamerName}</div>
            <div className="RankingListItemText">{props.accountName}</div>
            <div className="RankingListItemText">{props.rankName}</div>
            <div className="RankingListItemText">{props.ladderRank}</div>
            <div className="RankingListItemText">{props.totalWins}</div>
            <div className="RankingListItemText">{props.totalLosses}</div>
        </div>
    );
}

export default RankingListItem;
