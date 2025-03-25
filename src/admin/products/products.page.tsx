import Button from '../../components/button';
import Card, { CardBody, CardHeader } from '../../components/card';
import DataGrid, { DatagridColumn } from '../../components/data-grid';
import AddIcon from '@mui/icons-material/Add';

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
  // Mock data - replace with actual data from API
  const rows = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      createdAt: new Date(),
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      createdAt: new Date(),
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      createdAt: new Date(),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <h2>Product list</h2>
      </CardHeader>
      <CardBody>
        <p>Products page content</p>
        <DataGrid
          toolbar={
            <Button onClick={console.log} variant='primary'>
              <AddIcon /> Add product
            </Button>
          }
          rows={rows}
          columns={columns}
        />
      </CardBody>
    </Card>
  );
};

export default ProductsPage;
