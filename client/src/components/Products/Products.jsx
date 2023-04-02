import Slider from 'react-slick';
import React from 'react';
import {
  Box,
  Text,
  Hide,
  Show,
  Flex,
  Grid,
  Select,
  Circle,
  Heading,
  GridItem,
  ListItem,
  Accordion,
  UnorderedList,
  AccordionItem,
  AccordionPanel,
  AccordionButton
} from '@chakra-ui/react';
import './products.styles.css';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { getProducts } from '../../redux/products/products.action';
import { useSelector, useDispatch } from 'react-redux';

const top_flex = [
  {
    long_title: 'wedding guest dresses',
    short_title: 'wedding',
    bg: 'https://images.ctfassets.net/5de70he6op10/54JigepSuZ2XyUc23wRjO3/b28c3fc1698914dd898dbe7ebcbd88c1/Dress_Toppers_Casual_Live_Text.jpg?w=630&q=80&fm=webp'
  },
  {
    long_title: 'casual dresses',
    short_title: 'casual',
    bg: 'https://images.ctfassets.net/5de70he6op10/6IfiRiqCR8n6Qtx499wHhk/045c88beb8c368c4ea7fa3c40174b796/Dress_Toppers_Wedding_Live_Text.jpg?w=630&q=80&fm=webp'
  },
  {
    long_title: 'party dresses',
    short_title: 'party',
    bg: 'https://images.ctfassets.net/5de70he6op10/4IFhnhWQZpy0mGYEQeDwyZ/7f5135fc723f65cebb8463a4a2d677b8/Dress_Toppers_Party_Live_Text.jpg?w=630&q=80&fm=webp'
  },
  {
    long_title: 'work dresses',
    short_title: 'work',
    bg: 'https://images.ctfassets.net/5de70he6op10/2ELHKaXeyUADzPjC50Pvwb/f2d5b7b073cbdadb782a81677da28c4f/Dress_Toppers_White_Live_Text.jpg?w=630&q=80&fm=webp'
  },
  {
    long_title: 'vacation dresses',
    short_title: 'vacation',
    bg: 'https://images.ctfassets.net/5de70he6op10/3QIqqv5gyl0Fn7LnO3AOw3/89ea89e1fb2fbadf64fa35da2a0ecdd8/Dress_Toppers_Black_Live_Text.jpg?w=630&q=80&fm=webp'
  },
  {
    long_title: 'formal dresses',
    short_title: 'formal',
    bg: 'https://images.ctfassets.net/5de70he6op10/4djTq9S22vqPWjObvUHDCE/2d9f1cc9d091a32a665fc00f52b5ebd2/Dress_Toppers_Formal_Live_Text.jpg?w=630&q=80&fm=webp'
  }
];

const dresses_links1 = [
  'Cocktail & Party Dresses',
  'Lonuge & Casual Dresses',
  'Little Black Dresses',
  'Little White Dresses',
  'Maxi Dresses',
  'Midi Dresses',
  'Mini & Tunic Dresses',
  'Jumpsuits'
];

const wedding_dresses_links = [
  'Black Tie Wedding',
  'Cocktail Wedding',
  'Casual Wedding',
  'Beach Wedding'
];

const dresses_links2 = [
  'Formal Dresses',
  'Petite Dresses',
  'Plus Dresses',
  'Bridesmaid Dresses',
  'Wedding Dresses'
];

const color_filters = {
  filter_name: 'Color',
  options: [
    'black',
    'blue',
    'pink',
    'green',
    'red',
    'orange',
    'purple',
    'yellow',
    'brown',
    'gold',
    'grey',
    'silver'
  ]
};

const filters = [
  {
    filter_name: 'Style',
    options: [
      'A-Line',
      'Active',
      'Blazer',
      'Blouse',
      'Caftan',
      'Column',
      'Duster',
      'Fit & Flare',
      'Fitted',
      'Gown',
      'Jumbsuit',
      'Kimono'
    ]
  },
  {
    filter_name: 'Sleeve Length',
    options: ['Sleeveless', 'Short Sleeve', 'Short Sleeve', '3/4 Sleeve']
  },
  {
    filter_name: 'Length',
    options: [
      'Midi',
      'Mini',
      'Maxi',
      'Knee Length',
      'High-Low',
      'Ankle',
      'Full-Length',
      'Long',
      'Short'
    ]
  },
  {
    filter_name: 'Occasion',
    options: [
      'Formal',
      'Bridal Shower',
      'Prom',
      'Bachelorrete Party',
      'Date Night',
      'Homecoming',
      'Graduation',
      'Work',
      'Workout'
    ]
  },
  {
    filter_name: 'Neckline',
    options: ['V-Neck', 'Square Neck', 'Crew Neck', 'Collared', 'Sccop Neck']
  },
  {
    filter_name: 'Size',
    options: [
      'XXS',
      'XS',
      'XS/S',
      'S',
      'S/M',
      'M',
      'M/L',
      'L',
      'L/XL',
      'XXL',
      'XXS P',
      'XS P',
      'S P',
      'M P',
      'L P',
      'XL P',
      '1X',
      '2X',
      '3X',
      '4X'
    ]
  },
  {
    filter_name: 'Size Type',
    options: ['STANDARD', 'PETITE', 'PLUS', 'REGULAR']
  },
  {
    filter_name: 'Price',
    options: [
      '$25 - $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'More than $500'
    ]
  },
  {
    filter_name: 'Brand',
    options: [
      'Sheetal Associates',
      'Amayra',
      'Visit the COTLAND Fashions Store',
      'AASK',
      'Vaararo',
      'Lymio',
      'BIBA',
      'DHRUVI TRENDZ',
      'KERI PERRY',
      'IRIS',
      "Sapi'S Candles: Awaken Your Desire...",
      'Homesake',
      'ThinkArtDecor',
      'Em5',
      'Bella Vita Organic'
    ]
  },
  { filter_name: 'Responsibly Made', options: ['Responsibly Made'] },
  { filter_name: 'In Stock', options: ['Ready to Ship'] }
];

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);

  return (
    <Box w={{ base: '88%', lg: '88%', xl: '92%' }} m={'auto'}>
      <Box my={{ base: 4, sm: 6, md: 8, lg: 10 }}>
        <Hide below={'md'}>
          <Grid
            justifyContent={'space-between'}
            alignItems={'center'}
            columnGap={6}
            templateColumns={{
              base: 'repeat(3, 1fr)',
              lg: 'repeat(6, 1fr)'
            }}
          >
            {top_flex.map((banner, i) => (
              <GridItem
                justifyContent={'center'}
                display={'inline-flex'}
                alignItems={'center'}
                bgImage={banner.bg}
                h={{ base: '80px', lg: '40px', xl: '60px' }}
                key={i}
              >
                <Hide below={'lg'}>
                  <Hide below={'xl'}>
                    <Heading
                      px={6}
                      py={2}
                      size={'xs'}
                      color={'gray.100'}
                      lineHeight={'tall'}
                      textAlign={'center'}
                      fontWeight={'medium'}
                      textTransform={'uppercase'}
                    >
                      {banner.long_title}
                    </Heading>
                  </Hide>

                  <Show below={'xl'}>
                    <Heading
                      px={6}
                      py={2}
                      size={'xs'}
                      color={'gray.100'}
                      lineHeight={'tall'}
                      textAlign={'center'}
                      fontWeight={'medium'}
                      textTransform={'uppercase'}
                    >
                      {banner.short_title}
                    </Heading>
                  </Show>
                </Hide>

                <Show below={'lg'}>
                  <Heading
                    px={8}
                    py={6}
                    size={'xs'}
                    color={'gray.100'}
                    lineHeight={'tall'}
                    textAlign={'center'}
                    fontWeight={'medium'}
                    textTransform={'uppercase'}
                  >
                    {banner.long_title}
                  </Heading>
                </Show>
              </GridItem>
            ))}
          </Grid>
        </Hide>

        <Show below={'md'}>
          <Box>
            <Slider infinite={false} slidesToShow={1} slidesToScroll={1}>
              {top_flex.map((banner, i) => (
                <Box h={'25vw'} key={i} bgImage={banner.bg}>
                  <Heading
                    px={8}
                    py={6}
                    h={'100%'}
                    display={'flex'}
                    color={'gray.100'}
                    lineHeight={'tall'}
                    textAlign={'center'}
                    fontWeight={'medium'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    textTransform={'uppercase'}
                    size={{ base: 'xs', sm: 'sm' }}
                  >
                    {banner.long_title}
                  </Heading>
                </Box>
              ))}
            </Slider>
          </Box>
        </Show>
      </Box>

      <Flex justifyContent={'center'} alignItems={'flex-start'} gap={12}>
        <Box w={'15%'} border={'2px solid blue'}>
          <Text
            pb={2}
            fontSize={'xs'}
            className={'heading'}
            borderBottom={'1px solid lightgrey'}
          >
            Browse by:
          </Text>

          <Box>
            <Text
              my={3}
              fontSize={'xs'}
              color={'#167A92'}
              cursor={'pointer'}
              className={'heading'}
              textDecor={'underline'}
              display={'inline-block'}
            >
              Dresses
            </Text>
          </Box>

          {dresses_links1.map((link, i) => (
            <Box key={i}>
              <Text
                py={1}
                fontSize={'xs'}
                className={'heading'}
                display={'inline-block'}
                _hover={{ cursor: 'pointer', textDecor: 'underline' }}
              >
                {link}
              </Text>
            </Box>
          ))}

          <UnorderedList>
            {wedding_dresses_links.map((link, i) => (
              <ListItem key={i} listStyleType={'none'}>
                <Box key={i}>
                  <Text
                    py={1}
                    fontSize={'xs'}
                    className={'heading'}
                    display={'inline-block'}
                    _hover={{ cursor: 'pointer', textDecor: 'underline' }}
                  >
                    {link}
                  </Text>
                </Box>
              </ListItem>
            ))}
          </UnorderedList>

          {dresses_links2.map((link, i) => (
            <Box key={i}>
              <Text
                py={1}
                fontSize={'xs'}
                className={'heading'}
                display={'inline-block'}
                _hover={{ cursor: 'pointer', textDecor: 'underline' }}
              >
                {link}
              </Text>
            </Box>
          ))}

          <Box>
            <Text mt={6} pb={2} fontSize={'xs'} className={'heading'}>
              Filter by:
            </Text>
          </Box>

          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    px={'none'}
                    _hover={{ color: '#167A92' }}
                    borderTop={'1px solid lightgrey'}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      <Heading
                        py={1}
                        size={'sm'}
                        fontWeight={'medium'}
                        className={'heading'}
                      >
                        {color_filters.filter_name}
                      </Heading>
                    </Box>

                    {isExpanded ? (
                      <MinusIcon fontSize='12px' />
                    ) : (
                      <AddIcon fontSize='12px' />
                    )}
                  </AccordionButton>
                  <AccordionPanel
                    px={'none'}
                    py={'none'}
                    // borderBottom={'1px solid lightgrey'}
                  >
                    {color_filters.options.map((color, i) => (
                      <Flex
                        px={6}
                        py={2}
                        mb={1}
                        gap={6}
                        key={i}
                        justify={'left'}
                        align={'center'}
                        border='1px solid white'
                        _hover={{
                          color: '#167A92',
                          border: '1px solid #167A92'
                        }}
                      >
                        <Circle size={3.5} bg={color} />
                        <Text
                          py={1}
                          fontSize={'xs'}
                          className={'heading'}
                          display={'inline-block'}
                          textTransform={'capitalize'}
                          _hover={{ cursor: 'pointer' }}
                        >
                          {color}
                        </Text>
                      </Flex>
                    ))}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          {filters.map((filter, i) => (
            <Accordion key={i} allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton px={'none'} _hover={{ color: '#167A92' }}>
                      <Box as='span' flex='1' textAlign='left'>
                        <Heading
                          py={1}
                          size={'sm'}
                          fontWeight={'medium'}
                          className={'heading'}
                        >
                          {filter.filter_name}
                        </Heading>
                      </Box>

                      {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                      ) : (
                        <AddIcon fontSize='12px' />
                      )}
                    </AccordionButton>

                    <AccordionPanel
                      px={'none'}
                      py={'none'}
                      borderBottom={'1px solid lightgrey'}
                    >
                      {filter.options.map((item, j) => (
                        <Flex
                          px={6}
                          py={2}
                          gap={6}
                          key={Date.now() * j}
                          justify={'left'}
                          align={'center'}
                          border='1px solid white'
                          _hover={{
                            color: '#167A92',
                            border: '1px solid #167A92'
                          }}
                        >
                          <Text
                            py={1}
                            fontSize={'xs'}
                            className={'heading'}
                            display={'inline-block'}
                            textTransform={'capitalize'}
                            _hover={{ cursor: 'pointer' }}
                          >
                            {item}
                          </Text>
                        </Flex>
                      ))}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          ))}
        </Box>

        <Box w={'100%'} border={'2px solid red'}>
          <Flex justify={'space-between'} align={'center'}>
            <Heading
              py={1}
              size={'md'}
              fontWeight={'normal'}
              className={'heading'}
            >
              Dresses
            </Heading>

            <Flex justify={'space-between'} align={'center'} gap={8}>
              <Flex
                justify={'space-between'}
                className={'heading'}
                align={'center'}
                gap={4}
              >
                <Text fontSize={'xs'}>Sort:</Text>
                <Select
                  w={28}
                  size={'sm'}
                  fontSize={'xs'}
                  color={'gray.600'}
                  borderRadius={'sm'}
                  border={'1px solid'}
                  borderColor={'gray.400'}
                  placeholder={'Featured'}
                  _hover={{ borderColor: 'gray.400' }}
                >
                  <option value='price-lth'>Price: Low to High</option>
                  <option value='price-htl'>Price: Hight to Low</option>
                  <option value='rating-htl'>Ratings: Hight to Low</option>
                  <option value='a-z'>A-Z</option>
                  <option value='z-a'>Z-A</option>
                </Select>
              </Flex>
              {/* <Pagination /> */}
              Pagination
            </Flex>
          </Flex>

          <Grid>
            <GridItem>
              <Box>Products</Box>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Products;
