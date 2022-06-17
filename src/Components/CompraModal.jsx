import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useCompra } from '../Context/Compra';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CompraModal(props) {
  const [quantidade, setQuantidade] = useState(1);
  const { carrinhoData, setCarrinhoData } = useCompra();
  // console.log('props', props);

  const handleClick = () => {
    setCarrinhoData((previus) => {
      const antigo = [...previus, {
        id: props.id,
        titulo: props.titulo,
        image: props.image,
        preco: props.preco,
        quantidade: quantidade
      }];
      return antigo;

    });
    console.log('ok');
    props.handleClose();
  }
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={props.onOpen}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ height: '250px' }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <h3 id="modal-modal-title" style={{ marginBottom: "25px" }} variant="h6" component="h3" >
              Quanto deseja adicinar do produto?
            </h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div style={{ border: 0, cursor: 'pointer' }} onClick={() => {
              if (quantidade > 1) {
                setQuantidade((prev) => {

                  return prev - 1;
                })
              }

            }}>
              <img src={'https://cdn.discordapp.com/attachments/984865535923716127/987070123410063410/2.png'} style={{ width: '50px' }} />
            </div>
            <p>{quantidade}</p>
            <div style={{ border: 0, cursor: 'pointer' }} onClick={() => {
              setQuantidade((prev) => {
                return prev + 1;
              })
            }}>
              <img src={'https://cdn.discordapp.com/attachments/984865535923716127/987070123196158012/1.png'} style={{ width: '50px' }} />
            </div>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '3%', display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>

            <button style={{ width: "35%", height: '50px', borderRadius: '30px', cursor: 'pointer', border: 'none', backgroundColor: '#ff2c2c', fontSize: '18px', fontWeight: 'bold', marginTop: '10%' }} onClick={() => { props.handleClose(); }}>Cancelar</button>
            <button onClick={handleClick} style={{ width: "35%", height: '50px', borderRadius: '30px', cursor: 'pointer', border: 'none', backgroundColor: '#08f26e', fontSize: '18px', fontWeight: 'bold', marginTop: '10%' }}>Adicionar ao carrinho</button>
          </div>

        </Box>
      </Modal>
    </div>
  );

}