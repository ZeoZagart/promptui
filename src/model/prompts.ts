export enum PromptParamType {
    String = 'string',
    Number = 'number',
    Boolean = 'boolean',
}

export type PromptParam = {
    name: string
    type: PromptParamType
}

export type PromptParamValue = {
    name: string
    value: string | number | boolean
}

export type Prompt = {
    id: string
    prompt: string
    desc: string
    params: PromptParam[]
}
