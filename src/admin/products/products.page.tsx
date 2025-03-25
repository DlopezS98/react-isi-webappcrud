import Card, { CardBody, CardHeader } from "../../components/card";
import DataGrid from "../../components/data-grid";

export interface ProductsPageProps {}

const ProductsPage: React.FC<ProductsPageProps> = () => {
  return (
    <div className="container py-3">
      <Card>
        <CardHeader><h2>Product list</h2></CardHeader>
        <CardBody>
          <p>Products page content</p>
          <DataGrid />
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductsPage;
