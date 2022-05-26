import { useState, useEffect } from 'react';
import { Button, Container, Grid, Typography } from "@mui/material";
import { API, graphqlOperation } from '../../graphql/client';
import { listSkills } from '../../graphql/queries';
import ChipSelect from "../../components/chip-select";
import FoundMentorCard from '../../components/found-mentor-card';

const FindMentor = ({ skills }) => {

  // TODO: Mentors should come from a service
  const mentors = [
    {
      firstName: 'Peter',
      lastName: 'Griffin',
      email: 'peter@phoenix.edu',
      skills: [
        { ...skills[0], proficiency: 2 },
        { ...skills[1], proficiency: 4 },
        { ...skills[5], proficiency: 2 },
        { ...skills[6], proficiency: 4 },
        { ...skills[10], proficiency: 2 },
        { ...skills[14], proficiency: 4 },
      ],
    },
    {
      firstName: 'Bart',
      lastName: 'Simpson',
      email: 'bart@phoenix.edu',
      skills: [
        { ...skills[1], proficiency: 1 },
        { ...skills[2], proficiency: 5 },
        { ...skills[7], proficiency: 1 },
        { ...skills[8], proficiency: 5 },
        { ...skills[17], proficiency: 1 },
        { ...skills[22], proficiency: 5 },
        { ...skills[23], proficiency: 1 },
        { ...skills[24], proficiency: 5 },
        { ...skills[25], proficiency: 1 },
        { ...skills[26], proficiency: 5 },
        { ...skills[30], proficiency: 1 },
        { ...skills[31], proficiency: 5 },
      ],
    },
    {
      firstName: 'Michael',
      lastName: 'Jackson',
      email: 'mjackson@phoenix.edu',
      skills: [
        { ...skills[0], proficiency: 1 },
        { ...skills[1], proficiency: 5 },
        { ...skills[10], proficiency: 3 },
        { ...skills[12], proficiency: 1 },
        { ...skills[14], proficiency: 5 },
        { ...skills[25], proficiency: 3 },
      ],
    },
  ].map(mentor => ({
    ...mentor,
    skillIds: mentor.skills.map(mentorSkill => mentorSkill.id),
  }));

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
          <ChipSelect id="multi-skills" name="skills" label="What skills are you looking to be mentored in?" fullWidth valueLabel="title" options={skills} optionsSelected={selectedSkills} setOptionsSelected={setSelectedSkills} />
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

export const getServerSideProps = async () => {
  try {
    const response = await API.graphql(graphqlOperation(listSkills));

    return {
      props: {
        skills: response?.data?.listSkills?.items,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return { props: {} };
}

export default FindMentor;
