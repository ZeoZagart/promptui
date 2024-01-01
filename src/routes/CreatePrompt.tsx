import {
    Select,
    HStack,
    Button,
    VStack,
    Textarea,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    TableContainer,
    Card,
    CardHeader,
    Heading,
    CardBody,
} from '@chakra-ui/react'
import { PromptParam } from 'model/prompts'
import { useState } from 'react'

const CreatePrompt = () => {
    const [prompt, setPrompt] = useState<string>()
    const [params, setParams] = useState<PromptParam[]>([])
    const [description, setDescription] = useState<string>('')

    const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(e.target.value)
        parseParams(e.target.value)
    }

    const parseParams = (text: string) => {
        const regex = /{{.*?}}/g
        const matches = text.match(regex)
        if (matches) {
            const paramNames = matches.map((match) => match.slice(2, -2))
            const paramValues = 
            setParams()
        } else {
            setParams([])
        }
    }

    const typeSelector = (param: string) => {
        return (
            <Tr>
                <Td>
                    <Button disabled={true}>{param}</Button>
                </Td>
                <Td>
                    <Select width={'auto'}>
                        <option value="string">String</option>
                        <option value="number">Number</option>
                        <option value="boolean">Boolean</option>
                    </Select>
                </Td>
            </Tr>
        )
    }

    const submitPrompt = () => {
        const data = {
            prompt: prompt,
            description: description,
            params: params,
        }
        console.log(data)
    }

    return (
        <Card margin={10} p={8}>
            <CardHeader>
                <Heading size={'md'}>Enter your prompt</Heading>
            </CardHeader>
            <CardBody>
                <HStack alignItems={'baseline'}>
                    <VStack flexGrow={'1'}>
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
                    <TableContainer>
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
                <Button onClick={submitPrompt}>
                    Create
                </Button>
            </CardBody>
        </Card>
    )
}

export default CreatePrompt
