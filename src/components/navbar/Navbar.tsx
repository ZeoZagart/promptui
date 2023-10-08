import { Box, Flex, Input, Button } from "@chakra-ui/react";

const Navbar = () => {
	return (
		<Flex
			position="fixed"
			top="0"
			left={0}
			right={0}
			justify="space-between"
			padding="1rem"
		>
			<Box>
				{/* Logo */}
			</Box>
			<Box >
				<Input placeholder="Search by..." size="md" />
			</Box>
			<Box>
				<Button colorScheme="teal" variant="solid">
					Create Prompt
				</Button>
			</Box>
		</Flex>
	);
};

export default Navbar;
