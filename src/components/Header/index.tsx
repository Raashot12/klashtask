import styled from '@emotion/styled';
import IconUser from '../IconComponents/IconUser';
import { Box, Container, Flex, Menu, createStyles } from '@mantine/core';
import IconArrowDown from '../IconComponents/IconArrowDown';
import {
  IconCalendar,
  IconMessage,
  IconPower,
  IconSettings,
  IconUserCircle,
  IconUsers,
} from '@tabler/icons';
import { useState } from 'react';
import IconHamburger from '../IconComponents/IconHamburger';

const HeaderContainer = styled(Box as any)`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 38px;
  border-bottom: 1px solid #ededed;
  background-color: #ffff;
  column-gap: 22px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
  }
`;
const HamburgerContainer = styled(Flex)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
const lang: string[] = ['En', 'Ar', 'Yr', 'Fr'];
const useStyles = createStyles(() => ({
  menuItem: {
    fontSize: 16,
    fontWeight: 500,
  },
}));
export default function Header({ toggleMobile }: { toggleMobile: () => void }) {
  const { classes } = useStyles();
  const [selectedLang, setSelectedLang] = useState<string>('En');
  return (
    <HeaderContainer>
      <HamburgerContainer align={'center'} onClick={toggleMobile}>
        <IconHamburger />
      </HamburgerContainer>
      <Flex align={'center'} columnGap={22}>
        <Menu
          classNames={{ item: classes.menuItem }}
          width={200}
          position="bottom-end"
        >
          <Menu.Target>
            <Flex align={'center'} columnGap={12} sx={{ cursor: 'pointer' }}>
              <IconUser />
              <IconArrowDown />
            </Flex>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item icon={<IconUserCircle />} sx={{ fontFamily: 'Inter' }}>
              Profile
            </Menu.Item>
            <Menu.Item icon={<IconMessage />} sx={{ fontFamily: 'Inter' }}>
              Messages
            </Menu.Item>

            <Menu.Item icon={<IconSettings />} sx={{ fontFamily: 'Inter' }}>
              Settings
            </Menu.Item>
            <Menu.Item
              icon={<IconPower />}
              sx={{ fontFamily: 'Inter' }}
              color="red.7"
            >
              Sign out
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Menu
          classNames={{ item: classes.menuItem }}
          width={50}
          position="bottom-end"
        >
          <Menu.Target>
            <Flex align={'center'} columnGap={10} sx={{ cursor: 'pointer' }}>
              <Box
                fw={600}
                fz={14}
                lh={'22px'}
                fs={'normal'}
                sx={{ fontFamily: 'Inter' }}
              >
                {selectedLang}
              </Box>
              <IconArrowDown />
            </Flex>
          </Menu.Target>
          <Menu.Dropdown>
            {lang.map((value) => (
              <Menu.Item
                key={value}
                onClick={() => setSelectedLang(value)}
                sx={{ fontFamily: 'Inter' }}
              >
                {value}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </HeaderContainer>
  );
}
