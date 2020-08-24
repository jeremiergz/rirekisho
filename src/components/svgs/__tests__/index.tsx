import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import EmailIcon from '../contacts/Email';
import FacebookIcon from '../contacts/Facebook';
import GitHubIcon from '../contacts/GitHub';
import GitLabIcon from '../contacts/GitLab';
import InstagramIcon from '../contacts/Instagram';
import LinkedInIcon from '../contacts/LinkedIn';
import MessengerIcon from '../contacts/Messenger';
import PhoneIcon from '../contacts/Phone';
import RedditIcon from '../contacts/Reddit';
import SkypeIcon from '../contacts/Skype';
import TwitterIcon from '../contacts/Twitter';
import WhatsappIcon from '../contacts/Whatsapp';
import ArrowLeftIcon from '../icons/ArrowLeft';
import ChevronBottomIcon from '../icons/ChevronBottom';
import ChevronRightIcon from '../icons/ChevronRight';
import ChevronTopIcon from '../icons/ChevronTop';
import HeartIcon from '../icons/Heart';
import MenuIcon from '../icons/Menu';
import MoonIcon from '../icons/Moon';
import SunIcon from '../icons/Sun';
import CodingIcon from '../interests/Coding';
import MoviesIcon from '../interests/Movies';
import MusicIcon from '../interests/Music';
import NatureIcon from '../interests/Nature';
import SportsIcon from '../interests/Sports';
import TechIcon from '../interests/Tech';
import EducationIcon from '../sections/Education';
import ExperienceIcon from '../sections/Experience';
import InterestsIcon from '../sections/Interests';
import SkillsIcon from '../sections/Skills';
import ToolboxIcon from '../sections/Toolbox';

describe('components/svgs Test Suite', () => {
  describe('contacts Test Suite', () => {
    describe('Email Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <EmailIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Facebook Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <FacebookIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('GitHub Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <GitHubIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('GitLab Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <GitLabIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Instagram Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <InstagramIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('LinkedIn Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <LinkedInIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });
    describe('Messenger Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <MessengerIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Phone Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <PhoneIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Reddit Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <RedditIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Skype Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <SkypeIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Twitter Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <TwitterIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Whatsapp Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <WhatsappIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('icons Test Suite', () => {
    describe('ArrowLeft Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <ArrowLeftIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('ChevronBottom Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <ChevronBottomIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('ChevronRight Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <ChevronRightIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('ChevronTop Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <ChevronTopIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Heart Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <HeartIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Menu Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <MenuIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Moon Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <MoonIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Sun Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <SunIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('interests Test Suite', () => {
    describe('Coding Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <CodingIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Movies Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <MoviesIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Music Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <MusicIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Nature Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <NatureIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Sports Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <SportsIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Tech Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <TechIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('sections Test Suite', () => {
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

    describe('Interests Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <InterestsIcon />;
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
});
