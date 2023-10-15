import { PromptParam } from 'model/prompts'

export type CreatePromptRequest = {
    prompt: string
    desc: string
    params: PromptParam[]
}
