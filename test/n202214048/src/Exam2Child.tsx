import React from "react";

function Exam2Child(props: { id: string; name: string }) {
  return (
    <div className="exam2-child">
      <p>{props.id}</p>
      <p>{props.name}</p>
    </div>
  );
}

export default Exam2Child;
