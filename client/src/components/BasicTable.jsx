import { useMemo, useEffect, useState } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';
import './table.css';

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

const BasicTable = () => {
  const [products, setProducts] = useState([]);
  const columns = useMemo(() => COLUMNS, []);

  useEffect(() => {
    axios.get('http://localhost:5000/products').then((res) => {
      setProducts(res.data);
    });
  }, []);

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
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BasicTable;