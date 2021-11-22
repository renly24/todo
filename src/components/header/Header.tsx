import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Clock from './component/Clock';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
      <div className={styles.root}>
        <AppBar position="static" className={styles.app_bar}>
          <Toolbar className={styles.tool_bar}>
            <Typography variant="h6" className={styles.title}>
            Program 
            </Typography>
            <div className={styles.tool_bar}>
              <Clock />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
};

export default Header;
