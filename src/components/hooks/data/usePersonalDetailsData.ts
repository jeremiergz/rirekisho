import { graphql, useStaticQuery } from 'gatsby';

type PersonalDetailsQueryData = {
  personalDetails: {
    contacts: Models.PersonalContact[];
    fullName: string;
    jobTitle: string;
    personalInformation: Models.PersonalInformation[];
    twitterUsername: string;
  };
};

function usePersonalDetailsData(): PersonalDetailsQueryData {
  return useStaticQuery<PersonalDetailsQueryData>(graphql`
    query PersonalDetailsQuery {
      personalDetails: personalDetailsJson {
        contacts {
          label
          link
          sortOrder
          type
        }
        fullName
        jobTitle
        personalInformation {
          label
          sortOrder
          value
        }
        twitterUsername
      }
    }
  `);
}

export type { PersonalDetailsQueryData };
export default usePersonalDetailsData;
