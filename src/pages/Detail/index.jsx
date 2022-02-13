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
    axios.get('http://127.0.0.1:3001/api/product')
    .then(res => {
      this.setState({product: res.data});
      console.log(this.state.product);
    });
  }

  render() {
    return(
      <div className="main">
        <Link to="/" className="btn btn-primary">Kembali</Link>
        <div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.product.map((data, key) => {
                return(
                  <tr key={key}>
                    <td>{key+1}</td>
                    <td>{data.name}</td>
                    <td>{new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR"
                    }).format(data.price)}</td>
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


//   return (
//     <div className="main">
//       <Link to="/" className="btn btn-primary">Kembali</Link>

//       <table className="table">
//         <tbody>
//           <tr>
//             <td>ID</td>
//             <td>: asdasdasdasd</td>
//           </tr>
//           <tr>
//             <td>Name</td>
//             <td>: Laptop</td>
//           </tr>
//           <tr>
//             <td>Price</td>
//             <td>: Rp. 20.000.000</td>
//           </tr>
//           <tr>
//             <td>Stock</td>
//             <td>: 10</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }

export default Detail;