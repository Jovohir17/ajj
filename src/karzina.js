import React from 'react';

function Karzina
(props) {
  const { mahsulotlar, qoshish } = props;

  return (
    <div>
      <h2>Savatcha</h2>
      <ul>
        {mahsulotlar.map((mahsulot, index) => (
          <li key={index}>{mahsulot.nomi}</li>
        ))}
      </ul>
      <button onClick={qoshish}>mahsulot</button>
    </div>
  );
}

export default Karzina
;
