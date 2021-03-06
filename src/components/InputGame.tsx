import React from 'react';
import MainWithBox from './MainWithBox';
import InputSound from './InputSound';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

type Props = {
  score: number
}

export const Game = (props: Props) => {
  const { score } = props;
  return (
    <MainWithBox className='box-center'>
      <div>
        <h4 className='title write'>RIDDLE YOUR SONG</h4>
        <InputSound />
        <span className='Game-box'>
          <div className='Count-box'>
            <div className='counter'>{score}</div>
            <div className='text'>Number of wins</div>
          </div>
          <Link to={'/'}><Button className='Game-button'>FINISH GAME</Button></Link>
        </span>
      </div>
    </MainWithBox>
  );
};

export default Game;
