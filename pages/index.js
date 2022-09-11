import Head from 'next/head'
import {useColorMode, Heading, Text, Flex, Stack, Button} from '@chakra-ui/react';

import Container from "../components/Container";

export default function Index() {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
    <Head>
      <title>Home - Zikri Azzuri</title>
    </Head>
    <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems='flex-start'
      m='0 auto 4rem auto'
      maxWidth="700px"
      px={2}
    >
      <Flex
        flexDirection='column'
        justifyContent='flex-start'
        alignItems='flex-start'
        maxWidth="700px"
      >
        <Heading mb={2}>Hi, I am Zikri Azzuri</Heading>
        <Text color={colorSecondary[colorMode]}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
        <Button data-splitbee-event="Button Click" data-splitbee-event-type="Resume">View Resume</Button>
      </Flex>
    </Stack>
    </Container>
  )
}
