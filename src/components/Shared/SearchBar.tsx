import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';

type SearchBarProps = {
  placeholder?: string;
};

const SearchBar = ({ placeholder = '' }: SearchBarProps) => {
  return (
    <TextInput placeholder={`Search ${placeholder}`} icon={<IconSearch />} />
  );
};

export default SearchBar;
