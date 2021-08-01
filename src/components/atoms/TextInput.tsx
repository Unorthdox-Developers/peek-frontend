import { createUseStyles } from 'react-jss';

const textInputClasses = createUseStyles({
  textInput: {},
});

export interface ITextInputProps {
  value: string;
  placeholder: string;
}

export class TextInputProps implements ITextInputProps {
  value: string = '';
  placeholder: string = '';

  constructor(value: string, placeholder: string) {
    this.value = value;
    this.placeholder = placeholder;
  }
}

const TextInput = (props: ITextInputProps) => {
  const classes = textInputClasses();
  return <input type="text" className={classes.textInput} {...props} />;
};

export default TextInput;
