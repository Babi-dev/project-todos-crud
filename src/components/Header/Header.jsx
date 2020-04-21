import React from "react";

import { ContentHeader } from "./Header.style";

const Header = ({ children }) => {
  return <ContentHeader>{children}</ContentHeader>;
};

export default Header;
