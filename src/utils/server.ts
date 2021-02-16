import { readdir, readFile } from 'fs/promises';
import path from 'path';

async function getEducationData(): Promise<Models.Degree[]> {
  return JSON.parse(await readFile(path.resolve('content', 'data', 'education.json'), 'utf8'));
}

async function getExperiencesData(): Promise<Models.Experience[]> {
  return JSON.parse(await readFile(path.resolve('content', 'data', 'experiences.json'), 'utf8'));
}

async function getInterestsData(): Promise<Models.Interest[]> {
  return JSON.parse(await readFile(path.resolve('content', 'data', 'interests.json'), 'utf8'));
}

async function getLanguagesData(): Promise<Models.Language[]> {
  return JSON.parse(await readFile(path.resolve('content', 'data', 'languages.json'), 'utf8'));
}

async function getPersonalDetailsData(): Promise<Models.PersonalDetails> {
  return JSON.parse(await readFile(path.resolve('content', 'data', 'personal-details.json'), 'utf8'));
}

async function getSkillsData(): Promise<Models.Skill[]> {
  return JSON.parse(await readFile(path.resolve('content', 'data', 'skills.json'), 'utf8'));
}

async function getThemeData(): Promise<Theme.Data> {
  return JSON.parse(await readFile(path.resolve('content', 'theme.json'), 'utf8'));
}

async function getToolboxData(): Promise<Models.Tool[]> {
  return JSON.parse(await readFile(path.resolve('content', 'data', 'toolbox.json'), 'utf8'));
}

const imagesDir = path.resolve('public', 'images');

async function listImages(
  filter?: 'company' | 'flag' | 'tech' | 'toolbox',
): Promise<{
  images: string[];
  imagesIndex: Record<string, string>;
}> {
  let images = await readdir(imagesDir);
  if (filter) images = images.filter(i => i.includes(filter));
  return images.reduce(
    (acc, img) => {
      const imgURL = `/images/${img}`;
      acc.images.push(imgURL);
      acc.imagesIndex[img] = imgURL;
      return acc;
    },
    {
      images: [] as string[],
      imagesIndex: {} as Record<string, string>,
    },
  );
}

export {
  getEducationData,
  getExperiencesData,
  getInterestsData,
  getLanguagesData,
  getPersonalDetailsData,
  getSkillsData,
  getThemeData,
  getToolboxData,
  listImages,
};
