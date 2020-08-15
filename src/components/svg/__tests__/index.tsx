import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ChevronBottom from '../ChevronBottom';
import ChevronTop from '../ChevronTop';
import Education from '../Education';
import Email from '../Email';
import Experience from '../Experience';
import Facebook from '../Facebook';
import GitHub from '../GitHub';
import GitLab from '../GitLab';
import Heart from '../Heart';
import Instagram from '../Instagram';
import Interests from '../Interests';
import LinkedIn from '../LinkedIn';
import Menu from '../Menu';
import Messenger from '../Messenger';
import Phone from '../Phone';
import Reddit from '../Reddit';
import Skills from '../Skills';
import Skype from '../Skype';
import Toolbox from '../Toolbox';
import Twitter from '../Twitter';
import Whatsapp from '../Whatsapp';

describe('components/svg Test Suite', () => {
  describe('components/svg/ChevronBottom Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <ChevronBottom />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/ChevronTop Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <ChevronTop />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Education Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Education />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Email Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Email />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Experience Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Experience />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Facebook Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Facebook />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/GitHub Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <GitHub />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/GitLab Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <GitLab />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Heart Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Heart />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Instagram Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Instagram />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Interests Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Interests />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/LinkedIn Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <LinkedIn />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Menu Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Menu />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Messenger Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Messenger />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Phone Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Phone />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Reddit Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Reddit />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Skills Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Skills />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Skype Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Skype />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Toolbox Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Toolbox />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Twitter Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Twitter />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Whatsapp Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Whatsapp />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });
});
