/* eslint-disable @typescript-eslint/no-explicit-any */
export function getError(error: any): Error {
    if (typeof error === 'string') {
        return Error(error)
    }
    if (error instanceof Error) {
        return error
    }
    if ('message' in error) {
        return Error(error.message)
    }
    if ('statusText' in error) {
        return Error(error.statusText)
    }
    try {
        return Error(JSON.stringify(error))
    } catch (e) {
        return Error('Unknown error')
    }
}
