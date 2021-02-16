import Box from '@primitives/Box';
import FlexBox from '@primitives/FlexBox';
import React from 'react';
import Star from './Star';

const Language: React.FC<LanguageProps> = ({ dense = false, img, item }) => {
  const maxStarsNumber = 5;
  const maxStarsDifference = maxStarsNumber - item.proficiencyLevel;
  const fullStarsNumber = [...Array(Math.floor(item.proficiencyLevel)).keys()];
  const halfStarsNumber = [...Array(Math.round(maxStarsDifference % 1)).keys()];
  const emptyStarsNumber = [...Array(Math.floor(maxStarsDifference)).keys()];
  return (
    <FlexBox alignItems="center" flexDirection="column" justifyContent="center" marginLeft={!dense && '12px'}>
      <Box width={{ _: 40, tablet: 48 }}>
        <Box alt={item.name} as="img" src={img} width="100%" />
      </Box>
      <FlexBox marginTop={{ _: 0, tablet: 1 }}>
        {fullStarsNumber.map(fstar => (
          <Star height={{ _: 12, tablet: 16 }} key={fstar} type="full" />
        ))}
        {halfStarsNumber.map(fstar => (
          <Star height={{ _: 12, tablet: 16 }} key={fstar} type="half" />
        ))}
        {emptyStarsNumber.map(fstar => (
          <Star height={{ _: 12, tablet: 16 }} key={fstar} type="empty" />
        ))}
      </FlexBox>
    </FlexBox>
  );
};

Language.displayName = 'Language';

export type LanguageProps = {
  dense?: boolean;
  img: string;
  item: Models.Language;
};
export default Language;
