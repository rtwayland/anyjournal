import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/keymap/vim.js';
import 'codemirror/keymap/emacs.js';
import 'codemirror/addon/display/placeholder.js';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/vue/vue';
import 'codemirror/theme/lesser-dark.css';
import Toolbar from './Toolbar';

const defaultOptions = {
  placeholder: 'Journal here...',
  autofocus: true,
  mode: 'markdown',
  theme: 'default',
  lineWrapping: true,
  keyMap: 'default',
  lineNumbers: true
};
function Editor() {
  const {
    theme: defaultTheme,
    keyMap: defaultKeymap,
    mode: defaultMode
  } = defaultOptions;
  const [entry, setEntry] = useState('Hi my name is `Raleigh Wayland`');
  const [keyMap, setKeyMap] = useState(defaultKeymap);
  const [theme, setTheme] = useState(
    defaultTheme === 'default' ? 'light' : 'dark'
  );
  const [mode, setMode] = useState(defaultMode);
  const [options, setOptions] = useState({ ...defaultOptions });

  const handleChange = (e, d, value) => setEntry(value);
  const handleThemeChange = theme => {
    setTheme(theme);
    const newOptions = {
      ...options,
      theme: theme === 'light' ? 'default' : 'lesser-dark'
    };
    setOptions(newOptions);
  };
  const handleKeymapChange = keyMap => {
    setKeyMap(keyMap);
    const keymapOptions = {
      keyMap
    };
    const newOptions = { ...options, ...keymapOptions };
    setOptions(newOptions);
  };
  const handleModeChange = mode => {
    setMode(mode);
    const newOptions = { ...options, mode };
    setOptions(newOptions);
  };
  return (
    <div>
      <Toolbar
        mode={mode}
        theme={theme}
        keyMap={keyMap}
        handleThemeChange={handleThemeChange}
        handleKeymapChange={handleKeymapChange}
        handleModeChange={handleModeChange}
      />
      <CodeMirror
        onBeforeChange={handleChange}
        value={entry}
        options={options}
      />
    </div>
  );
}

export default Editor;
