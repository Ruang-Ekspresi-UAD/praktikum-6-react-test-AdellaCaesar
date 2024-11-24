import React, { useState } from 'react';
import Display from './display'; // Pastikan Display diimpor

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      {/* Gunakan komponen Display untuk menampilkan nilai count */}
      <Display count={count} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;