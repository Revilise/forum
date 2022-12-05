import React from "react";

export default function Avatar({
    id,
    width = 48,
    height = 48,
    filepath = "/uploads/default.jpg"
}) {
    return (
        <svg width={width} height={height} >
            <pattern id={`pattern-${id}`} width="100%" height="100%">
                <image xlinkHref={filepath} width={width} />
            </pattern>
            <circle r={width/2} cx="50%" cy="50%" fill={`url(#pattern-${id})`} />
        </svg>
    )
}