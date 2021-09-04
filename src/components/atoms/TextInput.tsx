import { InputBase } from '@material-ui/core';

export type TextInputProps = {
  value: string;
  placeholder: string;
  onChangeFunction: (text: string) => void;
};

const TextInput = (props: TextInputProps) => {
  const { onChangeFunction, ...restProps } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFunction(event.target.value);
  };
  return <InputBase type="text" {...restProps} onChange={handleChange} />;
};

export default TextInput;
