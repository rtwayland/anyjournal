/**@jsx jsx */
import { useState } from 'react';
import { jsx, css } from '@emotion/core';
import { Menu, Dropdown, Button } from 'semantic-ui-react';
import { pastTags } from '../../common/variables';

const menuItemTitle = css({
  fontSize: 15,
  paddingBottom: 5
});
const vertical = css({
  display: 'flex',
  flexDirection: 'column'
});

const BottomToolbar = ({ theme, handleTagChange, onSave }) => {
  const [options, setOptions] = useState([...pastTags]);
  const handleAddition = (e, { value }) => {
    setOptions([{ text: value, value }, ...options]);
  };
  return (
    <Menu inverted={theme === 'dark'} attached="bottom">
      <Menu.Item css={vertical}>
        <span css={menuItemTitle}>Tags</span>
        <Dropdown
          placeholder="Tags"
          multiple
          search
          selection
          allowAdditions
          options={options}
          onAddItem={handleAddition}
          onChange={handleTagChange}
        />
      </Menu.Item>
      <Menu.Item css={vertical}>
        <Button onClick={onSave}>Save</Button>
      </Menu.Item>
    </Menu>
  );
};

export default BottomToolbar;
