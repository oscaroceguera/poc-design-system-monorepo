import React from "react";

import { BrokenLink } from "@ClipMX/illustrations/ClipIllustrations";

const Card = (props) => (
  <div style={{ border: "1px solid red", background: "red" }}>
    {props.children}
  </div>
);

export default {
  title: "Illustrations",
  component: Card,
};

export const ClipIllustrationsStory = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      <BrokenLink />
    </div>
  );
};

ClipIllustrationsStory.storyName = "Clip Illustrations";
