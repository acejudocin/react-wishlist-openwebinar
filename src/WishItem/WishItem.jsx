import React from 'react'
import className from 'classnames';

const WishItem = ({done, text, id, onDoneChange}) => {

  return (
    <li
      key={text}
      className={className('wish-list__item', {
        'wish-list__item--done': done,
      })}
    >
      <input id={id}
        type="checkbox"
        checked={done}
        onChange={e => { onDoneChange(e.target.checked) }}
      />
      <label htmlFor={id}>{text}</label>
    </li>
  )
}

export default WishItem;