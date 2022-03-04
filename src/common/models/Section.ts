import { SVGProps } from '@/common/components/misc/SVG';
import React from 'react';

type SectionProps = {
  Component?: React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement>>;
  Icon: React.FC<SVGProps>;
  ref: React.RefObject<HTMLDivElement> | 'top' | 'bottom';
  title: string;
};

interface Section extends SectionProps {}

class Section {
  constructor({ Component, Icon, ref, title }: SectionProps) {
    this.Component = Component;
    this.Icon = Icon;
    this.ref = ref;
    this.title = title;
  }
}

export default Section;
