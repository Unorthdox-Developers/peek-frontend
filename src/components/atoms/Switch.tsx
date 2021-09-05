import { Switch as MaterialSwitch } from '@material-ui/core';

export type SwitchProps = {
  onChangeFunction: () => void;
};

const Switch = (props: SwitchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeFunction();
  };
  return <MaterialSwitch onChange={handleChange} />;
};

export default Switch;
