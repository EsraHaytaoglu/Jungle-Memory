import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import IconButton from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import { deepOrange } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


const Header = ({ moves, bestScore, handleRestart }) => {
  return (
    <div>
      <h1> Jungle Memory </h1>
      <Container>
        <div className="sub-header">
          <div className="moves">
            <span className="bold">Moves:</span>
            {moves}
          </div>
          <div className="reshuffle">
            <Box
              sx={{
                '& > :not(style)': {
                  m: 2,
                },
              }}
            >
              <IconButton aria-label="fingerprint" variant="contained" color="success" onClick={handleRestart}>
                <RefreshIcon sx={{ color: deepOrange[500], fontSize: 40 }} />
              </IconButton>
            </Box>
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span>Best Score:</span>
              {bestScore}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;