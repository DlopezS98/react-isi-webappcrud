import React from 'react';
import './data-grid.css';
import { useDebouncedCallback } from 'use-debounce';

export interface GridRow {
  id: string | number;
  [key: string]: string | number | Date;
}

export interface DatagridColumn {
  header: string;
  field: string;
  type: 'text' | 'number' | 'date' | 'money';
  prefix?: React.ReactNode;
}

export interface DataGridProps<TRow extends GridRow> {
  rows: TRow[];
  columns: DatagridColumn[];
  toolbar?: React.ReactNode;
}

export default function DataGrid<TRow extends GridRow>(props: DataGridProps<TRow>) {
  const [filteredRows, setFilteredRows] = React.useState<TRow[]>(() => props.rows);

  const getColumnHeader = (column: DatagridColumn) => {
    return <th key={column.field}>{column.header}</th>;
  };

  const getCellValue = (row: TRow, column: DatagridColumn) => {
    const value = row[column.field];
    if (column.type === 'date') {
      return (value as Date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
    }
    return value;
  };

  const getCell = (row: TRow, column: DatagridColumn) => {
    return (
      <td key={column.field}>
        {column.prefix ? (
          <>
            {column.prefix} {String(getCellValue(row, column))}
          </>
        ) : (
          String(getCellValue(row, column))
        )}
      </td>
    );
  };

  const getRow = (row: TRow) => {
    return <tr key={row.id}>{props.columns.map((column) => getCell(row, column))}</tr>;
  };

  const onSearch = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;

    if (!search) {
      setFilteredRows(props.rows);
      return;
    }

    const lowerSearch = search.toLowerCase();
    const filtered = props.rows.filter((row) => {
      return props.columns.some((column) => {
        const value = String(row[column.field]).toLowerCase();
        return value.includes(lowerSearch);
      });
    });

    setFilteredRows(filtered);
  }, 600);

  return (
    <div className='isi-datagrid-container shadow-md'>
      <div className='isi-datagrid-toolbar'>
        <div className='isi-datagrid-search'>
          <input type='text' placeholder='Search...' onChange={onSearch} />
        </div>
        <div className='isi-datagrid-toolbar-items'>{props.toolbar}</div>
      </div>
      <table>
        <thead>
          <tr>{props.columns.map(getColumnHeader)}</tr>
        </thead>
        <tbody>{filteredRows.map(getRow)}</tbody>
      </table>
    </div>
  );
}
