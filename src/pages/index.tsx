import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem, Flex, Center, Square, Box, Stack, Spacer } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import Background from '../assets/images/background.svg';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const Index = () => (
	<Container minHeight="100vh">
		<Background width="100vw" style={{ position: 'fixed', top: 0, left: 0, zIndex: -2, width: '100vw', minHeight: '100vh' }} />
		<Hero title={'arte em peças'} />
		<Main>
			{/* <Text>
				Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> + <Code>TypeScript</Code>.
			</Text> */}

			{/* <List spacing={3} my={0}>
				<ListItem>
					<ListIcon as={CheckCircleIcon} color="green.500" />
					<ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mr={2}>
						Chakra UI <LinkIcon />
					</ChakraLink>
				</ListItem>
				<ListItem>
					<ListIcon as={CheckCircleIcon} color="green.500" />
					<ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
						Next.js <LinkIcon />
					</ChakraLink>
				</ListItem>
			</List> */}


			<Flex direction="column" color="white" align="center" textAlign="center"  mb={32}>
				<Text fontSize="6xl">Paredes de Coura</Text>
				<Text fontSize="3xl" mb={10}>
					Centro Cultural
				</Text>

				<Text fontSize="4xl">13 de Dezembro a 2 de Janeiro</Text>
				<Text fontSize="2xl">das 10h às 18h</Text>
				<Text fontSize="xl">Encerrado a 25 de Dezembro</Text>
			</Flex>
		</Main>

		{/* <DarkModeSwitch /> */}
		<Footer />

		{/* <CTA /> */}
	</Container>
);

export default Index;
