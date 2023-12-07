import React, { useState, useEffect } from "react";
import "./Elem.css";

export default function Elem(props) {
  const [style, setStyle] = useState({
    backgroundColor: props.ertek ? 'green' : 'yellow'
  });

  useEffect(() => {
    const newStyle = {
      backgroundColor: props.ertek ? 'green' : 'yellow'
    };
    setStyle(newStyle);
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
