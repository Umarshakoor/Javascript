import { useState } from "react";
import styles from "./StateUse.module.css";
function StateUse() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button className={styles.button} onClick={increment}>
        Increment
      </button>
      <button className={styles.button2} onClick={decrement}>
        decrement
      </button>
    </div>
  );
}
export default StateUse;
