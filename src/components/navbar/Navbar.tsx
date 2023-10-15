import { Box, Flex, Button } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import { SearchIcon } from '@chakra-ui/icons'

const Navbar = () => {
    return (
        <>
            <Flex position="sticky" justify="space-between" padding="1rem">
                <Box>{/* Logo & Hamburger */}</Box>
                <Box>
                    <Link to={'/search'}>
                        <Button
                            variant={'outline'}
                            rightIcon={<SearchIcon />}
                            marginInline={2}
                        >
                            Search Prompts
                        </Button>
                    </Link>
                    <Link to={'/create-prompt'}>
                        <Button
                            colorScheme={'teal'}
                            variant={'solid'}
                            marginInline={2}
                        >
                            Create Prompt
                        </Button>
                    </Link>
                </Box>
            </Flex>
            <Outlet />
        </>
    )
}

export default Navbar
