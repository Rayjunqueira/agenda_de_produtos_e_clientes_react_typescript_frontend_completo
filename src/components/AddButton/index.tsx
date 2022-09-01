import * as C from './styles';

type AddButtonTypes = {
  children: string;
  type?: "button" | "submit" | "reset" | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const AddButton = ({children, onClick, type }: AddButtonTypes) => {
  return (
    <C.AddButton type={type} onClick={onClick}> {children} </C.AddButton>
  )
}

export default AddButton