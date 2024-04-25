type inputTypeProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  type: any,
  style?: React.CSSProperties
};

export const Input = (props: inputTypeProps) => {
  return (
    <div>
      <input type={props.type} value={props.value} onChange={(e) => props.handleChange(e)} style={props.style} />
    </div>
  );
};
