import Button from '../../components/button';
import Card, { CardBody, CardHeader } from '../../components/card';
import DataGrid, { DatagridColumn } from '../../components/data-grid';
import AddIcon from '@mui/icons-material/Add';
import { Products } from './data';
import { useNavigate } from 'react-router';

export interface ProductsPageProps {}

const columns: DatagridColumn[] = [
  {
    header: 'Id',
    field: 'id',
    type: 'number',
  },
  {
    header: 'Name',
    field: 'name',
    type: 'text',
  },
  {
    header: 'Price',
    field: 'price',
    type: 'money',
    prefix: '$',
  },
  {
    header: 'Created at',
    field: 'createdAt',
    type: 'date',
  },
];

const ProductsPage: React.FC<ProductsPageProps> = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/admin/products/create');
  };

  return (
    <Card>
      <CardHeader>
        <h2>Product list</h2>
      </CardHeader>
      <CardBody>
        <p>Products page content</p>
        <DataGrid
          toolbar={
            <Button onClick={handleAddProduct} variant='primary'>
              <AddIcon /> Add product
            </Button>
          }
          rows={Products}
          columns={columns}
        />
      </CardBody>
    </Card>
  );
};

export default ProductsPage;
