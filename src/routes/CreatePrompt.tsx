import { Select, HStack, Button, VStack, Textarea, Box, Table, TableCaption, Thead, Tr, Th, Tbody, Td, TableContainer } from "@chakra-ui/react";
import { useState } from "react";

const CreatePrompt = () => {
	const [prompt, setPrompt] = useState<string>();
	const [params, setParams] = useState<string[]>([]);
	const [description, setDescription] = useState<string>('');

	const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setPrompt(e.target.value);
		parseParams(e.target.value);
	}

	const parseParams = (text: string) => {
		const regex = /{{.*?}}/g;
		const matches = text.match(regex);
		if (matches) {
			setParams(matches.map((match) => match.slice(2, -2)));
		} else {
			setParams([]);
		}
	}

	const typeSelector = (param: string) => {
		return (
			<Tr>
				<Td>
					<Button disabled={true} >{param}</Button>
				</Td>
				<Td>
					<Select width={"auto"}>
						<option value="string">String</option>
						<option value="number">Number</option>
						<option value="boolean">Boolean</option>
					</Select>
				</Td>
			</Tr>	
		);
	}
	
	return (
		<>
			<HStack border={2} borderRadius={20} borderStyle={"solid"} borderColor={"teal"} p={5} margin={10} alignItems={"baseline"}>
				<VStack flexGrow={"1"}>
					<Textarea 
						rows={10}
						resize="vertical"
						placeholder="Prompt" 
						value={prompt} 
						onChange={handlePromptChange}
					/>
					<Textarea 
						rows={5}
						placeholder="Description" 
						resize="horizontal"
						value={description} 
						onChange={(e) => setDescription(e.target.value)}
					/>
				</VStack>
				<TableContainer >
					<Table>
						<TableCaption>Prompt parameters</TableCaption>
						<Thead>
							<Tr>
								<Th>Parameter</Th>
								<Th>Type</Th>
							</Tr>
						</Thead>
						<Tbody>
							{params.map((param) => typeSelector(param))}
						</Tbody>
					</Table>
					{/*//<FormLabel>Params</FormLabel>
					//<List>
					//	{params.map((param) => typeSelector(param))}
					//</List>*/}
				</TableContainer>
			</HStack>
		</>
	);
}

export default CreatePrompt;