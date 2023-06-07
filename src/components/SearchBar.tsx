interface ISearchBarProps {
  value: string;
  onChange: (value: string) => void;
  sendSearch: () => void;
}

const SearchBar = ({ value, onChange, sendSearch }: ISearchBarProps) => (
  <div>
    <input value={value} onChange={(e) => onChange(e.target.value)} />
    <button onClick={sendSearch}>Search</button>
  </div>
);

export default SearchBar;