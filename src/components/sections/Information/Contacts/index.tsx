import Anchor from '@/components/common/Anchor';
import { SVGProps } from '@/components/common/SVG';
import EmailIcon from '@/components/svgs/contacts/Email';
import GitHubIcon from '@/components/svgs/contacts/GitHub';
import GitLabIcon from '@/components/svgs/contacts/GitLab';
import LinkedInIcon from '@/components/svgs/contacts/LinkedIn';
import TwitterIcon from '@/components/svgs/contacts/Twitter';
import ContactDetail from '@/models/ContactDetail';
import clsx from 'clsx';
import React from 'react';

const Icons: Record<ContactDetail['type'], React.FC<SVGProps>> = {
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
      className={clsx(
        'order-3 flex flex-1 justify-between text-center md:flex-col',
        'mt-6 h-full max-h-8 min-w-[224px] md:max-h-full',
      )}
    >
      {items
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((item, index) => {
          const isEven = index % 2 === 0;
          const Icon = Icons[item.type];

          return (
            <div
              className={clsx(
                'mx-2 flex items-center justify-center leading-3 md:mx-0 md:justify-end',
                index !== items.length - 1 && 'md:mb-5',
              )}
              key={item.link}
            >
              <Anchor aria-label={`Open ${item.type} contact`} external={isHTTPLink(item.link)} href={item.link}>
                <div className="flex flex-col-reverse items-center md:flex-row">
                  <span className="hidden text-lg font-extrabold leading-8 text-primary dark:text-primary-dark md:block">
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
  items: ContactDetail[];
};
export default Contacts;
