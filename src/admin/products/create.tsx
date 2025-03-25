import Card, { CardBody, CardHeader } from '../../components/card';

export default function CreateProductPage() {
  return (
    <Card>
      <CardHeader>
        <h2>Create new product</h2>
      </CardHeader>
      <CardBody>
        <form className='form'>
          <div className='form__group'>
            <label htmlFor='name'>Product name</label>
            <input type='text' id='name' placeholder='Product name' />
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
