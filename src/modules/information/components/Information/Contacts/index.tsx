import Anchor from '@/common/components/misc/Anchor';
import { SVGProps } from '@/common/components/misc/SVG';
import EmailIcon from '@/common/components/svgs/contacts/Email';
import GitHubIcon from '@/common/components/svgs/contacts/GitHub';
import GitLabIcon from '@/common/components/svgs/contacts/GitLab';
import LinkedInIcon from '@/common/components/svgs/contacts/LinkedIn';
import TwitterIcon from '@/common/components/svgs/contacts/Twitter';
import clsx from 'clsx';
import React from 'react';
import ContactDetail from '../../../models/ContactDetail';

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
        'print:mt-1 print:mr-8 print:max-h-full print:flex-col',
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
                'print:mx-0 print:justify-end',
                index !== items.length - 1 && 'print:mb-2 md:mb-3',
              )}
              key={item.link}
            >
              <Anchor aria-label={`Open ${item.type} contact`} external={isHTTPLink(item.link)} href={item.link}>
                <div className={clsx('flex flex-col-reverse items-center md:flex-row', 'print:flex-row')}>
                  <span
                    className={clsx(
                      'hidden text-lg font-extrabold leading-8 text-primary dark:text-primary-dark md:block',
                      'print:block print:text-xs',
                    )}
                  >
                    {item.label}
                  </span>
                  <Icon
                    className={clsx(
                      'ml-4 h-8 w-8',
                      'print:ml-2 print:h-5 print:w-5',
                      isEven ? 'fill-secondary dark:fill-secondary-dark' : 'fill-primary dark:fill-primary-dark',
                    )}
                  />
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
