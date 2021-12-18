import { Flex, Heading } from '@chakra-ui/react';

import Logo from '../assets/images/aep-2021-logo.svg';

export const Hero = ({ title }: { title: string }) => (
	<Flex justifyContent="center" alignItems="center" height="100vh" style={{ zIndex: 1 }}>
		{/* <Heading fontSize="6vw">{title}</Heading> */}
		<Logo style={{ maxWidth: '90vw', maxHeight: '40vh', height:"inherit" }} />
	</Flex>
);

Hero.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
