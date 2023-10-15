export enum PromptParamType {
    String = 'string',
    Number = 'number',
    Boolean = 'boolean',
}

export type PromptParam = {
    name: string
    type: PromptParamType
}
