import React from "react";
const Icon = ({
  name,
  classDiv,
  styleDiv,
  height,
  width,
  color = "#fff",
  onClick = () => {}
}) => (
  <div
    className={classDiv}
    onClick={onClick}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...styleDiv
    }}
  >
    {name === "icon-delete-todo" && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={color}
        viewBox="0 0 64 64"
      >
        <path d="M41.907 32L63.61 10.297a1.334 1.334 0 0 0 0-1.886L55.592.39a1.336 1.336 0 0 0-1.887 0L32.001 22.095 10.297.39c-.5-.5-1.386-.5-1.886 0L.392 8.41a1.334 1.334 0 0 0 0 1.886L22.095 32 .392 53.703a1.334 1.334 0 0 0 0 1.887l8.019 8.02a1.335 1.335 0 0 0 1.886 0l21.704-21.705L53.705 63.61a1.335 1.335 0 0 0 1.887 0l8.018-8.019a1.334 1.334 0 0 0 0-1.887z" />
      </svg>
    )}
    {name === "icon-update-title" && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={color}
        viewBox="0 0 64 64"
      >
        <path d="M0 50.489V64h13.511l39.111-39.467-13.51-13.51zm62.933-36.267c1.423-1.422 1.423-3.555 0-4.977l-8.177-8.178c-1.423-1.423-3.556-1.423-4.978 0l-6.4 6.4 13.51 13.51z" />
      </svg>
    )}
  </div>
);

export default Icon;
