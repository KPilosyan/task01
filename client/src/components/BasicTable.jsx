import { useState } from 'react';
import './table.css';
import '../App'


const RowDetails = () => {
  return (
    <p>
      Some Details
    </p>
  )
}

export const TableRow = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleRowClick = () => {
    showDetails ? setShowDetails(!showDetails) : setShowDetails(!showDetails)
  }

  return (
    <>
      <tr onClick={handleRowClick}>
        <td>{props.product.id}</td>
        <td>{props.product.name}</td>
        <td>{props.product.color}</td>
      </tr>
      <tr>
        {showDetails ? RowDetails() : null}
      </tr>
    </>

  )
}

const BasicTable = (props) => {
  const products = props.products

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Color</th>
          </tr>
        </thead>

        <tbody id="products">
          {
            products.map(product => <TableRow key={product.id} product={product} />)
          }
        </tbody>
      </table>

    </>

  )
};

export default BasicTable;
