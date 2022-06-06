import './input.css';

export const Input = (props) => {
  return (
    <>
      <input className="input" placeholder={props.text}
        type={props.type}
        onChange={props.onChange}
        value={props.value} />
    </>
  );
}