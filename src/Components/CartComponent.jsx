

export const CartComponent = ( props ) => {
  console.log('props', props);
  const number = new Number(props.preco);
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly',  marginBottom: '3%'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img src={props.image} style={{ height: '100px' }} />
          <div style={{marginLeft: '25%', fontSize: '32px'}}>{props.titulo}</div>
          <hr/>
        </div>
        <div style={{fontSize: '32px'}}>{props.quantidade}</div>
        <div style={{fontSize: '32px'}}>{number.toFixed(2).toString().replace('.', ',')}</div>
      </div>
    </>
  )
}

{/* width: 15%;
  height: 100%;
  margin-left: 3%;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  background-color: #FDFD96;
  opacity: 0.8;
  transition: 0.3s; */}