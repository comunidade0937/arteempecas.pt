import { Flex, Text } from '@chakra-ui/react';

import Background from '../assets/images/background.svg';

import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Main } from '../components/Main';

const Index = () => (
	<Container minHeight="100vh">
		<Background width="100vw" style={{ position: 'fixed', top: 0, left: 0, zIndex: -2, width: '100vw', minHeight: '100vh' }} />
		<Hero />
		<Main>
			<Flex direction="column" color="white" align="center" textAlign="center" mb={32}>
				<Text fontSize="6xl">Paredes de Coura</Text>
				<Text fontSize="3xl" mb={10}>
					Caixa dos Brinquedos
				</Text>

				<Text fontSize="4xl">17 a 31 de Dezembro</Text>
				<Text fontSize="2xl">das 10h às 18h</Text>
				<Text fontSize="xl">Encerrado a 25 de Dezembro</Text>
			</Flex>
		</Main>

		<Footer />
	</Container>
);

export default Index;
