import { Button, Checkbox, FormControlLabel, Grid, InputLabel, NativeSelect, TextField } from "@mui/material"
import Avvvatars from "avvvatars-react";
import { useState } from "react";

import { useContextState } from '../../context';
import ChipSelect from '../chip-select';
import { PREDICTIVE_INDEX_TYPES } from '../../constants';

const UserInfo = ({ user, skills }) => {
  function getSelectedSkills(userSkills, allSkills) {
    return allSkills.filter(skill => !!userSkills.find(userSkill => skill.id === userSkill.skillId));
  }
  const { dispatches: { saveUser }} = useContextState();
  const [isAvailableToMentor, setIsAvailableToMentor] = useState(user.isAvailableToMentor);
  // const [selectedSkills, setSelectedSkills] = useState(getSelectedSkills(user.skills.items, skills));
  const [selectedSkills, setSelectedSkills] = useState(user.skills.items);
  // const [newSkill, setNewSkill] = useState('');
  // // TODO: Remove, new id should come back from backend
  // let lastId = 3;

  const [profile, setProfile] = useState(user);

  // const addNewSkill = () => {
  //   // TODO: Check the skill doesn't exist and save in the backend
  //   lastId++;
  //   skills.push({id: lastId, value: newSkill});
  //   setNewSkill('');
  // };

  const save = (event) => {
    event.preventDefault();

    const newProfile = {
      ...profile,
      skills: {
        ...profile.skills,
        items: selectedSkills,
      },
      isAvailableToMentor,
    };

    saveUser(newProfile);
  };

  const handleValueChange = (event) => {
    const { name, value } = event.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={save}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Avvvatars style="shape" value={profile.email} size={100} border shadow borderColor="#000000" />
          </Grid>
          <Grid item container xs={12} md={10} spacing={2}>
            <Grid item xs={12}>
              <TextField variant="outlined" id="first-name" name="firstName" label="First Name" fullWidth value={profile.firstName} onChange={handleValueChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" id="last-name" name="lastName" label="Last Name" fullWidth value={profile.lastName} onChange={handleValueChange} />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <ChipSelect id="multi-skills" name="skills" label="Skills" fullWidth options={skills} idLabel="skillId" valueLabel="title" optionsSelected={selectedSkills} setOptionsSelected={setSelectedSkills} />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Grid container spacing={1}>
              <Grid item xs={8}>
                <TextField variant="outlined" id="new-skill" name="newSkill" label="New Skill" fullWidth onChange={(e) => setNewSkill(e.target.value)} />
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" id="add-skill" name="addSkill" size="large" onClick={addNewSkill} disabled={!newSkill} fullWidth>Add skill</Button>
              </Grid>
            </Grid> */}
            <TextField variant="outlined" id="email" name="email" label="Email Address" fullWidth disabled value={profile.email} />
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
              id="number-of-mentees-can-coach"
              name="numberOfMenteesCanCoach"
              label="Mentee Slots"
              fullWidth
              disabled={!isAvailableToMentor}
              value={profile.numberOfMenteesCanCoach}
              onChange={handleValueChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel htmlFor="profile-type">PI Profile Type</InputLabel>
            <NativeSelect
              variant="outlined"
              id="pi-profile-type"
              name="piProfileType"
              value={profile.piProfileType}
              fullWidth
              onChange={handleValueChange}
            >
              <option value="" aria-label="None" />
              {PREDICTIVE_INDEX_TYPES.map(type => (
                <option value={type} key={type}>{type}</option>
              ))}
            </NativeSelect>
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end">
            <Button variant="contained" type="submit" size="large" sx={{ minWidth: 150 }}>Save</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default UserInfo;
