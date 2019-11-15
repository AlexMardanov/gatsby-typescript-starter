import * as React from 'react';
import { css } from '@emotion/core';

import { Image } from '../Image';
import { AppContext } from '../../context/AppContext';

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  const { isDarkTheme, toggleDarkTheme } = React.useContext(AppContext);

  const imageStyles = css`
    width: 150px;
  `;

  const containerStyles = css`
    margin: 0 auto;
    max-width: 600px;
    background: ${isDarkTheme ? 'black' : 'white'};
    color: ${isDarkTheme ? 'white' : 'black'};
  `;

  return (
    <div css={containerStyles}>
      <Image filename="gatsby-icon.png" css={imageStyles} />

      <button onClick={toggleDarkTheme}>Change theme color</button>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};
