import { createUseStyles } from 'react-jss';

const textInputClasses = createUseStyles({
  textInput: {},
});

export type TextInputProps = {
  value: string;
  placeholder: string;
  changeFn: (text: string) => void;
};

const TextInput = (props: TextInputProps) => {
  const classes = textInputClasses();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.changeFn(event.target.value);
  };
  return (
    <input
      type="text"
      className={classes.textInput}
      {...props}
      onChange={handleChange}
    />
  );
};

export default TextInput;
