import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, List, ListItem } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

function SearchPrompts() {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [searchResults, setSearchResults] = useState<string[]>([]);

	const search = (e: FormEvent) => {
		console.log(searchTerm);
		e.preventDefault();
		setSearchResults(searchTerm.split(" "));
	}

	return (
		<>
		<form onSubmit={search}>
			<InputGroup>
				<Input 
					placeholder="Search by..."
					size="md"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<InputRightElement>
					<SearchIcon onClick={search}/>
				</InputRightElement>
			</InputGroup>
		</form>
		<List>
			{searchResults.map((result) => (
				<ListItem>{result}</ListItem>
			))}
		</List>
		</>
	)
}


export default SearchPrompts;
