import { createUseStyles } from 'react-jss';

const textInputClasses = createUseStyles({
  textInput: {},
});

export type TextInputProps = {
  value: string;
  placeholder: string;
  dispatchOnChange: (text: string) => void;
};

const TextInput = (props: TextInputProps) => {
  const classes = textInputClasses();
  const { dispatchOnChange, ...restProps } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.dispatchOnChange(event.target.value);
  };
  return (
    <input
      type="text"
      className={classes.textInput}
      {...restProps}
      onChange={handleChange}
    />
  );
};

export default TextInput;
