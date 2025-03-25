import React from 'react';
import './data-grid.css';

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
}

export default function DataGrid<TRow extends GridRow>(props: DataGridProps<TRow>) {
  const getColumnHeader = (column: DatagridColumn) => {
    return <th key={column.field}>{column.header}</th>;
  };

  const getCellValue = (row: TRow, column: DatagridColumn) => {
    const value = row[column.field];
    if (column.type === 'date') {
      return (value as Date).toLocaleDateString('en-US', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
    }
    return value;
  };

  const getCell = (row: TRow, column: DatagridColumn) => {
    return <td key={column.field}>{
      column.prefix
        ? <>{column.prefix} {String(getCellValue(row, column))}</>
        : String(getCellValue(row, column))
    }</td>;
  };

  const getRow = (row: TRow) => {
    return (
      <tr key={row.id}>
        {props.columns.map(column => getCell(row, column))}
      </tr>
    );
  };

  return (
    <div className='isi-datagrid-container shadow-md'>
      <table>
        <thead>
          <tr>
            {props.columns.map(getColumnHeader)}
          </tr>
        </thead>
        <tbody>
          {props.rows.map(getRow)}
        </tbody>
      </table>
    </div>
  );
};

