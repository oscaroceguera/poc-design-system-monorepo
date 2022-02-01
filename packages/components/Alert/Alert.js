import React from 'react';
import Alert from '@oceb/core/node_modules/@mui/material/Alert';
import Stack from '@oceb/core/node_modules/@mui/material/Stack';

export default function ClipAlert() {
  return (
    <Stack data-testid="alert-element" sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
  );
}
