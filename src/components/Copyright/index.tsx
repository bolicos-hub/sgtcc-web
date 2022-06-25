import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as C from "./constants";

interface Props {
  name?: string;
}

const Copyright: React.FC<Props> = ({ ...props }) => {
  const year = ` ${new Date().getFullYear()}.`;

  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }} {...props}>
      {C.TEXTS.COPYRIGHT}
      <Link color="inherit" href={C.LINKS.GITHUB} target="_blank" rel="noreferrer noopener">
        {C.TEXTS.VALUE}
      </Link>
      {year}
    </Typography>
  );
};

export default Copyright;
