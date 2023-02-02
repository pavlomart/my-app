import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { addProduct } from '../store/features/productSlice';
import { useAppDispatch } from '../store/store';
import { v4 as uuidv4 } from 'uuid';
import { FileUploader } from "react-drag-drop-files";

interface Props {
    setIsPaneOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isPaneOpen: boolean,
}

const fileTypes = ["JPG", "PNG", "GIF", "jpeg"];

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddProductPane: FC<Props> = ({ setIsPaneOpen, isPaneOpen }) => {
    const dispatch = useAppDispatch();
    const [file, setFile] = useState<any>(null);
    const [item, setItem] = useState({
        id: '',
        title: '',
        price: 0,
        image: '',
    });

    const handleChange = (file: Blob) => {
        setFile(URL.createObjectURL(file));
    };

    console.log(file, "file");

    return (
        <div>
            <Modal
                open={isPaneOpen}
                onClose={() => setIsPaneOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <div className='flex flex-col justify-center gap-y-[25px]'>
                        <input onChange={(e) => setItem(prev => ({ ...prev, title: e.target.value }))} className='border p-[12px]' type="text" placeholder='Product title' />
                        <input onChange={(e) => setItem(prev => ({ ...prev, price: Number(e.target.value) }))} className='border p-[12px]' type="text" placeholder='Product price' />
                        <h3>Choose product image</h3>
                        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                        <div className="flex justify-center">
                            <img className='w-[250px] flex justify-center text-center h-[175px] object-fill]' 
                                src={file ? file :
                                "https://vena.com.ua/_nuxt/img/unknown.901a7a4.jpg"} 
                                alt="image" />

                        </div>
                        <button onClick={() => (setIsPaneOpen(false), dispatch(addProduct({ ...item, id: uuidv4(), image:file})))} className='bg-blue text-white px-[24px] rounded-[8px]'>+ Add</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default AddProductPane;