export type LabelProps = {
  text: string;
};

const Label = (props: LabelProps) => {
  return <label>{props.text}</label>;
};

export default Label;
