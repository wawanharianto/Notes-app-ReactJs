import React from 'react';
import { showFormattedDate } from '../utils/note';

function Card(props) {
  const item = props.item;

  return (
    <div className="konten" key={item.id}>
      <h4>{item.title}</h4>
      <p>{showFormattedDate(item.createdAt)}</p>
      <p className="konten-text">{item.body}</p>
      <div className="action">
        <a
          className="delete"
          onClick={() => {
            props.rmvCard(item.id);
          }}
        >
          Delete
        </a>
        <a
          className="pindah"
          onClick={() => {
            props.onSwitch(item.id);
          }}
        >
          Pindah
        </a>
      </div>
    </div>
  );
}

export default Card;
