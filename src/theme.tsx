import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints, mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
	sm: '40em',
	md: '52em',
	lg: '64em',
	xl: '80em',
});

const theme = extendTheme({
	colors: {
		black: '#16161D',
		transWhite: 'rgba(255,255,255,0.5)',
	},
	fonts,
	breakpoints,
	styles: {
		global: (props: Dict<any> | StyleFunctionProps) => ({
			body: {
				bg: mode('#004848', '#004848')(props),
			},
		}),
	},
});

export default theme;
