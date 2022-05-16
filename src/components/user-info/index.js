import { Checkbox, FormControlLabel, Grid, InputLabel, NativeSelect, TextField } from "@mui/material"
import Avvvatars from "avvvatars-react";
import { useState } from "react";

import { PREDICTIVE_INDEX_TYPES } from '../../constants';

const UserInfo = ({ user }) => {
  const [isAvailableToMentor, setIsAvailableToMentor] = useState(false);


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
            <InputLabel htmlFor="profile-type">PI Profile Type</InputLabel>
            <NativeSelect
              variant="outlined"
              id="profile-type"
              name="profileType"
              // label="PI Profile Type"
              // input={TextField}
              fullWidth
            >
              <option value="" aria-label="None" />
              {PREDICTIVE_INDEX_TYPES.map(type => (
                <option value={type}>{type}</option>
              ))}
            </NativeSelect>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
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
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
        
        
        {/*
        
        <TextField variant="outlined" id="first-name" name="firstName" label="First Name" fullWidth />
        <TextField variant="outlined" id="first-name" name="firstName" label="First Name" fullWidth />
        <TextField variant="outlined" id="first-name" name="firstName" label="First Name" fullWidth />
        <TextField variant="outlined" id="first-name" name="firstName" label="First Name" fullWidth />
            */}
      </form>
    </>
  );
};

export default UserInfo;
