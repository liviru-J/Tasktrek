import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#4cdafc" },
    CSS: { backgroundColor: "#4cdafc" },
    Javascript: { backgroundColor: "#4cdafc" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      className="tag"
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
