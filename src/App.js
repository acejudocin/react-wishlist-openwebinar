import React from 'react';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';

const wishes = [
  { done: false, text: 'Travel to the moon' },
  { done: true, text: 'Make an intro course to React' },
  { done: true, text: 'Pay the gym' },
  { done: false, text: 'Go to the gym' },
];
const App = () => (
  <div className="app">
    <h1>My wishlist</h1>
    <WishInput />
    <WishList wishes={wishes} />
    <button type="button" className="wish-clear">
      Archive done
    </button>
  </div>
);

export default App;
