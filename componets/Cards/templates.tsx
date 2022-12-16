import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, chakra, Badge, Text, Link } from "@chakra-ui/react";
import { deflate } from "zlib";

const Templates = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Flex>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
        >
          <Image
            src={property.imageUrl}
            alt={property.imageAlt}
            roundedTop="lg"
          />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge rounded="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
            </Box>

            <Text
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {property.title}
            </Text>

            <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          mx={{
            lg: 8,
          }}
          display={{
            lg: "flex",
          }}
          maxW={{
            lg: "5xl",
          }}
          shadow={{
            lg: "lg",
          }}
          rounded={{
            lg: "lg",
          }}
        >
          <Box
            w={{
              lg: "50%",
            }}
          >
            <Box
              h={{
                base: 64,
                lg: "full",
              }}
              rounded={{
                lg: "lg",
              }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl",
            }}
            w={{
              lg: "50%",
            }}
          >
            <chakra.h2
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
            >
              Build Your New{" "}
              <chakra.span
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}
              >
                Idea
              </chakra.span>
            </chakra.h2>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </chakra.p>

            <Box mt={8}>
              <Link
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{
                  bg: "gray.800",
                }}
              >
                Start Now
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Templates;
