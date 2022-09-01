import * as C from './styles';

type SearchbarType = {
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  }

const Searchbar = ({ placeholder, type, value, onChange }: SearchbarType) => {
  return (
    <C.Search 
      placeholder={placeholder} 
      type={type} 
      value={value}
      onChange={onChange}
    />
  )
}

export default Searchbar