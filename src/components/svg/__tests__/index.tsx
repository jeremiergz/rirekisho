import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ChevronBottom from '../ChevronBottom';
import ChevronTop from '../ChevronTop';
import Email from '../contacts/Email';
import Facebook from '../contacts/Facebook';
import GitHub from '../contacts/GitHub';
import GitLab from '../contacts/GitLab';
import Instagram from '../contacts/Instagram';
import LinkedIn from '../contacts/LinkedIn';
import Messenger from '../contacts/Messenger';
import Phone from '../contacts/Phone';
import Reddit from '../contacts/Reddit';
import Skype from '../contacts/Skype';
import Twitter from '../contacts/Twitter';
import Whatsapp from '../contacts/Whatsapp';
import Heart from '../Heart';
import Coding from '../interests/Coding';
import Movies from '../interests/Movies';
import Music from '../interests/Music';
import Nature from '../interests/Nature';
import Sports from '../interests/Sports';
import Tech from '../interests/Tech';
import Menu from '../Menu';
import Education from '../sections/Education';
import Experience from '../sections/Experience';
import Interests from '../sections/Interests';
import Skills from '../sections/Skills';
import Toolbox from '../sections/Toolbox';

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

  describe('components/svg/Heart Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Heart />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/Menu Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <Menu />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('components/svg/contacts Test Suite', () => {
    describe('components/svg/contacts/Email Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Email />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/contacts/Facebook Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Facebook />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/contacts/GitHub Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <GitHub />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/contacts/GitLab Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <GitLab />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/contacts/Instagram Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Instagram />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/contacts/LinkedIn Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <LinkedIn />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });
    describe('components/svg/contacts/Messenger Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Messenger />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/contacts/Phone Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Phone />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/contacts/Reddit Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Reddit />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/contacts/Skype Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Skype />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/contacts/Twitter Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Twitter />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/contacts/Whatsapp Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Whatsapp />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('components/svg/interests Test Suite', () => {
    describe('components/svg/interests/Coding Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Coding />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/interests/Movies Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Movies />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/interests/Music Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Music />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/interests/Nature Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Nature />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/interests/Sports Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Sports />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/interests/Tech Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Tech />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('components/svg/sections Test Suite', () => {
    describe('components/svg/sections/Education Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Education />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/sections/Experience Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Experience />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/sections/Interests Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Interests />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/sections/Skills Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Skills />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('components/svg/sections/Toolbox Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <Toolbox />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });
  });
});
