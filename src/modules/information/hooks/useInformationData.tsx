import { graphql, useStaticQuery } from 'gatsby';
import ContactDetail from '../models/ContactDetail';
import Information from '../models/Information';
import PersonalDetail from '../models/PersonalDetail';

type InformationQueryResponse = {
  information: {
    contacts: ContactDetail[];
    fullName: string;
    jobTitle: string;
    personalDetails: PersonalDetail[];
    twitterUsername: string;
  };
};

function useInformationData(): Information {
  const rawData = useStaticQuery<InformationQueryResponse>(graphql`
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

export type { InformationQueryResponse };
export default useInformationData;
