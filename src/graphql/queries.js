/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSkillTag = /* GraphQL */ `
  query GetSkillTag($id: ID!) {
    getSkillTag(id: $id) {
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
export const listSkillTags = /* GraphQL */ `
  query ListSkillTags(
    $filter: ModelSkillTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkillTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
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
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserSkill = /* GraphQL */ `
  query GetUserSkill($id: ID!) {
    getUserSkill(id: $id) {
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
export const listUserSkills = /* GraphQL */ `
  query ListUserSkills(
    $filter: ModelUserSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          skills {
            nextToken
          }
          menteeRequest {
            nextToken
          }
          mentorRequest {
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
      nextToken
    }
  }
`;
export const getMentorshipRequest = /* GraphQL */ `
  query GetMentorshipRequest($id: ID!) {
    getMentorshipRequest(id: $id) {
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
export const listMentorshipRequests = /* GraphQL */ `
  query ListMentorshipRequests(
    $filter: ModelMentorshipRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMentorshipRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          skills {
            nextToken
          }
          menteeRequest {
            nextToken
          }
          mentorRequest {
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
            nextToken
          }
          menteeRequest {
            nextToken
          }
          mentorRequest {
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
      nextToken
    }
  }
`;
export const getLinkSkillTags = /* GraphQL */ `
  query GetLinkSkillTags($id: ID!) {
    getLinkSkillTags(id: $id) {
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
export const listLinkSkillTags = /* GraphQL */ `
  query ListLinkSkillTags(
    $filter: ModelLinkSkillTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLinkSkillTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        skillTagID
        skillID
        skillTag {
          title
          skills {
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
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
