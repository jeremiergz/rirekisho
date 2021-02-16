import React, { createContext, useContext } from 'react';

const DataContext = createContext<DataProviderProps>(null);

const DataProvider: React.FC<DataProviderProps> = ({
  children,
  educationData,
  experiencesData,
  images,
  imagesIndex,
  interestsData,
  languagesData,
  personalDetailsData,
  skillsData,
  themeData,
  toolboxData,
}) => {
  return (
    <DataContext.Provider
      value={{
        educationData,
        experiencesData,
        images,
        imagesIndex,
        interestsData,
        languagesData,
        personalDetailsData,
        skillsData,
        themeData,
        toolboxData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.displayName = 'DataProvider';

/**
 * Returns the data context.
 */
function useData() {
  return useContext(DataContext);
}

export { useData };
export type DataProviderProps = {
  educationData: Models.Degree[];
  experiencesData: Models.Experience[];
  images: string[];
  imagesIndex: Record<string, string>;
  interestsData: Models.Interest[];
  languagesData: Models.Language[];
  personalDetailsData: Models.PersonalDetails;
  skillsData: Models.Skill[];
  themeData: Theme.Data;
  toolboxData: Models.Tool[];
};
export default DataProvider;
