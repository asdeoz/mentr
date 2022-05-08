import { Container } from '@mui/material';
import { useState } from 'react';
import ChipSelect from '../../src/components/chip-select';

const names = [
  { id: 1, value: 'John' },
  { id: 2, value: 'Peter' },
  { id: 3, value: 'Michael' },
];

const Profile = () => {
  const [selectedOptions, setSelectedOptions] = useState([{ id: 2, value: 'Peter' }]);

  return (
    <Container maxWidth="xl">
      <div>Profile</div>
      <ChipSelect id="multi-names" label="Names" options={names} optionsSelected={selectedOptions} setOptionsSelected={setSelectedOptions} />
      <div>{JSON.stringify(selectedOptions)}</div>
    </Container>
  );
};

export default Profile;
