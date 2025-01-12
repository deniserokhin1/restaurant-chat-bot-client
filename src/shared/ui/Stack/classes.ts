import type {
    FlexAlignType,
    FlexAlignValue,
    FlexJustifyType,
    FlexJustifyValue,
    FlexDirectionType,
    FlexDirectionValue,
    FlexGapType,
    FlexGapValue,
} from './types';

export const alignClasses: Record<FlexAlignType, FlexAlignValue> = {
    center: 'align-center',
    start: 'align-start',
    end: 'align-end',
    stretch: 'align-stretch',
};

export const justifyClasses: Record<FlexJustifyType, FlexJustifyValue> = {
    center: 'justify-center',
    start: 'justify-start',
    end: 'justify-end',
    between: 'justify-between',
    evenly: 'justify-evenly',
    around: 'justify-around',
};

export const directionClasses: Record<FlexDirectionType, FlexDirectionValue> = {
    'row': 'direction-row',
    'column': 'direction-column',
    'row-reverse': 'direction-row-reverse',
    'column-reverse': 'direction-column-reverse',
};

export const gapClasses: Record<FlexGapType, FlexGapValue> = {
    '0': 'gap0',
    '4': 'gap4',
    '8': 'gap8',
    '12': 'gap12',
    '16': 'gap16',
    '24': 'gap24',
    '32': 'gap32',
    '40': 'gap40',
    '48': 'gap48',
    '56': 'gap56',
    '64': 'gap64',
    '72': 'gap72',
    '4xs': 'gap4xs',
    '3xs': 'gap3xs',
    '2xs': 'gap2xs',
    'xs': 'gapxs',
    'sm': 'gapsm',
    'md': 'gapmd',
    'lg': 'gaplg',
    'xl': 'gapxl',
    '2xl': 'gap2xl',
    '3xl': 'gap3xl',
    '4xl': 'gap4xl',
};
