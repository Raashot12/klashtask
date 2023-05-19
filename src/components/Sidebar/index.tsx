import styled from '@emotion/styled';
import KlashaLogo from '../IconComponents/KlashaLogo';
import { Box, Button, Group, Stack, Text, Flex } from '@mantine/core';
import IconDashboard from '../IconComponents/IconDashboard';
import IconBalance from '../IconComponents/IconBalance';
import IconTransaction from '../IconComponents/IconTransaction';
import IconAnalytics from '../IconComponents/IconAnalytics';
import IconMarketing from '../IconComponents/IconMarketing';
import IconExchangeRate from '../IconComponents/IconExchangeRate';
import IconCart from '../IconComponents/IconCart';
import IconPaymentLink from '../IconComponents/IconPaymentLink';
import IconWire from '../IconComponents/IconWire';
import IconQuestion from '../IconComponents/IconQuestion';
import IconBack from '../IconComponents/IconBack';
import IconQuestionMark from '../IconComponents/IconQuestionMark';
import IconExpand from '../IconComponents/IconExpand';
import { useState } from 'react';
import { useRouter } from 'next/router';
import IconHamburger from '../IconComponents/IconHamburger';

type SidebarProps = {
  isOpened: boolean;
  handleToggle: () => void;
  toggleMobile: () => void;
  mobileShow: boolean;
};
type SidebarContainerProps = {
  isOpened: boolean;
  mobileShow: boolean;
};
export const SidebarContainer = styled.aside<SidebarContainerProps>`
  background: #fffbf7;
  width: 280px;
  transition: width 0.5s;
  overflow: hidden;
  text-align: left;
  padding-left: 48px;
  padding-top: 30px;
  height: 100vh;
  z-index: 999;
  flex-shrink: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  position: fixed;
  ${({ isOpened }) =>
    isOpened &&
    `width: 90px;
    padding-left: 30px;
    .text-label{
      display: none;
    }
   @media (max-width: 768px) {
    width: 0px;
    padding: 0px;
  }
  }
  `}
  @media (max-width: 768px) {
    width: 0px;
    transition: width 0.2s;
    padding-left: 0px !important;
    ${({ mobileShow }) =>
      mobileShow &&
      `width: 280px!important;
      display: flex;
      padding-left: 32px !important;
      padding-top: 15px;
      transition: width 0.2s;

  }
  `}
  }
`;
const ButtonContainer = styled(Box as any)`
  @media (max-width: 768px) {
    display: none;
  }
`;
const OverFlowBox = styled(Box as any)`
  ::-webkit-scrollbar {
    width: 7px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #a5aaad;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #0a0a0a;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ef2c5a;
  }
`;
const GroupContainer = styled(Group)`
  &.hovering-state:hover {
    color: #ef2c5a;
    .text-label {
      font-weight: 600;
    }
  }
  & .active {
    color: #ef2c5a;
    font-weight: 600;
  }
`;
const HamburgerContainer = styled(Flex)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
const LogoContainer = styled(Box as any)`
  display: none;
  @media (min-width: 768.1px) {
    display: block;
  }
`;

export default function Sidebar({
  isOpened,
  handleToggle,
  mobileShow,
  toggleMobile,
}: SidebarProps) {
  const [itemHovered, setItemHovered] = useState<string | null>(null);

  const handleMouseHover = (param: string | null) => {
    setItemHovered(param);
  };

  const handleMouseOut = () => {
    setItemHovered(null);
  };
  const router = useRouter();
  return (
    <SidebarContainer isOpened={isOpened} mobileShow={mobileShow}>
      <LogoContainer sx={{ flexShrink: 0 }}>
        <KlashaLogo full={!isOpened} />
      </LogoContainer>
      <HamburgerContainer onClick={toggleMobile}>
        <IconHamburger />
      </HamburgerContainer>
      <OverFlowBox
        mt={53}
        sx={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}
      >
        <Box>
          <Text
            color="#8D8D8D"
            fw={500}
            sx={{ fontFamily: 'General Sans' }}
            className="text-label"
          >
            Main pages
          </Text>
          <Stack spacing={18} mt={16} color="#0A0A0A">
            <GroupContainer
              spacing={8}
              sx={{ cursor: 'pointer' }}
              align="center"
              className="hovering-state"
              onMouseOver={() => handleMouseHover('Dashboard')}
              onMouseOut={handleMouseOut}
              onClick={() => router.push('/dashboard')}
            >
              <IconDashboard
                active={
                  itemHovered === 'Dashboard' ||
                  router.pathname === '/dashboard'
                }
              />
              <Text
                fw={400}
                sx={{ fontFamily: 'Inter, sans-serif' }}
                className={
                  router.pathname === '/dashboard'
                    ? 'active text-label'
                    : 'text-label not-active'
                }
              >
                Dashboard
              </Text>
            </GroupContainer>
            <GroupContainer
              spacing={8}
              sx={{ cursor: 'pointer' }}
              align="center"
              className="hovering-state"
              onMouseOver={() => handleMouseHover('Balances')}
              onMouseOut={handleMouseOut}
              onClick={() => router.push('/dashboard/balances')}
            >
              <IconBalance
                active={
                  itemHovered === 'Balances' ||
                  router.pathname === '/dashboard/balances'
                }
              />
              <Text
                fw={400}
                sx={{ fontFamily: 'Inter, sans-serif' }}
                className={
                  router.pathname === '/dashboard/balances'
                    ? 'active text-label'
                    : 'text-label not-active'
                }
              >
                Balances
              </Text>
            </GroupContainer>
            <GroupContainer
              spacing={12}
              sx={{ cursor: 'pointer' }}
              align="center"
              className="hovering-state"
              onMouseOver={() => handleMouseHover('Transactions')}
              onMouseOut={handleMouseOut}
              onClick={() => router.push('/dashboard/transactions')}
            >
              <IconTransaction
                active={
                  itemHovered === 'Transactions' ||
                  router.pathname === '/dashboard/transactions'
                }
              />
              <Text
                fw={400}
                sx={{ fontFamily: 'Inter, sans-serif' }}
                className={
                  router.pathname === '/dashboard/transactions'
                    ? 'active text-label'
                    : 'text-label not-active'
                }
              >
                Transactions
              </Text>
            </GroupContainer>
            <GroupContainer
              spacing={10}
              sx={{ cursor: 'pointer' }}
              align="center"
              className="hovering-state"
              onMouseOver={() => handleMouseHover('Analytics')}
              onMouseOut={handleMouseOut}
              onClick={() => router.push('/dashboard/analytics')}
            >
              <IconAnalytics
                active={
                  itemHovered === 'Analytics' ||
                  router.pathname === '/dashboard/analytics'
                }
              />
              <Text
                fw={400}
                sx={{ fontFamily: 'Inter, sans-serif' }}
                className={
                  router.pathname === '/dashboard/analytics'
                    ? 'active text-label'
                    : 'text-label not-active'
                }
              >
                Analytics
              </Text>
            </GroupContainer>
            <GroupContainer
              spacing={11}
              sx={{ cursor: 'pointer' }}
              align="center"
              className="hovering-state"
              onMouseOver={() => handleMouseHover('Marketing')}
              onMouseOut={handleMouseOut}
              onClick={() => router.push('/dashboard/marketing')}
            >
              <IconMarketing
                active={
                  itemHovered === 'Marketing' ||
                  router.pathname === '/dashboard/marketing'
                }
              />
              <Text
                fw={400}
                sx={{ fontFamily: 'Inter, sans-serif' }}
                className={
                  router.pathname === '/dashboard/marketing'
                    ? 'active text-label'
                    : 'text-label not-active'
                }
              >
                Marketing
              </Text>
            </GroupContainer>
            <GroupContainer
              spacing={14}
              sx={{ cursor: 'pointer' }}
              align="center"
              className="hovering-state"
              onMouseOver={() => handleMouseHover('Exchange rates')}
              onMouseOut={handleMouseOut}
              onClick={() => router.push('/dashboard/exchange')}
            >
              <IconExchangeRate
                active={
                  itemHovered === 'Exchange rates' ||
                  router.pathname === '/dashboard/exchange'
                }
              />
              <Text
                fw={400}
                sx={{ fontFamily: 'Inter, sans-serif' }}
                className={
                  router.pathname === '/dashboard/exchange'
                    ? 'active text-label'
                    : 'text-label not-active'
                }
              >
                Exchange rates
              </Text>
            </GroupContainer>
          </Stack>
        </Box>
        <Box mt={34}>
          <Text
            color="#8D8D8D"
            fw={500}
            sx={{ fontFamily: 'General Sans' }}
            className="text-label"
          >
            Accept payments
          </Text>
          <Stack spacing={18} mt={16} color="#0A0A0A">
            <GroupContainer
              spacing={8}
              sx={{ cursor: 'pointer' }}
              align="center"
              className="hovering-state"
              onMouseOver={() => handleMouseHover('Checkout')}
              onMouseOut={handleMouseOut}
              onClick={() => router.push('/dashboard/checkout')}
            >
              <IconCart
                active={
                  itemHovered === 'Checkout' ||
                  router.pathname === '/dashboard/checkout'
                }
              />
              <Text
                fw={400}
                sx={{ fontFamily: 'Inter, sans-serif' }}
                className={
                  router.pathname === '/dashboard/checkout'
                    ? 'active text-label'
                    : 'text-label not-active'
                }
              >
                Checkout
              </Text>
            </GroupContainer>
            <GroupContainer
              spacing={8}
              sx={{ cursor: 'pointer' }}
              align="center"
              className="hovering-state"
              onMouseOver={() => handleMouseHover('Payment Links')}
              onMouseOut={handleMouseOut}
              onClick={() => router.push('/dashboard/payment')}
            >
              <IconPaymentLink
                active={
                  itemHovered === 'Payment Links' ||
                  router.pathname === '/dashboard/payment'
                }
              />
              <Text
                fw={400}
                sx={{ fontFamily: 'Inter, sans-serif' }}
                className={
                  router.pathname === '/dashboard/payment'
                    ? 'active text-label'
                    : 'text-label not-active'
                }
              >
                Payment Links
              </Text>
            </GroupContainer>
          </Stack>
        </Box>
        <Box mt={32}>
          <Text
            color="#8D8D8D"
            fw={500}
            sx={{ fontFamily: 'General Sans' }}
            className="text-label"
          >
            Send payments
          </Text>
          <Stack spacing={18} mt={16} color="#0A0A0A">
            <GroupContainer
              spacing={8}
              sx={{ cursor: 'pointer' }}
              align="center"
              className="hovering-state"
              onMouseOver={() => handleMouseHover('Wire')}
              onMouseOut={handleMouseOut}
              onClick={() => router.push('/dashboard/wire')}
            >
              <IconWire
                active={
                  itemHovered === 'Wire' ||
                  router.pathname === '/dashboard/wire'
                }
              />
              <Text
                fw={400}
                sx={{ fontFamily: 'Inter, sans-serif' }}
                className={
                  router.pathname === '/dashboard/wire'
                    ? 'active text-label'
                    : 'text-label not-active'
                }
              >
                Wire
              </Text>
            </GroupContainer>
          </Stack>
        </Box>
      </OverFlowBox>
      <Stack mt={35}>
        {isOpened ? (
          <Flex
            sx={{ borderRadius: '50%' }}
            bg={'#EF2C5A'}
            w={'48px'}
            h={'48px'}
            align={'center'}
            justify={'center'}
          >
            <IconQuestionMark />
          </Flex>
        ) : (
          <Button
            leftIcon={<IconQuestion />}
            mih={40}
            w={'120px'}
            sx={{
              borderRadius: '39px',
              backgroundColor: '#EF2C5A',
              '& .mantine-Button-label': {
                fontSize: 12,
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                lineHeight: '15.6px',
                fontStyle: 'normal',
              },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Support
          </Button>
        )}
        <ButtonContainer>
          {isOpened ? (
            <Flex
              sx={{
                borderRadius: '8px',
                border: '1px solid #0A0A0A',
                cursor: 'pointer',
              }}
              bg={'#FFFBF7'}
              w={'48px'}
              h={'48px'}
              align={'center'}
              justify={'center'}
              onClick={handleToggle}
            >
              <IconExpand />
            </Flex>
          ) : (
            <Button
              leftIcon={<IconBack />}
              sx={{
                width: '120px',
                border: '1px solid #0A0A0A',
                background: '#FFFBF7',
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
              onClick={handleToggle}
            >
              Hide panel
            </Button>
          )}
        </ButtonContainer>
      </Stack>
    </SidebarContainer>
  );
}
