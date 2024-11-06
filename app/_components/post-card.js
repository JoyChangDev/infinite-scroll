import { Card, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

export default function PostCard() {
  return (
    <LinkBox
      m="10px"
      _hover={{ transform: 'scale(1.05)' }}
      transition="transform 500ms ease"
    >
      <Card.Root
        variant="elevated"
        maxW="sm"
        overflow="hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />
        <Card.Body gap="2">
          <LinkOverlay href="#">
            <Card.Title>Living room Sofa</Card.Title>x
          </LinkOverlay>
          <Card.Description>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces.
            </Text>
          </Card.Description>
        </Card.Body>
      </Card.Root>
    </LinkBox>
  );
}
