import { Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { AppContext } from '../context/Context';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const { login, showErrorToast } = useContext(AppContext);

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!number || !password) {
      showErrorToast('Please fill in all fields');
      return;
    }
    const userData = { number, password };
    login(userData);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-4 rounded-md shadow-lg">
        <h1 className="text-primary-100 text-2xl sm:text-3xl font-semibold mb-5">
          {t('login')}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <TextField
              label={t('mobile-number')}
              variant="outlined"
              fullWidth
              margin="normal"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
