import React from 'react'
import styled, { css } from 'styled-components/macro'

export const Glow = css`
  // animation: glow 10s ease-in-out infinite;
  // -webkit-animation: glow 10s ease-in-out infinite;

  //box-shadow: 0 0 20px rgba(230, 230, 230, 0.1), 0 0 30px rgba(230, 230, 230, 0.1), 0 0 40px rgba(230, 230, 230, 0.1),
  //  0 0 50px rgba(230, 230, 230, 0.1), 0 0 60px rgba(230, 230, 230, 0.1), 0 0 70px rgba(230, 230, 230, 0.1),
  //  0 0 80px rgba(230, 230, 230, 0.1);

  box-shadow: 0 0 10px rgba(230, 230, 230, 0.1), 0 0 15px rgba(230, 230, 230, 0.1), 0 0 20px rgba(230, 230, 230, 0.1),
    0 0 25px rgba(230, 230, 230, 0.1), 0 0 30px rgba(230, 230, 230, 0.1), 0 0 45px rgba(230, 230, 230, 0.1),
    0 0 40px rgba(230, 230, 230, 0.1);

  @keyframes glow {
    0% {
      box-shadow: 0 0 5px rgba(230, 230, 230, 0.1), 0 0 8px rgba(230, 230, 230, 0.1), 0 0 10px rgba(230, 230, 230, 0.1),
        0 0 17px rgba(230, 230, 230, 0.1), 0 0 15px rgba(230, 230, 230, 0.1), 0 0 18px rgba(230, 230, 230, 0.1),
        0 0 20px rgba(230, 230, 230, 0.1);
    }
    50% {
      //  box-shadow: 0 0 20px rgba(230, 230, 230, 0.1), 0 0 30px rgba(230, 230, 230, 0.1), 0 0 40px rgba(230, 230, 230, 0.1),
      //  0 0 50px rgba(230, 230, 230, 0.1), 0 0 60px rgba(230, 230, 230, 0.1), 0 0 70px rgba(230, 230, 230, 0.1),
      //  0 0 80px rgba(230, 230, 230, 0.1);
      //box-shadow: 0 0 20px rgba(230, 230, 230, 0.15), 0 0 30px rgba(230, 230, 230, 0.15),
      //  0 0 40px rgba(230, 230, 230, 0.15), 0 0 50px rgba(230, 230, 230, 0.2), 0 0 60px rgba(230, 230, 230, 0.2),
      //  0 0 70px rgba(230, 230, 230, 0.3), 0 0 80px rgba(230, 230, 230, 0.3);
      box-shadow: 0 0 20px rgba(230, 230, 230, 0.1), 0 0 30px rgba(230, 230, 230, 0.1), 0 0 40px rgba(230, 230, 230, 0.1),
        0 0 50px rgba(230, 230, 230, 0.1), 0 0 60px rgba(230, 230, 230, 0.1), 0 0 70px rgba(230, 230, 230, 0.1),
        0 0 80px rgba(230, 230, 230, 0.1);
    }
    100% {
      //box-shadow: 0 0 20px rgba(230, 230, 230, 0.1), 0 0 30px rgba(230, 230, 230, 0.1), 0 0 40px rgba(230, 230, 230, 0.1),
      //  0 0 50px rgba(230, 230, 230, 0.1), 0 0 60px rgba(230, 230, 230, 0.1), 0 0 70px rgba(230, 230, 230, 0.1),
      //  0 0 80px rgba(230, 230, 230, 0.1);
      //box-shadow: 0 0 10px rgba(230, 230, 230, 0.1), 0 0 15px rgba(230, 230, 230, 0.1), 0 0 20px rgba(230, 230, 230, 0.1),
      //  0 0 25px rgba(230, 230, 230, 0.1), 0 0 30px rgba(230, 230, 230, 0.1), 0 0 45px rgba(230, 230, 230, 0.1),
      //  0 0 40px rgba(230, 230, 230, 0.1);
      box-shadow: 0 0 5px rgba(230, 230, 230, 0.1), 0 0 8px rgba(230, 230, 230, 0.1), 0 0 10px rgba(230, 230, 230, 0.1),
        0 0 17px rgba(230, 230, 230, 0.1), 0 0 15px rgba(230, 230, 230, 0.1), 0 0 18px rgba(230, 230, 230, 0.1),
        0 0 20px rgba(230, 230, 230, 0.1);
      //box-shadow: 0 0 20px rgba(230, 230, 230, 0.2), 0 0 30px rgba(230, 230, 230, 0.2), 0 0 40px rgba(230, 230, 230, 0.2),
      //  0 0 50px rgba(230, 230, 230, 0.6), 0 0 60px rgba(230, 230, 230, 0.6), 0 0 70px rgba(230, 230, 230, 0.6),
      //  0 0 80px rgba(230, 230, 230, 0.6);
    }
  }

  @-webkit-keyframes glow {
    0% {
      //box-shadow: 0 0 20px rgba(230, 230, 230, 0.1), 0 0 30px rgba(230, 230, 230, 0.1), 0 0 40px rgba(230, 230, 230, 0.1),
      //0 0 50px rgba(230, 230, 230, 0.1), 0 0 60px rgba(230, 230, 230, 0.1), 0 0 70px rgba(230, 230, 230, 0.1),
      //0 0 80px rgba(230, 230, 230, 0.1);
    }
    //50% {
    //  box-shadow: 0 0 20px 3px rgba(230, 0, 122, 0.4) inset;
    //}
    100% {
      //box-shadow: 0 0 20px rgba(230, 230, 230, 0.2), 0 0 30px rgba(230, 230, 230, 0.2), 0 0 40px rgba(230, 230, 230, 0.2),
      //0 0 50px rgba(230, 230, 230, 0.6), 0 0 60px rgba(230, 230, 230, 0.6), 0 0 70px rgba(230, 230, 230, 0.6),
      //0 0 80px rgba(230, 230, 230, 0.6);
    }
  }
`

export const BodyWrapper = styled.div<{ margin?: string }>`
  position: relative;
  margin-top: ${({ margin }) => margin ?? '0px'};
  max-width: 480px;
  width: 100%;
  background: ${({ theme }) => `${theme.dark2}`};
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid rgba(187, 187, 187, 0.7);
  backdrop-filter: blur(4px) saturate(150%);
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, ...rest }: { children: React.ReactNode }) {
    return <BodyWrapper {...rest}>{children}</BodyWrapper>
}
