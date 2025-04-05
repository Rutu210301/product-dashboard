import { CircularProgress } from '@mui/material';

export const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <CircularProgress />
    </div>
  );
};