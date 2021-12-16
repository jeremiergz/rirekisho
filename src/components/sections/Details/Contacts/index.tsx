import Anchor from '@/components/common/Anchor';
import { SVGProps } from '@/components/common/SVG';
import EmailIcon from '@/components/svgs/contacts/Email';
import GitHubIcon from '@/components/svgs/contacts/GitHub';
import GitLabIcon from '@/components/svgs/contacts/GitLab';
import LinkedInIcon from '@/components/svgs/contacts/LinkedIn';
import TwitterIcon from '@/components/svgs/contacts/Twitter';
import clsx from 'clsx';
import React from 'react';

const Icons: Record<Models.PersonalContact['type'], React.FC<SVGProps>> = {
  email: EmailIcon,
  github: GitHubIcon,
  gitlab: GitLabIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
};

function isHTTPLink(link: string) {
  return !!link.match(/^https?:\/\//);
}

function Contacts({ items }: ContactsProps): JSX.Element {
  return (
    <div
      className="flex flex-1 md:flex-col h-full justify-between max-h-8 md:max-h-full mt-6 order-3 text-center"
      style={{ minWidth: 224 }}
    >
      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        const Icon = Icons[item.type];

        return (
          <div
            className={clsx(
              'flex leading-3 items-center justify-center md:justify-end mx-2 md:mx-0',
              index !== items.length - 1 && 'md:mb-5',
            )}
            key={item.link}
          >
            <Anchor aria-label={`Open ${item.type} contact`} external={isHTTPLink(item.link)} href={item.link}>
              <div className="flex flex-col-reverse md:flex-row items-center">
                <span className="font-bold hidden md:block leading-8 text-lg text-primary dark:text-primary-dark">
                  {item.label}
                </span>
                <div className="ml-4">
                  <Icon
                    className={clsx(
                      isEven ? 'fill-secondary dark:fill-secondary-dark' : 'fill-primary dark:fill-primary-dark',
                    )}
                    height={32}
                    width={32}
                  />
                </div>
              </div>
            </Anchor>
          </div>
        );
      })}
    </div>
  );
}

export type ContactsProps = {
  items: Models.PersonalContact[];
};
export default Contacts;
