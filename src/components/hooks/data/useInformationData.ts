import ContactDetail from '@/models/ContactDetail';
import Information from '@/models/Information';
import PersonalDetail from '@/models/PersonalDetail';
import { graphql, useStaticQuery } from 'gatsby';

type InformationQueryData = {
  information: {
    contacts: ContactDetail[];
    fullName: string;
    jobTitle: string;
    personalDetails: PersonalDetail[];
    twitterUsername: string;
  };
};

function useInformationData(): Information {
  const rawData = useStaticQuery<InformationQueryData>(graphql`
    query InformationQuery {
      information: informationJson {
        contacts {
          label
          link
          sortOrder
          type
        }
        fullName
        jobTitle
        personalDetails {
          label
          sortOrder
          value
        }
        twitterUsername
      }
    }
  `);
  const information = new Information(rawData.information);

  return information;
}

export type { InformationQueryData };
export default useInformationData;
