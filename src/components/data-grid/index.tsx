import './data-grid.css';

export interface DataGridProps {}

const DataGrid: React.FC<DataGridProps> = (props) => {
  return (
    <div className='isi-datagrid-container shadow-md'>
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
          </tr>
          <tr>
            <td>Row 3, Cell 1</td>
            <td>Row 3, Cell 2</td>
            <td>Row 3, Cell 3</td>
          </tr>
          <tr>
            <td>Row 4, Cell 1</td>
            <td>Row 4, Cell 2</td>
            <td>Row 4, Cell 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
