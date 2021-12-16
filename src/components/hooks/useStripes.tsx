import { useTheme } from '@/components/providers/ThemeProvider';
import { TinyColor } from '@ctrl/tinycolor';
import { useMemo } from 'react';
import useWindowSize from './useWindowSize';

type Stripes = {
  height: number;
  sizeFactor: number;
  stripes: {
    color: string;
    height: number;
  }[];
};

function useStripes(baseHeight: number, direction: 'ASC' | 'DESC' = 'ASC', sizeFactor = 1): Stripes {
  const { colors, type } = useTheme();
  const { width } = useWindowSize();

  const baseNumber = Math.ceil(baseHeight / 10.5);

  const height = useMemo(() => {
    const isTabletSize = width >= 768;

    return isTabletSize ? baseHeight : baseHeight * sizeFactor;
  }, [width]);

  const stripes = useMemo(() => {
    const isTabletSize = width >= 768;
    const total = isTabletSize ? baseNumber : Math.ceil(baseNumber * sizeFactor);
    const totalHeight = isTabletSize ? baseHeight : baseHeight * sizeFactor;

    return [...Array(total).keys()].map((_, index) => ({
      color: new TinyColor(type === 'light' ? colors.primary : colors.primaryDark)
        .mix(
          type === 'light' ? colors.secondary : colors.secondaryDark,
          (direction === 'ASC' ? index / total : (total - index) / total) * 100,
        )
        .toString(),
      height: totalHeight / total,
    }));
  }, [type, width]);

  return { height, sizeFactor, stripes };
}

export default useStripes;
