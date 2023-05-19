import styled from '@emotion/styled';
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Select,
  Text,
  TextInput,
} from '@mantine/core';
import React from 'react';
import AreaChat from '../Charts/AreaChat';
import { areaChartData, areaChartDataTwo } from '../Charts/data';
import IconArrowDownload from '../IconComponents/IconArrowDownload';
import AreaChartFull from '../Charts/AreaChartFull';
import IconArrowDown from '../IconComponents/IconArrowDown';
import IconArrowCurrency from '../IconComponents/IconArrowCurrency';

const GridWrapper = styled(Box as any)`
  --auto-grid-min-size: 256px;
  display: grid;
  margin-top: 2rem;
  grid-gap: 1.5rem;
  height: 240px;
  position: static;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none !important;
  text-align: left;
  position: relative;
`;
const data = [
  {
    name: 'Page A',
    '₦': 4000,
    amt: '20 Aug',
  },
  {
    name: 'Page B',
    '₦': 3000,
    amt: '21 Aug',
  },
  {
    name: 'Page C',
    '₦': 2000,
    amt: '22 Aug',
  },
  {
    name: 'Page D',
    '₦': 2780,
    amt: '23 Aug',
  },
  {
    name: 'Page E',
    '₦': 1890,
    amt: '24 Aug',
  },
  {
    name: 'Page F',
    '₦': 2390,
    amt: '25 Aug',
  },
];

const LandingDashboard = () => {
  return (
    <>
      <Box mt={168} mb={20}>
        <Text fz={20} fw={500} color="#1A1A1A" sx={{ textAlign: 'left' }}>
          Sales overview
        </Text>
        <Grid mt={24}>
          <Grid.Col sm={6} md={4} lg={3}>
            <Box
              px={24}
              py={25}
              sx={{
                border: '1px solid #000000',
                borderRadius: '8px',
              }}
              mih={240}
            >
              <Text color="#000000" fw={400} fz={14} ff={'Inter, sans-serif'}>
                Today's sales
              </Text>
              <Text fw={500} fz={20} color="#000000">
                ₦1,652.50
              </Text>
            </Box>
          </Grid.Col>
          <Grid.Col sm={6} md={4} lg={3}>
            <Box
              px={24}
              py={25}
              sx={{
                background: '#000000',
                borderRadius: '8px',
              }}
              mih={240}
            >
              <Text
                sx={{
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                }}
                fw={400}
                fz={14}
                mb={20}
              >
                24 Aug - 01 Sep 21
              </Text>
              <AreaChat data={areaChartDataTwo} dataKey="amt" height={68} />
              <Text
                sx={{
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                }}
                fw={400}
                fz={14}
                mt={16}
              >
                This week
              </Text>
              <Text fw={500} fz={20} color="#ffff">
                ₦1,652.50
              </Text>
            </Box>
          </Grid.Col>
          <Grid.Col sm={6} md={4} lg={3}>
            <Box
              px={24}
              py={25}
              sx={{
                border: '1px solid #000000',
                borderRadius: '8px',
              }}
              mih={240}
            >
              <Text
                sx={{
                  color: '#000000',
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                }}
                fw={400}
                fz={14}
                mb={19}
              >
                24 Aug - 01 Sep 21
              </Text>
              <AreaChat data={areaChartData} dataKey="amt" height={68} />

              <Text
                sx={{
                  color: '#000000',
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                }}
                fw={400}
                fz={14}
                mt={18}
              >
                This week
              </Text>
              <Text fw={500} fz={20} color="#000000">
                ₦1,652.50
              </Text>
            </Box>
          </Grid.Col>
          <Grid.Col md={4} lg={3}>
            <Box
              px={24}
              py={25}
              sx={{
                border: '1px solid #000000',
                borderRadius: '8px',
              }}
              mih={240}
            >
              <Text
                sx={{
                  color: '#000000',
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                }}
                fw={400}
                fz={14}
                mb={19}
              >
                24 Aug - 01 Sep 21
              </Text>
              <AreaChat data={areaChartDataTwo} dataKey="amt" height={68} />

              <Text
                sx={{
                  color: '#000000',
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                }}
                fw={400}
                fz={14}
                mt={18}
              >
                This week
              </Text>
              <Text fw={500} fz={20} color="#000000">
                ₦1,652.50
              </Text>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid mt={{ sm: 0, md: 50 }}>
          <Grid.Col lg={9}>
            <Flex
              align={'center'}
              wrap={{ base: 'wrap', lg: 'nowrap' }}
              rowGap={10}
              display={{ base: 'none !important', md: 'flex !important' }}
            >
              <Flex align={'center'} columnGap={12} mr={24}>
                <Text color="#0A0A0A" fw={500} fz={20}>
                  Sales
                </Text>
                <Divider orientation="vertical" />
                <Text
                  color="#EF2C5A"
                  fw={600}
                  fz={14}
                  lh={'22px'}
                  sx={{ fontFamily: 'Inter, sans-serif' }}
                >
                  7 days
                </Text>
                <Flex align={'center'} columnGap={25}>
                  <Text color="#0A0A0A" fw={600} fz={14}>
                    30 days
                  </Text>

                  <Select
                    data={['USD', 'NGA', 'GBP']}
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      '& .mantine-Input-input': {
                        fontWeight: 500,
                      },
                    }}
                    defaultValue={'USD'}
                    rightSection={<IconArrowCurrency />}
                  />
                </Flex>
              </Flex>

              <Flex
                sx={{ flex: 1 }}
                columnGap={16}
                rowGap={16}
                display={{ base: 'none', lg: 'flex' }}
              >
                <Select
                  data={[
                    'rasheediskilu.dev@gmail.com',
                    'akannirasheed1996@gmail.com',
                  ]}
                  placeholder="Email"
                  sx={{ flex: 1, fontFamily: 'Inter, sans-serif' }}
                  rightSection={<IconArrowDown />}
                />
                <Button
                  leftIcon={<IconArrowDownload />}
                  sx={{
                    border: '1px solid #0A0A0A',
                    background: 'white',
                    '& .mantine-Button-label': {
                      fontSize: 12,
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: '15.6px',
                      fontStyle: 'normal',

                      color: '#0A0A0A',
                      borderRadius: '8px',
                    },
                  }}
                >
                  Download report
                </Button>
              </Flex>
            </Flex>
            <Box
              px={40}
              pb={12}
              pt={30}
              sx={{ border: '1px solid black', borderRadius: '8px' }}
              mt={4}
            >
              <AreaChartFull
                data={data}
                dataKey={'amt'}
                height={228}
                dataKeyTwo="₦"
              />
            </Box>
          </Grid.Col>
          <Grid.Col lg={3} mt={{ base: 0, md: 53 }}>
            <Box
              bg={'#EF2C5A'}
              pr={88}
              pl={24}
              py={24}
              color="white"
              sx={{ borderRadius: '8px' }}
              pos={'relative'}
              h={284}
            >
              <Text color="white" fz={20} fw={500} lh={'32px'}>
                KlashaWire - send money to businesses globally from Africa
              </Text>
              <Button
                bg={'#0A0A0A'}
                pos={'absolute'}
                bottom={24}
                left={24}
                sx={{
                  '& .mantine-Button-label': {
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '15.6px',
                    fontStyle: 'normal',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    padding: '24px 13px',
                  },
                }}
              >
                Send a Wire
              </Button>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
};

export default LandingDashboard;
