import React from 'react';


const wishes = [
    { text: 'Travel to the moon', done: false },
    { text: 'Pay the gym', done: true },
    { text: 'Go to the gym', done: false },
];
let newWish = '';

const addWishToList = () => {
    wishes.add(newWish);
    this.newWish = '';
}

const App = () =>
    <div>
        <h1>My wishlist</h1>
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
        <button onClick="addWishToList()">Add wish</button>
    </div>

export default App;
