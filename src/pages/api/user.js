import { API, graphqlOperation } from '../../graphql/client';
import { updateUser, createUserSkill, deleteUserSkill } from '../../graphql/mutations';

async function saveUser(user) {
  try {
    // const skillPromises = user.skills.items.map(skill => (
    //   API.graphql(graphqlOperation(deleteUserSkill, { input: {
    //     id: skill.id,
    //   } }))
    // ));

    // const skillRes = await Promise.all(skillPromises);
    // console.log(skillRes);

    // const skillPromises = user.skills.items.map(skill => (
    //   API.graphql(graphqlOperation(createUserSkill, { input: {
    //     userId: user.id,
    //     skillId: skill.id,
    //     proficiency: 5,
    //   } }))
    // ));

    // const skillRes = await Promise.all(skillPromises);
    // console.log(skillRes);

    const userRes = await API.graphql(graphqlOperation(updateUser, { input: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAvailableToMentor: user.isAvailableToMentor,
      piProfileType: user.piProfileType,
      numberOfMenteesCanCoach: user.numberOfMenteesCanCoach,
    } }));
    console.log(userRes);
    return { isSuccessful: true, result: userRes };
  } catch (error) {
    return { isSuccessful: false, error };
  }
}

export default async function handler(req, res) {
  console.log(req.body);
  try {
    switch (req.method) {
      case 'PUT':
        const response = await saveUser(req.body);
        if (response.isSuccessful) res.status(200).json(response.result);
        else res.status(500).send(response.error);
        break;
      default:
        res.status(501).send('Method not implemented');
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
  }
}
