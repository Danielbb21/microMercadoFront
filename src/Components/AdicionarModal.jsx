import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const AdicionarModal = (props) => {

  const handleSubmit = (e) => {
    console.log('aqwiii', name, desc, qtd, preco, link);
    e.preventDefault();
    setName('');
    setPreco();
    setQtd();
    setDesc('');
    setLink('');
    props.handleClose();

  }

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [qtd, setQtd] = useState();
  const [preco, setPreco] = useState();
  const [link, setLink] = useState('');

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ height: '550px' }}>

          <h2 style={{ margin: 0, textAlign: 'center' }}>Preencha o formulário para adicionar o produto </h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80%', justifyContent: 'space-evenly' }}>
            <input style={{ width: '60%', height: '50px', borderRadius: '15px', fontSize: '25px' }} type={'text'} placeholder={'Insira o nome do produto'} required value={name} onChange={(e) => setName(e.target.value)} />
            <input style={{ width: '60%', height: '50px', borderRadius: '15px', fontSize: '25px' }} type={'text'} placeholder={'Insira a descrição do produto'} required value={desc} onChange={(e) => setDesc(e.target.value)} />
            <input style={{ width: '60%', height: '50px', borderRadius: '15px', fontSize: '25px' }} type={'number'} min="1.00" step=".01" placeholder={'Insira o preço do produto'} required value={preco} onChange={(e) => setPreco(e.target.value)} />
            <input style={{ width: '60%', height: '50px', borderRadius: '15px', fontSize: '25px' }} type={'number'} min="1" step="1" placeholder={'Insira a quantidade do produto'} required value={qtd} onChange={(e) => setQtd(e.target.value)} />
            <input style={{ width: '60%', height: '50px', borderRadius: '15px', fontSize: '25px' }} type={'text'} placeholder={'Insira o link da imagem do produto'} required value={link} onChange={(e) => setLink(e.target.value)} />
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
              <button type={'button'} style={{ width: "35%", height: '50px', borderRadius: '30px', cursor: 'pointer', border: 'none', backgroundColor: '#ff2c2c', fontSize: '18px', fontWeight: 'bold' }} onClick={() => {
                props.handleClose();
                setName('');
                setPreco();
                setQtd();
                setDesc('');
                setLink('');

              }} >Cancelar</button>
              <button type={'form'} style={{ width: "35%", height: '50px', borderRadius: '30px', cursor: 'pointer', border: 'none', backgroundColor: '#08f26e', fontSize: '18px', fontWeight: 'bold' }}>Adicionar produto</button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  )
}


