import React from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

export const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles= { css`
          ${emotionNormalize}
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
          }
      `}
    />
  );
}