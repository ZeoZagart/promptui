import { Heading, Text } from '@chakra-ui/react'
import { useRouteError } from 'react-router-dom'
import { getError } from 'helpers/error'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)

    const errorMessage = getError(error).message

    return (
        <>
            <Heading>Oops, Somthing went wrong!</Heading>
            <Text>{errorMessage}</Text>
        </>
    )
}

export default ErrorPage
