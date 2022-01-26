import React from "react";

import { Add as AddIcon } from "@ClipMX/icons/ClipIcons";

const Card = (props) => (
  <div style={{ border: "1px solid red" }}>{props.children}</div>
);

export default {
  title: "Icons",
  component: Card,
};

export const ClipIconsStory = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      <AddIcon />
    </div>
  );
};

ClipIconsStory.storyName = "Clip Icons";
