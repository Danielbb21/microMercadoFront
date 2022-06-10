

export const CartComponent = ({ props }) => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <div>
          <img src={props.image} style={{ height: '100px', width: '100px' }} />
          <p>{props.produto}</p>

        </div>
        <p>{props.quantidade}</p>
      </div>
    </>
  )
}