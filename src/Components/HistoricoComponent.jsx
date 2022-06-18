

export const HistoricoComponent = (props) => {
  // console.log('data', props.produtos);
  const qtdCompra = props.produtos.map(p => {
    return p.quantidade;
  })
  console.log('qtdCompra', qtdCompra);
  const somaQtd = qtdCompra.reduce(function (acumulador, valorAtual, index, array) {
    return acumulador + valorAtual;
  });
  console.log('soma', somaQtd);
  const entregaValor = props.produtos.map(pr => {
    let qt = pr.quantidade;
   let valor =  pr.produto.preco;
    return qt * valor;
  })
  const valorCompra = entregaValor.reduce(function (acumulador, valorAtual, index, array) {
    return acumulador + valorAtual;
  });

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: '3%' }}>
        {/* <div style={{display: 'flex', alignItems: 'center'}}>
            <img src={props.image} style={{ height: '100px' }} />
            <div style={{marginLeft: '25%', fontSize: '32px'}}>{props.produto}</div>
            <hr/>
          </div>
          
          */}
        <div style={{ fontSize: '32px' }}>{props.tempo.split('T')[0].split('-').reverse().join('/')}</div>
          <div style={{fontSize: '32px',}}>{somaQtd}</div> 
          <div style={{fontSize: '32px'}}>R$ {valorCompra.toFixed(2).toString().replace('.', ',')}</div>
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