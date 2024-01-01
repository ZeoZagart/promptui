import {
    CreatePromptRequest,
    CreatePromptResponse,
    GetPromptResponse,
    SearchPromptsRequest,
    SearchPromptsResponse,
    UsePromptRequest,
    UsePromptResponse,
} from 'apis/model/prompts'

const baseUrl = import.meta.env.VITE_API_URL

/* eslint-disable @typescript-eslint/no-explicit-any */
async function handleResponse(response: Response): Promise<any> {
    if (!response.ok) {
        const body = await response.text()
        const err = new Error(`Error: ${response.status} ${body}`)
        console.log(err)
        throw err
    }
    return await response.json()
}

export const createPromptApi = async (
    request: CreatePromptRequest,
): Promise<CreatePromptResponse> => {
    const response = await fetch(`${baseUrl}/prompts`, {
        method: 'POST',
        body: JSON.stringify(request),
    })
    const body = await handleResponse(response)
    return body
}

export const getPromptApi = async (id: string): Promise<GetPromptResponse> => {
    const response = await fetch(`${baseUrl}/prompts/${id}`)
    const body = await handleResponse(response)
    return body
}

export const searchPromptApi = async (
    request: SearchPromptsRequest,
): Promise<SearchPromptsResponse> => {
    const response = await fetch(`${baseUrl}/prompts/find`, {
        method: 'POST',
        body: JSON.stringify(request),
    })
    const body = await handleResponse(response)
    return body
}

export const applyPromptApi = async (
    request: UsePromptRequest,
): Promise<UsePromptResponse> => {
    const response = await fetch(`${baseUrl}/prompts/use`, {
        method: 'POST',
        body: JSON.stringify(request),
    })
    const body = await handleResponse(response)
    return body
}
