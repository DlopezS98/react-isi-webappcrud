import Card, { CardBody, CardHeader } from "../../components/card";

export interface ProductsPageProps {}

const ProductsPage: React.FC<ProductsPageProps> = () => {
  return (
    <div className="container py-3">
      <Card>
        <CardHeader><h2>Products Page</h2></CardHeader>
        <CardBody>
          <p>Products page content</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductsPage;
