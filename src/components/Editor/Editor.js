import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/keymap/vim.js";
import "codemirror/keymap/emacs.js";
import "codemirror/addon/display/placeholder.js";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/vue/vue";
import "codemirror/theme/lesser-dark.css";
import Toolbar from "./Toolbar";

const defaultEditorOptions = {
  placeholder: "Journal here...",
  autofocus: true,
  mode: "markdown",
  theme: "default",
  lineWrapping: true,
  keyMap: "default",
  lineNumbers: true
};
class Editor extends Component {
  state = {
    entry: "Hi my name is `Raleigh Wayland`",
    keyMap: "default",
    theme: "light",
    options: {
      ...defaultEditorOptions
    }
  };

  handleChange = (e, d, value) => this.setState({ entry: value });
  handleThemeChange = theme => {
    this.setState({ theme }, () => {
      const options = {
        ...this.state.options,
        theme: theme === "light" ? "default" : "lesser-dark"
      };
      this.setState({ options });
    });
  };
  handleKeymapChange = keyMap => {
    this.setState({ keyMap }, () => {
      const keymapOptions = {
        keyMap
      };
      const options = { ...this.state.options, ...keymapOptions };
      this.setState({ options });
    });
  };
  handleModeChange = mode => {
    this.setState({ mode }, () => {
      const options = { ...this.state.options, mode };
      this.setState({ options });
    });
  };
  render() {
    return (
      <div>
        <Toolbar
          mode={this.state.mode}
          theme={this.state.theme}
          handleThemeChange={this.handleThemeChange}
          handleKeymapChange={this.handleKeymapChange}
          handleModeChange={this.handleModeChange}
        />
        <CodeMirror
          onBeforeChange={this.handleChange}
          value={this.state.entry}
          options={this.state.options}
        />
      </div>
    );
  }
}

export default Editor;
