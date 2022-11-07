import React from 'react';
import {
  Card, Container, useTheme, Typography, CardContent, CardActions,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Grid from '@mui/material/Unstable_Grid2';
import WifiSettingsCard from '../../components/wifi/WifiSettingsCard';

export default function Settings() {
  const theme = useTheme();

  return (
    <div>
      <Container sx={{ mt: theme.spacing(2) }}>
        <Grid container columns={{ xs: 1, sm: 2 }} spacing={2}>
          <Grid item xs={1}>
            <WifiSettingsCard />
          </Grid>
          <Grid item xs={1}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  OTA Update
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <input hidden accept="file/*.bin" type="file" />
                  <UploadFileIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
