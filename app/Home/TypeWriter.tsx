import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software engineer",
          "Full Stack javascript engineer",
          "MERN Stack Developer",
          "A dreamer to be one of the best engineer in the world!",
          "And Why not making a radical contribution to wrold technologies"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;