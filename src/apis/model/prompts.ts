import { PromptParamValue, PromptParam } from 'model/prompts'

export type CreatePromptRequest = {
    text: string
    desc: string
    params: PromptParamValue[]
}

export type CreatePromptResponse = {
    id: string
    success: boolean
    url: string
}

export type GetPromptRequest = {
    id: number
}

export type GetPromptResponse = {
    id: string
    desc: string
    params: PromptParam[]
}

export type SearchPromptsRequest = {
    query: string
    offset?: number
    page_size?: number
}

export type SearchPromptsResponse = {
    prompts: GetPromptResponse[]
    next_offsite: number
}

export type UsePromptRequest = {
    id: string
    params: PromptParamValue[]
}

export type UsePromptResponse = {
    result: string
}
