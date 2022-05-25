/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSkillTag = /* GraphQL */ `
  subscription OnCreateSkillTag {
    onCreateSkillTag {
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
export const onUpdateSkillTag = /* GraphQL */ `
  subscription OnUpdateSkillTag {
    onUpdateSkillTag {
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
export const onDeleteSkillTag = /* GraphQL */ `
  subscription OnDeleteSkillTag {
    onDeleteSkillTag {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserSkill = /* GraphQL */ `
  subscription OnCreateUserSkill {
    onCreateUserSkill {
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
export const onUpdateUserSkill = /* GraphQL */ `
  subscription OnUpdateUserSkill {
    onUpdateUserSkill {
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
export const onDeleteUserSkill = /* GraphQL */ `
  subscription OnDeleteUserSkill {
    onDeleteUserSkill {
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
export const onCreateMentorshipRequest = /* GraphQL */ `
  subscription OnCreateMentorshipRequest {
    onCreateMentorshipRequest {
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
export const onUpdateMentorshipRequest = /* GraphQL */ `
  subscription OnUpdateMentorshipRequest {
    onUpdateMentorshipRequest {
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
export const onDeleteMentorshipRequest = /* GraphQL */ `
  subscription OnDeleteMentorshipRequest {
    onDeleteMentorshipRequest {
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
export const onCreateLinkSkillTags = /* GraphQL */ `
  subscription OnCreateLinkSkillTags {
    onCreateLinkSkillTags {
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
export const onUpdateLinkSkillTags = /* GraphQL */ `
  subscription OnUpdateLinkSkillTags {
    onUpdateLinkSkillTags {
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
export const onDeleteLinkSkillTags = /* GraphQL */ `
  subscription OnDeleteLinkSkillTags {
    onDeleteLinkSkillTags {
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
