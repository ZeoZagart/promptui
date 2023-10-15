import { SearchIcon } from '@chakra-ui/icons'
import {
    Box,
    Card,
    Input,
    InputGroup,
    InputRightElement,
    List,
    ListItem,
    SimpleGrid,
} from '@chakra-ui/react'
import { FormEvent, useState } from 'react'

function SearchPrompts() {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [searchResults, setSearchResults] = useState<string[]>([])

    const search = (e: FormEvent) => {
        console.log(searchTerm)
        e.preventDefault()
        setSearchResults(searchTerm.split(' '))
    }

    return (
        <Box margin={10} justifyItems={"center"}>
            <form onSubmit={search}>
                <InputGroup >
                    <Input
                        placeholder="Search by..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <InputRightElement>
                        <SearchIcon onClick={search}/>
                    </InputRightElement>
                </InputGroup>
            </form>
            <SimpleGrid margin={4} columns={[2, null, 5]} justifyContent={"space-between"} gap={4}>
                {searchResults.map((result) => (
                    <Card
                        maxW={"md"}
                        direction={"column"}
                        justifySelf={"center"}
                        variant={"outline"}
                    >
                        {result}
                    </Card>
                ))}
            </SimpleGrid>
        </Box>
    )
}

export default SearchPrompts
