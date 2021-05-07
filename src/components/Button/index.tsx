import { ReactNode } from 'react';
import { ButtonStyled } from './styles';


export interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  width: string;
  disabled?: boolean;
  onClick?(): void;
  children?: ReactNode;
}

export const Button: React.SFC<ButtonProps> = ({
  type,
  width,
  onClick,
  ...ButtonProps
}) => (
    <ButtonStyled width={width} type={type} onClick={onClick}>
      {ButtonProps.children}
    </ButtonStyled>
  );


export default Button;
