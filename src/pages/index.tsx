import { Center, Heading, Text } from '@chakra-ui/layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Center flexDirection="column">
      <Heading>Welcome to your new NextJS project</Heading>

      <Text>bootstrapped by NextJS Yeti Labs Starter</Text>
    </Center>
  )
}

export default Home
