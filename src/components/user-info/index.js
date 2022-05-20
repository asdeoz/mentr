import { Button, Checkbox, FormControlLabel, Grid, InputLabel, NativeSelect, TextField } from "@mui/material"
import Avvvatars from "avvvatars-react";
import { useState } from "react";

import ChipSelect from '../chip-select';
import { PREDICTIVE_INDEX_TYPES } from '../../constants';

// TODO: Skills should come from service
const skills = [
  { id: 1, value: 'ReactJS' },
  { id: 2, value: 'Angular' },
  { id: 3, value: 'C#' },
];


const UserInfo = ({ user }) => {
  const [isAvailableToMentor, setIsAvailableToMentor] = useState(false);
  // TODO: Skills should be part of the user
  const [selectedSkills, setSelectedSkills] = useState([{ id: 1, value: 'ReactJS' }]);
  const [newSkill, setNewSkill] = useState('');
  // TODO: Remove, new id should come back from backend
  let lastId = 3;

  const addNewSkill = () => {
    // TODO: Check the skill doesn't exist and save in the backend
    lastId++;
    skills.push({id: lastId, value: newSkill});
    setNewSkill('');
  };

  return (
    <>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Avvvatars style="shape" value={user.username} size={100} border shadow borderColor="#000000" />
          </Grid>
          <Grid item container xs={12} md={10} spacing={2}>
            <Grid item xs={12}>
              <TextField variant="outlined" id="first-name" name="firstName" label="First Name" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" id="last-name" name="lastName" label="Last Name" fullWidth />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <ChipSelect id="multi-skills" name="skills" label="Skills" fullWidth options={skills} optionsSelected={selectedSkills} setOptionsSelected={setSelectedSkills} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <TextField variant="outlined" id="new-skill" name="newSkill" label="New Skill" fullWidth onChange={(e) => setNewSkill(e.target.value)} />
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" id="add-skill" name="addSkill" onClick={addNewSkill} disabled={!newSkill} fullWidth>Add new skill</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControlLabel
              label="Are you available to mentor?"
              control={
                <Checkbox
                  id="is-available-to-mentor"
                  name="isAvailableToMentor"
                  checked={isAvailableToMentor}
                  onChange={() => setIsAvailableToMentor(!isAvailableToMentor)}
                />
              }
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              variant="outlined"
              type="number"
              id="mentor-slots"
              name="mentorSlots"
              label="Mentor Slots"
              fullWidth
              disabled={!isAvailableToMentor}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel htmlFor="profile-type">PI Profile Type</InputLabel>
            <NativeSelect
              variant="outlined"
              id="profile-type"
              name="profileType"
              fullWidth
            >
              <option value="" aria-label="None" />
              {PREDICTIVE_INDEX_TYPES.map(type => (
                <option value={type} key={type}>{type}</option>
              ))}
            </NativeSelect>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </form>
    </>
  );
};

export default UserInfo;
