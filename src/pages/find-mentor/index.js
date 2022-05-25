import { useState, useEffect } from 'react';
import { Button, Container, Grid, Typography } from "@mui/material";
import ChipSelect from "../../components/chip-select";
import FoundMentorCard from '../../components/found-mentor-card';

const FindMentor = () => {
  // TODO: Skills should come from service
  const skills = [
    { id: 1, value: 'ReactJS' },
    { id: 2, value: 'Angular' },
    { id: 3, value: 'C#' },
  ];

  // TODO: Mentors should come from a service
  const mentors = [
    {
      firstName: 'Peter',
      lastName: 'Griffin',
      email: 'peter@phoenix.edu',
      skillIds: [1,2],
      skills: [
        { ...skills[0], proficiency: 2 },
        { ...skills[1], proficiency: 4 },
      ],
    },
    {
      firstName: 'Bart',
      lastName: 'Simpson',
      email: 'bart@phoenix.edu',
      skillIds: [2,3],
      skills: [
        { ...skills[1], proficiency: 1 },
        { ...skills[2], proficiency: 5 },
      ],
    },
    {
      firstName: 'Michael',
      lastName: 'Jackson',
      email: 'mjackson@phoenix.edu',
      skillIds: [1,2,3],
      skills: [
        { ...skills[0], proficiency: 1 },
        { ...skills[1], proficiency: 5 },
        { ...skills[2], proficiency: 3 },
      ],
    },
  ];

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [foundMentors, setFoundMentors] = useState([]);

  useEffect(() => {
    setFoundMentors([]);
  }, [selectedSkills])

  const findMentors = () => {
    // TODO: Make a call with the skills to get mentors
    const selectedSkillIds = selectedSkills.map(skill => skill.id);
    const suitableMentors = mentors.filter(mentor => selectedSkillIds.every(skillId => mentor.skillIds.includes(skillId)));
    setFoundMentors(suitableMentors);
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h1">Find a Mentor</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={10}>
          <ChipSelect id="multi-skills" name="skills" label="What skills are you looking to be mentored in?" fullWidth options={skills} optionsSelected={selectedSkills} setOptionsSelected={setSelectedSkills} />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button variant="contained" fullWidth onClick={findMentors} disabled={!selectedSkills?.length}>Find a Mentr!</Button>
        </Grid>
        {!!foundMentors?.length && (
          <Grid item xs={12}>
            {foundMentors.map(mentor => (
              <FoundMentorCard key={mentor.email} mentor={mentor} />
            ))}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default FindMentor;
