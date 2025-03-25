import './button.css';

export interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export default function Button(props: React.PropsWithChildren<ButtonProps>) {
  return (
    <button type="button" className={`isi-button ${props.variant}`} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
