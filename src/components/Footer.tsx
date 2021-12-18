import { Flex, FlexProps } from '@chakra-ui/react';

export const Footer = (props: FlexProps) => (
	<Flex as="footer" py="2rem" alignItems="center" width="100%" justifyContent="center" position="relative" color="gray.300" {...props}>
		<div>Feito com ❤️ &nbsp;pela Comunidade 0937</div>
	</Flex>
);
