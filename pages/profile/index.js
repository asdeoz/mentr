import { Container } from '@mui/material';
// import { useState } from 'react';
import UserInfo from '../../src/components/user-info';
// import ChipSelect from '../../src/components/chip-select';

const names = [
  { id: 1, value: 'John' },
  { id: 2, value: 'Peter' },
  { id: 3, value: 'Michael' },
];

const user = {
  name: 'Peter',
  username: 'peter@phoenix.edu',
};

const Profile = () => {
  // const [selectedOptions, setSelectedOptions] = useState([{ id: 2, value: 'Peter' }]);

  return (
    <Container maxWidth="xl">
      {/* <div>Profile</div>
      <ChipSelect id="multi-names" label="Names" options={names} optionsSelected={selectedOptions} setOptionsSelected={setSelectedOptions} />
      <div>{JSON.stringify(selectedOptions)}</div> */}
      <UserInfo user={user} />
    </Container>
  );
};

export default Profile;
