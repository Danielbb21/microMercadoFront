import './input.css';

export const Input = (props) => {
  return (
    <>
      <input className="input" placeholder={props.text}
      style={{borderRadius: props.ok ? '30px' : ''}}
        type={props.type}
        onChange={props.onChange}
        value={props.value} />
    </>
  );
}