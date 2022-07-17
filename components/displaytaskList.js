import React from "react";

export default function DisplayTaskList(props) {
  const displayThis = props.task.map((item) => {
    return <ul>{item}</ul>;
  });
  return <div>{displayThis}</div>;
}
