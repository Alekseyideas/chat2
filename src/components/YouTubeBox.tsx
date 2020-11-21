import React from 'react';
import styled from 'styled-components';

export const YouTubeBox = (info: any) => {
  if (info.kind === 1) {
    return (
      <WrapperS2>
        <iframe
          title='Yt2'
          width='100%'
          height='100%'
          src={info.url}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </WrapperS2>
    );
  } else {
    return (
      <WrapperS cw={info.cw}>
        <iframe
          title='Yt'
          width='100%'
          height='100%'
          src={info.url}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </WrapperS>
    );
  }
};

const WrapperS = styled.div<{ cw?: boolean }>`
  ${({ cw }) =>
    cw
      ? `
   min-width: 40%;
  `
      : `min-width: 70%;`}
  @media screen and (max-width: 993px) {
    iframe {
      min-height: 30vh;
    }
  }
`;

const WrapperS2 = styled.div`
  width: 100%;
  height: 600px;
  @media screen and (max-width: 993px) {
    iframe {
      min-height: 30vh;
    }
  }
`;
