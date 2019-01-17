/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import { Menu, Dropdown } from 'semantic-ui-react';

const themeOptions = [
  {
    text: 'light',
    value: 'light'
  },
  {
    text: 'dark',
    value: 'dark'
  }
];
const keymapOptions = [
  {
    text: 'default',
    value: 'default'
  },
  {
    text: 'vim',
    value: 'vim'
  },
  {
    text: 'emacs',
    value: 'emacs'
  }
];
const modeOptions = [
  {
    text: 'default',
    value: 'markdown'
  },
  {
    text: 'javascript',
    value: 'javascript'
  },
  {
    text: 'css',
    value: 'css'
  },
  {
    text: 'html',
    value: 'htmlmixed'
  },
  {
    text: 'React',
    value: 'jsx'
  },
  {
    text: 'Vue',
    value: 'vue'
  }
];
const menuItemTitle = css({
  fontSize: 15,
  paddingBottom: 5
});
const vertical = css({
  display: 'flex',
  flexDirection: 'column'
});

const Toolbar = ({
  theme,
  keyMap,
  mode,
  handleThemeChange,
  handleKeymapChange,
  handleModeChange
}) => (
  <Menu inverted={theme === 'dark'} attached="top">
    <Menu.Item name="Theme" css={vertical}>
      <span css={menuItemTitle}>Theme</span>
      <Dropdown
        placeholder="Theme"
        selection
        options={themeOptions}
        value={theme}
        onChange={(e, r) => {
          handleThemeChange(r.value);
        }}
      />
    </Menu.Item>
    <Menu.Item css={vertical}>
      <span css={menuItemTitle}>Keymap</span>
      <Dropdown
        placeholder="Keymap"
        selection
        options={keymapOptions}
        value={keyMap}
        onChange={(e, r) => {
          handleKeymapChange(r.value);
        }}
      />
    </Menu.Item>
    <Menu.Item css={vertical}>
      <span css={menuItemTitle}>Mode</span>
      <Dropdown
        placeholder="Mode"
        selection
        options={modeOptions}
        value={mode}
        onChange={(e, r) => {
          handleModeChange(r.value);
        }}
      />
    </Menu.Item>
  </Menu>
);

export default Toolbar;
