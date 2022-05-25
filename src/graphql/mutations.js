/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSkillTag = /* GraphQL */ `
  mutation CreateSkillTag(
    $input: CreateSkillTagInput!
    $condition: ModelSkillTagConditionInput
  ) {
    createSkillTag(input: $input, condition: $condition) {
      title
      skills {
        items {
          id
          skillTagID
          skillID
          skillTag {
            title
            id
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateSkillTag = /* GraphQL */ `
  mutation UpdateSkillTag(
    $input: UpdateSkillTagInput!
    $condition: ModelSkillTagConditionInput
  ) {
    updateSkillTag(input: $input, condition: $condition) {
      title
      skills {
        items {
          id
          skillTagID
          skillID
          skillTag {
            title
            id
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteSkillTag = /* GraphQL */ `
  mutation DeleteSkillTag(
    $input: DeleteSkillTagInput!
    $condition: ModelSkillTagConditionInput
  ) {
    deleteSkillTag(input: $input, condition: $condition) {
      title
      skills {
        items {
          id
          skillTagID
          skillID
          skillTag {
            title
            id
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
      title
      details
      icon
      skillTags {
        items {
          id
          skillTagID
          skillID
          skillTag {
            title
            id
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
      title
      details
      icon
      skillTags {
        items {
          id
          skillTagID
          skillID
          skillTag {
            title
            id
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
      title
      details
      icon
      skillTags {
        items {
          id
          skillTagID
          skillID
          skillTag {
            title
            id
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      isAvailableToMentor
      piProfileType
      numberOfMenteesCanCoach
      skills {
        items {
          id
          userId
          skillId
          user {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          proficiency
          createdAt
          updatedAt
        }
        nextToken
      }
      menteeRequest {
        items {
          id
          menteeId
          mentorId
          skillId
          mentee {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          mentor {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      mentorRequest {
        items {
          id
          menteeId
          mentorId
          skillId
          mentee {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          mentor {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      isAvailableToMentor
      piProfileType
      numberOfMenteesCanCoach
      skills {
        items {
          id
          userId
          skillId
          user {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          proficiency
          createdAt
          updatedAt
        }
        nextToken
      }
      menteeRequest {
        items {
          id
          menteeId
          mentorId
          skillId
          mentee {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          mentor {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      mentorRequest {
        items {
          id
          menteeId
          mentorId
          skillId
          mentee {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          mentor {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      isAvailableToMentor
      piProfileType
      numberOfMenteesCanCoach
      skills {
        items {
          id
          userId
          skillId
          user {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          proficiency
          createdAt
          updatedAt
        }
        nextToken
      }
      menteeRequest {
        items {
          id
          menteeId
          mentorId
          skillId
          mentee {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          mentor {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      mentorRequest {
        items {
          id
          menteeId
          mentorId
          skillId
          mentee {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          mentor {
            id
            firstName
            lastName
            email
            isAvailableToMentor
            piProfileType
            numberOfMenteesCanCoach
            createdAt
            updatedAt
          }
          skill {
            title
            details
            icon
            id
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserSkill = /* GraphQL */ `
  mutation CreateUserSkill(
    $input: CreateUserSkillInput!
    $condition: ModelUserSkillConditionInput
  ) {
    createUserSkill(input: $input, condition: $condition) {
      id
      userId
      skillId
      user {
        id
        firstName
        lastName
        email
        isAvailableToMentor
        piProfileType
        numberOfMenteesCanCoach
        skills {
          items {
            id
            userId
            skillId
            proficiency
            createdAt
            updatedAt
          }
          nextToken
        }
        menteeRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        mentorRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      skill {
        title
        details
        icon
        skillTags {
          items {
            id
            skillTagID
            skillID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      proficiency
      createdAt
      updatedAt
    }
  }
`;
export const updateUserSkill = /* GraphQL */ `
  mutation UpdateUserSkill(
    $input: UpdateUserSkillInput!
    $condition: ModelUserSkillConditionInput
  ) {
    updateUserSkill(input: $input, condition: $condition) {
      id
      userId
      skillId
      user {
        id
        firstName
        lastName
        email
        isAvailableToMentor
        piProfileType
        numberOfMenteesCanCoach
        skills {
          items {
            id
            userId
            skillId
            proficiency
            createdAt
            updatedAt
          }
          nextToken
        }
        menteeRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        mentorRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      skill {
        title
        details
        icon
        skillTags {
          items {
            id
            skillTagID
            skillID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      proficiency
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserSkill = /* GraphQL */ `
  mutation DeleteUserSkill(
    $input: DeleteUserSkillInput!
    $condition: ModelUserSkillConditionInput
  ) {
    deleteUserSkill(input: $input, condition: $condition) {
      id
      userId
      skillId
      user {
        id
        firstName
        lastName
        email
        isAvailableToMentor
        piProfileType
        numberOfMenteesCanCoach
        skills {
          items {
            id
            userId
            skillId
            proficiency
            createdAt
            updatedAt
          }
          nextToken
        }
        menteeRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        mentorRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      skill {
        title
        details
        icon
        skillTags {
          items {
            id
            skillTagID
            skillID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      proficiency
      createdAt
      updatedAt
    }
  }
`;
export const createMentorshipRequest = /* GraphQL */ `
  mutation CreateMentorshipRequest(
    $input: CreateMentorshipRequestInput!
    $condition: ModelMentorshipRequestConditionInput
  ) {
    createMentorshipRequest(input: $input, condition: $condition) {
      id
      menteeId
      mentorId
      skillId
      mentee {
        id
        firstName
        lastName
        email
        isAvailableToMentor
        piProfileType
        numberOfMenteesCanCoach
        skills {
          items {
            id
            userId
            skillId
            proficiency
            createdAt
            updatedAt
          }
          nextToken
        }
        menteeRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        mentorRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      mentor {
        id
        firstName
        lastName
        email
        isAvailableToMentor
        piProfileType
        numberOfMenteesCanCoach
        skills {
          items {
            id
            userId
            skillId
            proficiency
            createdAt
            updatedAt
          }
          nextToken
        }
        menteeRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        mentorRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      skill {
        title
        details
        icon
        skillTags {
          items {
            id
            skillTagID
            skillID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateMentorshipRequest = /* GraphQL */ `
  mutation UpdateMentorshipRequest(
    $input: UpdateMentorshipRequestInput!
    $condition: ModelMentorshipRequestConditionInput
  ) {
    updateMentorshipRequest(input: $input, condition: $condition) {
      id
      menteeId
      mentorId
      skillId
      mentee {
        id
        firstName
        lastName
        email
        isAvailableToMentor
        piProfileType
        numberOfMenteesCanCoach
        skills {
          items {
            id
            userId
            skillId
            proficiency
            createdAt
            updatedAt
          }
          nextToken
        }
        menteeRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        mentorRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      mentor {
        id
        firstName
        lastName
        email
        isAvailableToMentor
        piProfileType
        numberOfMenteesCanCoach
        skills {
          items {
            id
            userId
            skillId
            proficiency
            createdAt
            updatedAt
          }
          nextToken
        }
        menteeRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        mentorRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      skill {
        title
        details
        icon
        skillTags {
          items {
            id
            skillTagID
            skillID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteMentorshipRequest = /* GraphQL */ `
  mutation DeleteMentorshipRequest(
    $input: DeleteMentorshipRequestInput!
    $condition: ModelMentorshipRequestConditionInput
  ) {
    deleteMentorshipRequest(input: $input, condition: $condition) {
      id
      menteeId
      mentorId
      skillId
      mentee {
        id
        firstName
        lastName
        email
        isAvailableToMentor
        piProfileType
        numberOfMenteesCanCoach
        skills {
          items {
            id
            userId
            skillId
            proficiency
            createdAt
            updatedAt
          }
          nextToken
        }
        menteeRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        mentorRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      mentor {
        id
        firstName
        lastName
        email
        isAvailableToMentor
        piProfileType
        numberOfMenteesCanCoach
        skills {
          items {
            id
            userId
            skillId
            proficiency
            createdAt
            updatedAt
          }
          nextToken
        }
        menteeRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        mentorRequest {
          items {
            id
            menteeId
            mentorId
            skillId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      skill {
        title
        details
        icon
        skillTags {
          items {
            id
            skillTagID
            skillID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const createLinkSkillTags = /* GraphQL */ `
  mutation CreateLinkSkillTags(
    $input: CreateLinkSkillTagsInput!
    $condition: ModelLinkSkillTagsConditionInput
  ) {
    createLinkSkillTags(input: $input, condition: $condition) {
      id
      skillTagID
      skillID
      skillTag {
        title
        skills {
          items {
            id
            skillTagID
            skillID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      skill {
        title
        details
        icon
        skillTags {
          items {
            id
            skillTagID
            skillID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLinkSkillTags = /* GraphQL */ `
  mutation UpdateLinkSkillTags(
    $input: UpdateLinkSkillTagsInput!
    $condition: ModelLinkSkillTagsConditionInput
  ) {
    updateLinkSkillTags(input: $input, condition: $condition) {
      id
      skillTagID
      skillID
      skillTag {
        title
        skills {
          items {
            id
            skillTagID
            skillID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      skill {
        title
        details
        icon
        skillTags {
          items {
            id
            skillTagID
            skillID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLinkSkillTags = /* GraphQL */ `
  mutation DeleteLinkSkillTags(
    $input: DeleteLinkSkillTagsInput!
    $condition: ModelLinkSkillTagsConditionInput
  ) {
    deleteLinkSkillTags(input: $input, condition: $condition) {
      id
      skillTagID
      skillID
      skillTag {
        title
        skills {
          items {
            id
            skillTagID
            skillID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      skill {
        title
        details
        icon
        skillTags {
          items {
            id
            skillTagID
            skillID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
