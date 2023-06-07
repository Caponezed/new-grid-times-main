import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { FAMILIES, QUERIES, COLORS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeButtonGroup>
          <Button>Subscribe</Button>
          <SubLink>Already a subscriber?</SubLink>
        </SubscribeButtonGroup>

      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const SubscribeButtonGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
      display: revert;
      position: relative;
      justify-self: end;
      align-self: center;
    }
`;

const SubLink = styled.a`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    position: absolute;
    margin-top: 8px;
    width: 100%;
    text-align: center;

    font-size: 0.875rem;
    font-style: italic;
    text-decoration: underline var(--color-gray-900);
    color: var(--color-gray-900);
  }
`;

// const SubscribeButton = styled(Button)`
//   padding: 12px 24px;
//   font-family: var(--font-family-sans-serif);
//   color: white;
//   text-transform: uppercase;
//   background-color: ${COLORS.primary};
//   border-radius: 4px;
// `;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    align-items: revert;
    justify-content: revert;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    margin-bottom: 72px;

  }
`;

export default Header;
