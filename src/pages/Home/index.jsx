import { Link } from 'react-router-dom';
import './index.scss';
import { Component } from 'react';
import axios from 'axios';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3001/api/product')
    .then(res => {
      this.setState({product: res.data});
      console.log(this.state.product);
    });
  }

  render() {
    return(
      <div className="main">
        <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
        <div className="search">
          <input type="text" placeholder="Masukan kata kunci..."/>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.product.map((data, index) => {
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{data.name}</td>
                    <td>{new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR"
                    }).format(data.price)}</td>
                    <td className="text-center">
                      <Link to="/detail/" className="btn btn-sm btn-info">Detail</Link>
                      <Link to="/edit" className="btn btn-sm btn-warning">Edit</Link>
                      <Link to="#" className="btn btn-sm btn-danger">Delete</Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  };
};

export default Home;