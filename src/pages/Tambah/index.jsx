import React, { Component } from 'react';
import axios from 'axios';
import './index.scss';
import Input from '../../components/Input';

class Tambah extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      price: '',
      stock: '',
      status: ''
    }
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value })
  };

  onChangePrice = (e) => {
    this.setState({ price: e.target.value })
  };

  onChangeStock = (e) => {
    this.setState({ stock: e.target.value })
  };

  onChangeStatus = (e) => {
    this.setState({ status: e.target.value })
  }

onSubmit(e) {
  e.preventDefault()

  const productObject = {
    name: this.state.name,
    price: this.state.price,
    stock: this.state.stock,
    status: this.state.status
  };
  axios.post('http://127.0.0.1:3001/product', productObject)
    .then(res => console.log(res.data));
  this.setState({ name: '', price: '', stock: '', status: '' })
}

  render() {
    return (
      <div className="main">
        <div className="card">
          <h2>Tambah Produk</h2>
          <br />
          <form onSubmit={this.onSubmit} method="POST">

            <Input name="name" label="Nama" type="text" value={this.state.name} onChange={this.onChangeName} placeholder="Nama Produk..."/>

            <Input name="price" label="Harga" type="number" value={this.state.price} onChange={this.onChangePrice} placeholder="Harga Produk..."/>

            <Input name="stock" label="Stock" type="number" value={this.state.stock} onChange={this.onChangeStock} placeholder="Stock Produk..."/>

            <Input name="status" type="checkbox" label="Active" value={this.state.status} onChange={this.onChangeStatus}/>

            <button type="submit" id="buttonID" className="btn btn-primary">Simpan</button>

          </form>
        </div>
      </div>
    )
  };
};

export default Tambah;