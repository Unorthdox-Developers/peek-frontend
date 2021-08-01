import Button, { ButtonProps } from '@atoms/Button';
import TextInput, { TextInputProps } from '@atoms/TextInput';

export interface ISearchInputProps {
  value: string;
  placeholder: string;
  buttonText: string;
}

export class SearchInputProps implements ISearchInputProps {
  value: string = '';
  placeholder: string = 'Search';
  buttonText: string = 'Search';

  constructor(value: string, placeholder: string, buttonText: string) {
    this.value = value;
    this.placeholder = placeholder;
    this.buttonText = buttonText;
  }
}

const SearchInput = (props: ISearchInputProps) => {
  const textInputProps = new TextInputProps(props.value, props.placeholder);
  const buttonProps = new ButtonProps(props.buttonText);
  return (
    <div>
      <TextInput {...textInputProps} />
      <Button {...buttonProps} />
    </div>
  );
};

export default SearchInput;
