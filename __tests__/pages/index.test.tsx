import IndexPage from '@pages';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import mockData from './mock.json';

describe('pages/index Test Suite', () => {
  it('matches snapshot', () => {
    const {
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
    } = mockData;
    const jsx = (
      <IndexPage
        educationData={educationData as Models.Degree[]}
        experiencesData={experiencesData as Models.Experience[]}
        images={images as string[]}
        imagesIndex={imagesIndex as Record<string, string>}
        interestsData={interestsData as Pick<Models.LabeledItem, 'name' | 'sortOrder'>[]}
        languagesData={languagesData as Models.Language[]}
        personalDetailsData={personalDetailsData as Models.PersonalDetails}
        skillsData={skillsData as Models.Skill[]}
        themeData={themeData as Theme.Data}
        toolboxData={toolboxData as Models.LabeledItem[]}
      />
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
