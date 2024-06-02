import { Container, VStack, Heading, Text, Image, Box, IconButton, HStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Beauty Blog
        </Heading>
        <Image src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBibG9nJTIwaGVhZGVyfGVufDB8fHx8MTcxNzM2MjY4MXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Beauty Blog Header" />
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest Trends in Beauty
          </Heading>
          <Text fontSize="md">Stay updated with the latest trends in beauty. From skincare routines to makeup tips, we cover everything you need to know to look and feel your best.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Skincare Tips
          </Heading>
          <Image src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzfGVufDB8fHx8MTcxNzM2MjY4MXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Skincare Products" mb={4} />
          <Text fontSize="md">Discover the best skincare tips and tricks to keep your skin glowing and healthy. Learn about the latest products and how to use them effectively.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Makeup Tutorials
          </Heading>
          <Image src="https://images.unsplash.com/photo-1585049303349-6680e6179692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjB0dXRvcmlhbHxlbnwwfHx8fDE3MTczNjI2ODJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Makeup Tutorial" mb={4} />
          <Text fontSize="md">Follow our step-by-step makeup tutorials to achieve stunning looks for any occasion. From everyday makeup to glamorous evening looks, we've got you covered.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Beauty Photos
          </Heading>
          <VStack spacing={4}>
            <Image src="https://images.unsplash.com/photo-1514996937319-344454492b37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibGVuZGVyfGVufDB8fHx8MTcxNzM2MjY4MXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Beauty Photo 1" />
            <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibGVuZGVyfGVufDB8fHx8MTcxNzM2MjY4MXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Beauty Photo 2" />
            <Image src="https://images.unsplash.com/photo-1516728778615-2d590ea1856f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibGVuZGVyfGVufDB8fHx8MTcxNzM2MjY4MXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Beauty Photo 3" />
          </VStack>
        </Box>
        <HStack spacing={4} justify="center" mt={8}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
