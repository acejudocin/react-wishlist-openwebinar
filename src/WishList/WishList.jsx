import React from 'react';
import className from 'classnames';
import './WishList.css';
import WishItem from '../WishItem/WishItem'

const WishList = ({ wishes, onWishesChange }) => (
    <ul className="wish-list">
      {wishes.map(({ done, text }, i) => (
        <WishItem text={text} done={done} id={`wish${i}`} key={text} onDoneChange={(value) => {
          const updatedWishes = [...wishes];
          updatedWishes[i].done = value;
          onWishesChange(updatedWishes);
        }}/>
      ))}
    </ul>
);

export default WishList;