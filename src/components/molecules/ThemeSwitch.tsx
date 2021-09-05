import Switch, { SwitchProps } from '@atoms/Switch';
import { switchTheme } from '@redux/feature/theme';
import { useAppDispatch } from '@redux/hooks';

const ThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const switchProps: SwitchProps = {
    onChangeFunction: () => dispatch(switchTheme()),
  };

  return <Switch {...switchProps} />;
};

export default ThemeSwitch;
