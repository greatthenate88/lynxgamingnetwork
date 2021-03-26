import React, { useRef, useState } from "react";



export default function AddHeaderButton() {
  const componetRef = useRef(null);
  const [contentValue, setContentValue] = useState([]);

  const addElement = () => {
    const content = 'asdf'
    const type = componetRef.current.dataset.type || "input";

    const elemnt = React.createElement(type, { key: Date.now() }, content);

    setContentValue([
      ...contentValue, // If you dont want to make it multiple times. just remove it
      elemnt
    ]);
  };
  return (
    <div className="create">
      <button onClick={addElement}>Click here</button>

      <div data-type="h1" ref={componetRef} className="created">
         {contentValue}
      </div>
    </div>
  );
}