import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import Loading from './Loading';

const InputBase = lazy(() => import('@material-ui/core/InputBase'));

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        color: theme.palette.text.primary,
      },
    }),
  { name: 'atom-button' }
);

export type TextInputProps = {
  value: string;
  placeholder: string;
  onChangeFunction: (text: string) => void;
  onEnterPressedFunction: () => void;
};

const TextInput = (props: TextInputProps) => {
  const classes = useStyles();
  const { onChangeFunction, onEnterPressedFunction, ...restProps } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFunction(event.target.value);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log('event', event);
    switch (event.key.toLowerCase()) {
      case 'enter':
        onEnterPressedFunction();
        break;
      default:
        break;
    }
  };
  return (
    <Suspense fallback={<Loading />}>
      <InputBase
        classes={{ root: classes.root }}
        type="text"
        {...restProps}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </Suspense>
  );
};

export default TextInput;
