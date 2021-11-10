import { useState } from 'react';
import './table.css';
import '../App'


const RowDetails = (rowId) => {
  return (
    <td colSpan="3">
      Some Details of row {rowId}
    </td>
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
        {showDetails ? RowDetails(props.product.id) : null}
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
