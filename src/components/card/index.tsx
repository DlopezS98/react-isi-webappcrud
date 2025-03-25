import './card.css';

export interface CardProps {
  className?: string;
}

const Card: React.FC<React.PropsWithChildren<CardProps>> = (props) => {
  return <div className={`isi-card shadow-md ${props.className}`}>{props.children}</div>;
};
export default Card;

export interface CardHeaderProps {}

export const CardHeader: React.FC<React.PropsWithChildren<CardHeaderProps>> = (props) => {
  return <div className='isi-card__header'>{props.children}</div>;
};

export interface CardBodyProps {}

export const CardBody: React.FC<React.PropsWithChildren<CardBodyProps>> = (props) => {
  return <div className='isi-card__body'>{props.children}</div>;
};

