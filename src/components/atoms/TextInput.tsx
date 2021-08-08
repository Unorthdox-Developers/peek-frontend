import { createUseStyles } from 'react-jss';

const textInputClasses = createUseStyles(
  {
    'text-input': {},
  },
  { name: 'atom' }
);

export type TextInputProps = {
  value: string;
  placeholder: string;
  onChangeFunction: (text: string) => void;
};

const TextInput = (props: TextInputProps) => {
  const styles = textInputClasses();
  const { onChangeFunction, ...restProps } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeFunction(event.target.value);
  };
  return (
    <input
      type="text"
      className={styles['text-input']}
      {...restProps}
      onChange={handleChange}
    />
  );
};

export default TextInput;
