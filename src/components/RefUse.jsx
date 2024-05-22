// useRef hook

import { useRef } from "react";

function RefUse() {
  const inputRef = useRef();

  const handleclick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleclick}>Focus input</button>
    </div>
  );
}

export default RefUse;
