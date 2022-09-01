import * as C from './styles';

type RemoveButtonTypes = {
  children: string;
  type?: "button" | "submit" | "reset" | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const RemoveButton = ({children, onClick, type }: RemoveButtonTypes) => {
  return (
    <C.AddButton type={type} onClick={onClick}> {children} </C.AddButton>
  )
}

export default RemoveButton;