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
import * as uuid from 'uuid/v4';
import Toolbar from './Toolbar';
import BottomToolbar from './BottomToolbar';

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
  const initialTheme = defaultTheme === 'default' ? 'light' : 'dark';
  // State
  const [text, setText] = useState('');
  const [keyMap, setKeyMap] = useState(defaultKeymap);
  const [theme, setTheme] = useState(initialTheme);
  const [mode, setMode] = useState(defaultMode);
  const [options, setOptions] = useState({ ...defaultOptions });
  const [selectedTags, setSelectedTags] = useState([]);

  // Functions
  const handleTextChange = (e, d, value) => setText(value);

  const handleTagChange = (e, { value }) => setSelectedTags([...value]);

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

  const onSave = () => {
    if (text) {
      const time = new Date();
      const entry = {
        creationDate: time,
        text: text,
        tags: selectedTags,
        id: uuid()
      };
      console.log(entry);
    }
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
        onBeforeChange={handleTextChange}
        value={text}
        options={options}
      />
      <BottomToolbar
        theme={theme}
        handleTagChange={handleTagChange}
        onSave={onSave}
      />
    </div>
  );
}

export default Editor;
