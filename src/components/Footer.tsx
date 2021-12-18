import { Flex, FlexProps } from '@chakra-ui/react';

import Brick from '../assets/images/brick.svg';

export const Footer = (props: FlexProps) => (
	<Flex as="footer" pt="8rem" alignItems="center" width="100%" justifyContent="center" position="relative" color="gray.300" {...props}>
		<Brick style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: -1, width: '100vw', maxHeight: '300px' }} />

		<div style={{ transform: 'rotate(5deg)' }}>Feito com ❤️ &nbsp;pela Comunidade 0937</div>
	</Flex>
);
