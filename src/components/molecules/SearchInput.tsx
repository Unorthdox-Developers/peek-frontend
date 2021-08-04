import Button, { ButtonProps } from '@atoms/Button';
import TextInput, { TextInputProps } from '@atoms/TextInput';

export type SearchInputProps = {
  value: string;
  placeholder: string;
  buttonText: string;
  changeFn: (text: string) => void;
};

const SearchInput = (props: SearchInputProps) => {
  const textInputProps: TextInputProps = {
    value: props.value,
    placeholder: props.placeholder,
    changeFn: props.changeFn,
  };
  const buttonProps: ButtonProps = { text: props.buttonText };
  return (
    <div>
      <TextInput {...textInputProps} />
      <Button {...buttonProps} />
    </div>
  );
};

export default SearchInput;
