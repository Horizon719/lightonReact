import React, { useState, useEffect } from "react";
import "./Elem.css";

export default function Elem(props) {
  const [style, setStyle] = useState({
    backgroundColor: props.ertek ? 'green' : 'yellow',
    transition: 'background-color 0.5s ease-in-out'
  });

  useEffect(() => {
    setStyle(prevStyle => ({
      ...prevStyle,
      backgroundColor: props.ertek ? 'green' : 'yellow',
      transition: 'background-color 0.5s ease-in-out'
    }));
  }, [props.ertek]);

  function katt() {
    props.katt(props.index);
  }

  return (
    <div className="elem" style={style} onClick={katt}>
      {props.ertek}
    </div>
  );
}
