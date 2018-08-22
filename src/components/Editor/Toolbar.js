import React from "react";
import { Menu, Dropdown, Radio } from "semantic-ui-react";

const themeOptions = [
  {
    text: "light",
    value: "light"
  },
  {
    text: "dark",
    value: "dark"
  }
];
const keymapOptions = [
  {
    text: "default",
    value: "default"
  },
  {
    text: "vim",
    value: "vim"
  },
  {
    text: "emacs",
    value: "emacs"
  }
];
const modeOptions = [
  {
    text: "default",
    value: "markdown"
  },
  {
    text: "javascript",
    value: "javascript"
  },
  {
    text: "css",
    value: "css"
  },
  {
    text: "html",
    value: "htmlmixed"
  },
  {
    text: "React",
    value: "jsx"
  },
  {
    text: "Vue",
    value: "vue"
  }
];
const Toolbar = props => (
  <Menu>
    <Menu.Item>
      <Dropdown
        placeholder="Theme"
        selection
        options={themeOptions}
        onChange={(e, r) => {
          props.handleThemeChange(r.value);
        }}
      />
    </Menu.Item>
    <Menu.Item>
      <Dropdown
        placeholder="Keymap"
        selection
        options={keymapOptions}
        onChange={(e, r) => {
          props.handleKeymapChange(r.value);
        }}
      />
    </Menu.Item>
    <Menu.Item>
      <Dropdown
        placeholder="Mode"
        selection
        options={modeOptions}
        onChange={(e, r) => {
          props.handleModeChange(r.value);
        }}
      />
    </Menu.Item>
  </Menu>
);

export default Toolbar;
