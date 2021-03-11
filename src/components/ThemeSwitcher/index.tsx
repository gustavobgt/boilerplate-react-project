import React, { useState } from 'react';

import { Container, SwitchButton,Label } from './styles';

import { useDispatch } from 'react-redux';
import { changeToDark, changeToLight } from '../../store/Theme/Theme.actions';

const ThemeSwitcher: React.FC = () => {
  const [isChecked, setIsChecked] = useState(true);

  const dispatch = useDispatch();

  const handleThemeChange = (event:boolean) => {
    setIsChecked(!isChecked);
    event ? dispatch(changeToDark()) : dispatch(changeToLight());
  };

  return (
    <Container>
      <Label>Light</Label>
        <SwitchButton checked={isChecked} uncheckedIcon={false} checkedIcon={false} onChange={handleThemeChange}/>
      <Label>Dark</Label>
    </Container>
 )
};

export default ThemeSwitcher;
