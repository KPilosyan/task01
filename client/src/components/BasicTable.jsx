import { useMemo, useState } from 'react';
import { useTable } from 'react-table';
// import axios from 'axios';
import './table.css';
import '../App'

const COLUMNS = [
  {
    Header: 'id',
    accessor: 'id',
  },
  {
    Header: 'name',
    accessor: 'name',
  },
  {
    Header: 'color',
    accessor: 'color',
  },
];

const RowDetails = () => {
  return (
    <tr id="details">
      Some Details
    </tr>
  )
}

const BasicTable = (props) => {
  // const [products, setProducts] = useState([]);
  const products = props.products
  const [showDetails, setShowDetails] = useState(false)
  const columns = useMemo(() => COLUMNS, []);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/products').then((res) => {
  //     setProducts(res.data);
  //   });
  // }, []);

  const handleShowDetails = (rowId) => {
    showDetails ? setShowDetails(false) : setShowDetails(true)
    console.log(rowId)
  }

  const tableInstance = useTable({
    columns: columns,
    data: products
  });

  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
  } = tableInstance;


  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {' '}
                {column.render('Header')}
                {' '}
              </th>
            ))}
            <th />
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <>
              <tr {...row.getRowProps()} onClick={() => handleShowDetails(row.id)}>
                {row.cells.map((cell) => <td {...cell.getCellProps()} >{cell.render('Cell')}  </td>)}

              </tr>
              {showDetails ? <RowDetails /> : null}
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default BasicTable;
