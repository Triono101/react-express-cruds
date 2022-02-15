import { Link } from "react-router-dom";
import './index.scss';
import { Component } from 'react';
import axios from 'axios';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:3001/api/product`)
      .then(res => {
        this.setState({product: res.data});
        console.log(this.state.product);
      })
      .catch((error) => {
        console.log(error);
      });
    };

  render() {
    return (
      <div className="main">
        <div>
          <Link to="/" className="btn btn-primary">Kembali</Link>
        </div>
        <h1>Product detail</h1>
        <table className="table">
          <tbody>
            <th>ID</th>
            <th>Name</th>
            <th>Product ID</th>
            <th>Price</th>
            <th>Stock</th>
            {
              this.state.product.map((data, index) => {
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{data.name}</td>
                    <td>{data._id}</td>
                    <td>{new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR"
                    }).format(data.price)}</td>
                    <td>{data.stock}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <footer className="footer">
          <p>"Belum bisa menggunakan syntax cara menampilkan detail salah satu produk ..."</p>
        </footer>
      </div>
    )
  }
};

export default Detail;