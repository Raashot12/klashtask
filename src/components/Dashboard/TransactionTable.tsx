import React from 'react';
import { Text, Box, Flex } from '@mantine/core';
import styled from '@emotion/styled';
import Pagination from '../Shared/Pagination/Pagination';
import { usePagination } from '../Shared/Pagination/UsePagination';

const Table = styled.table`
  border-spacing: 0;
  font-size: 14px;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  thead {
    width: 100%;
    text-align: left;
  }
  thead > th {
    padding: 12px 12px;
    vertical-align: top;
  }

  td {
    padding: 12px 12px;
    vertical-align: top;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    color: #484848;
  }
  tr:hover {
    background-color: #f7f7f7;
    transition: all ease-in-out 0.5s;
    border-bottom: none;
  }
  tr {
    white-space: nowrap;
    overflow-x: auto;
  }
  td:hover {
    border-bottom: none;
  }

  th {
    font-weight: 600;
    color: #5f5f5f;
    font-family: 'General Sans';
    font-style: normal;
  }

  table,
  th,
  td {
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
    table-layout: fixed;
    white-space: nowrap;
    padding: 12px 12px;
  }
`;
const Wrapper = styled(Box as any)``;

const TransactionTable = () => {
  const { slicedData, pagination, prevPage, nextPage, changePage } =
    usePagination({
      itemsPerPage: 4,
      data: data,
      startFrom: 1,
    });
  return (
    <>
      <Wrapper
        sx={{ margin: '0 auto', width: '100%' }}
        p={16}
        className="container"
      >
        <div id="table" style={{ overflowX: 'auto' }}>
          <Table cellPadding="5" cellSpacing="4">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Source</th>
                <th>Customer email</th>
                <th>Amount</th>
                <th>Request date</th>
                <th>Status</th>
              </tr>
            </thead>
            <>
              {slicedData.map((value) => {
                return (
                  <tr key={value.transactionId}>
                    <td>{value.transactionId}</td>
                    <td>{value.customerName}</td>
                    <td>{value.telephone}</td>
                    <td>{value.amount}</td>
                    <td>{value.request}</td>
                    <td>{value.status}</td>
                  </tr>
                );
              })}
            </>
          </Table>
        </div>
        <Flex mt={16} justify={'flex-end'}>
          <Pagination
            idToClampTo="table"
            pagination={pagination}
            prevPage={prevPage}
            nextPage={nextPage}
            changePage={changePage}
          />
        </Flex>
      </Wrapper>
    </>
  );
};

export default TransactionTable;

const data = [
  {
    transactionId: 'GB124QWERTY12346',
    source: 'GTB',
    customerName: 'Mike Owen',
    amount: '$230.00',
    request: '24.08.2021',
    status: 'Pending',
    telephone: '0982764829',
  },
  {
    transactionId: 'CB328ABCEDF23416',
    source: 'UBA',
    customerName: 'Steve O Shassy',
    amount: '$480.00',
    request: '22.08.2021',
    status: 'Successful',
    telephone: '0982764829',
  },
  {
    transactionId: 'CB328ABCEDF23414',
    source: 'UBA',
    customerName: 'Steve O Shassy',
    amount: '$480.00',
    request: '22.08.2021',
    status: 'Pending',
    telephone: '0982764829',
  },
  {
    transactionId: 'GB124QWERTY12334',
    source: 'UBA',
    customerName: 'Steve O Shassy',
    amount: '$480.00',
    request: '22.08.2021',
    status: 'Successful',
    telephone: '0982764829',
  },
  {
    transactionId: 'GB424QWERTY12346',
    source: 'GTB',
    customerName: 'Mike Owen',
    amount: '$230.00',
    request: '24.08.2021',
    status: 'Pending',
    telephone: '0982764829',
  },
  {
    transactionId: 'C3238ABCEDF23416',
    source: 'UBA',
    customerName: 'Steve O Shassy',
    amount: '$480.00',
    request: '22.08.2021',
    status: 'Successful',
    telephone: '0982764829',
  },
  {
    transactionId: 'CB328ABRCDF23414',
    source: 'UBA',
    customerName: 'Steve O Shassy',
    amount: '$480.00',
    request: '22.08.2021',
    status: 'Pending',
    telephone: '0982764829',
  },
  {
    transactionId: 'GB324QWERTY12334',
    source: 'UBA',
    customerName: 'Steve O Shassy',
    amount: '$480.00',
    request: '22.08.2021',
    status: 'Successful',
    telephone: '0982764829',
  },
  {
    transactionId: 'GB124QWERTY12346',
    source: 'GTB',
    customerName: 'Mike Owen',
    amount: '$230.00',
    request: '24.08.2021',
    status: 'Pending',
    telephone: '0982764829',
  },
  {
    transactionId: 'CB328ABCEDF23516',
    source: 'UBA',
    customerName: 'Steve O Shassy',
    amount: '$480.00',
    request: '22.08.2021',
    status: 'Successful',
    telephone: '0982764829',
  },
  {
    transactionId: 'CB328ABCEDF143414',
    source: 'UBA',
    customerName: 'Steve O Shassy',
    amount: '$480.00',
    request: '22.08.2021',
    status: 'Pending',
    telephone: '0982764829',
  },
  {
    transactionId: 'GB124145ERTY12334',
    source: 'UBA',
    customerName: 'Steve O Shassy',
    amount: '$480.00',
    request: '22.08.2021',
    status: 'Successful',
    telephone: '0982764829',
  },
  {
    transactionId: 'GB42145ERTY12346',
    source: 'GTB',
    customerName: 'Mike Owen',
    amount: '$230.00',
    request: '24.08.2021',
    status: 'Pending',
    telephone: '0982764829',
  },
  {
    transactionId: 'C32314BCEDF23416',
    source: 'UBA',
    customerName: 'Steve O Shassy',
    amount: '$480.00',
    request: '22.08.2021',
    status: 'Successful',
    telephone: '0982764829',
  },
  {
    transactionId: 'CB3214ABRCDF23414',
    source: 'UBA',
    customerName: 'Steve O Shassy',
    amount: '$480.00',
    request: '22.08.2021',
    status: 'Pending',
    telephone: '0982764829',
  },
  {
    transactionId: 'GB3134QWERTY12334',
    source: 'UBA',
    customerName: 'Steve O Shassy',
    amount: '$480.00',
    request: '22.08.2021',
    status: 'Pending',
    telephone: '0982764829',
  },
];
