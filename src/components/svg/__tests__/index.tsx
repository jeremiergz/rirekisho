import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ChevronBottomIcon from '../ChevronBottom';
import ChevronTopIcon from '../ChevronTop';
import EducationIcon from '../Education';
import ExperienceIcon from '../Experience';
import HeartIcon from '../Heart';
import InterestsIcon from '../Interests';
import MenuIcon from '../Menu';
import SkillsIcon from '../Skills';
import ToolboxIcon from '../Toolbox';

describe('components/svg Test Suite', () => {
  describe('ChevronBottom Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <ChevronBottomIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('ChevronTop Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <ChevronTopIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Education Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <EducationIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Experience Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <ExperienceIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Heart Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <HeartIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Interests Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <InterestsIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Menu Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <MenuIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Skills Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <SkillsIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Toolbox Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <ToolboxIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });
});
