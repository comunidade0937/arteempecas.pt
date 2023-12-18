import { Flex } from '@chakra-ui/react';

import Logo from '../assets/images/aep-logo.svg';

export const Hero = () => (
	<Flex justifyContent="center" alignItems="center" height="100vh" style={{ zIndex: 1 }}>
		<Logo style={{ maxWidth: '90vw', maxHeight: '40vh', height: 'inherit' }} />
	</Flex>
);

Hero.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
