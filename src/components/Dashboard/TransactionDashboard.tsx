import { Box, Button, Divider, Flex, Text, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import React from 'react';
import IconBack from '../IconComponents/IconBack';
import IconFilter from '../IconComponents/IconFilter';
import TransactionTable from './TransactionTable';

const TransactionDashboard = () => {
  return (
    <Box sx={{ border: '1px solid #F0F0F0', borderRadius: '8px' }} py={16}>
      <Text fw={500} fz={18} color="#0A0A0A" pl={14}>
        Transaction history
      </Text>
      <Divider orientation="horizontal" color="#F0F0F0" mt={24} />
      <Flex pl={14} pr={14} mt={8} justify={'space-between'}>
        <TextInput
          placeholder="Search"
          sx={{
            '.mantine-Input-input': {
              height: 40,
            },
          }}
          rightSection={<IconSearch height={16} width={16} />}
        />
        <Flex align={'center'} columnGap={16}>
          <Button
            rightIcon={<IconFilter />}
            sx={{
              width: '94px',
              border: '1px solid #0A0A0A',
              height: 40,
              background: '#ffff',
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
            Filter
          </Button>
          <Button
            sx={{
              width: '94px',
              border: '1px solid #0A0A0A',
              height: 40,
              background: '#ffff',
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
            Export
          </Button>
        </Flex>
      </Flex>
      <Divider orientation="horizontal" color="#F0F0F0" mt={8} />

      <TransactionTable />
    </Box>
  );
};

export default TransactionDashboard;
