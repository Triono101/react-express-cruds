import React, { useState } from 'react';
import './index.scss';
import axios from 'axios';
import Input from '../../components/Input';
import { Alert } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Tambah = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [status, setStatus] = useState('');

    const [validation, setValidation] = useState({});
    const history = useHistory();

    const submitProduct = (data) => {
      axios.post('http://localhost:3001/api/product/', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)})
        .then((res) => res.json)
          history.push('/')
        .catch((error) => {
        setValidation(error.response.data);
    });
    };

    return (
      <div className="main">
        <div className="card">
          <h2>Tambah Produk</h2>
          <br />
            {
              validation.errors &&
                <Alert variant="danger">
                    <ul class="mt-0 mb-0">
                        { validation.errors.map((error, index) => (
                            <li key={index}>{ `${error.param} : ${error.msg}` }</li>
                        )) }
                    </ul>
                </Alert>
            }
          <form onSubmit={ submitProduct }>
            <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" value={name} onChange={(e) => setName(e.target.value)}/>
            <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock" value={stock} onChange={(e) => setStock(e.target.value)}/>
            <Input name="status" type="checkbox" label="Active" value={status} onChange={(e) => setStatus(e.target.value)}/>
            <button type="submit" className="btn btn-primary">Simpan</button>
          </form>
        </div>
      </div>
    )
  }

export default Tambah;