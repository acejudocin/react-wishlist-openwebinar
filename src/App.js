import React from 'react';
import './App.css'


const wishes = [
    { text: 'Travel to the moon', done: false },
    { text: 'Pay the gym', done: true },
    { text: 'Go to the gym', done: false },
];

const App = () =>
    <div className="body">
        <h1 className="title">My wishlist</h1>
        <input placeholder="Enter your wish" />
        <ul>
            {wishes.map(({ text, done }, i) => (
                <li>
                    <label htmlFor={`wish${i}`}>
                        <input id={`wish${i}`} type="checkbox" checked={done} />
                        {text}
                    </label>
                </li>
            ))}
        </ul>
        <button>Add wish</button>
    </div>

export default App;
