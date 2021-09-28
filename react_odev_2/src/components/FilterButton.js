import React from "react";

export default function FilterButton( props ) {
    return (
        <button type="button"
                className="btn toggle-btn"
                onClick={() => props.setFilter(props.name)}
        >
          <span>{ props.name }</span>
        </button>
    );
}