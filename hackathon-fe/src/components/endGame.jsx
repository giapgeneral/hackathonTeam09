import React, {useEffect} from 'react';
import { Api } from "../utils/Api";

export const EndGame = ({board, score, onRestart}) => {
    var contents = '';
    if (board.hasWon()) {
        contents = 'Good Job!';
    } else if (board.hasLost()) {
        contents = 'Game Over';
    }
    if (!contents) {
        return null;
    }
    useEffect(async () => {
        const { statusCode, data } = await Api.postRequest("/api/histories", {
            score: score
        });
    }, []);

    return (
        <div className='overlay'>
            <p className='message'>{contents}</p>
            <button className="tryAgain" onClick={onRestart} onTouchEnd={onRestart}>Try again</button>
        </div>
    );
};