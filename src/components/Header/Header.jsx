import React from "react";

import { ContentHeader } from "./Header.style";

function Header({ children }) {
  return <ContentHeader>{children}</ContentHeader>;
}

export default Header;
