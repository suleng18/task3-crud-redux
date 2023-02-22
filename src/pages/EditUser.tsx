import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { editUserStart, loadUsersStart } from '../redux/action/actions';

export default function AddEditUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    gender: 'female',
    status: 'active',
  });

  const { users } = useSelector((state: any) => state.data);

  const id = useParams();

  const handleEdit = () => {
    if (user.name || user.email) {
      dispatch(editUserStart({ id, user }));
      setTimeout(() => navigate('/'), 500);
      toast.success('Edit User Successfully');
    }
  };

  useEffect(() => {
    if (users) {
      const detailUser = users.find((item: any) => item.id === Number(id.id));
      setUser({ ...detailUser });
    }
  }, [id.id, users]);

  useEffect(() => {
    dispatch(loadUsersStart({ page: 1, perPage: 50 }));
  }, [dispatch]);

  return (
    <Container sx={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center">
        Edit User
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '45ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="text"
            value={user.name || ''}
            onChange={(event: any) => setUser({ ...user, name: event.target.value })}
            placeholder="Name"
          />
          <br />
          <TextField
            type="email"
            value={user.email || ''}
            onChange={(event: any) => setUser({ ...user, email: event.target.value })}
            placeholder="Email"
          />
          <br />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={user.gender || ''}
              onChange={(event: any) => setUser({ ...user, gender: event.target.value })}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={user.status || ''}
              onChange={(event: any) => setUser({ ...user, status: event.target.value })}
            >
              <FormControlLabel value="active" control={<Radio />} label="Active" />
              <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
            </RadioGroup>
          </FormControl>
          <br />
          <br />
          <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '120px', marginRight: '15px' }}
              onClick={() => handleEdit()}
            >
              Edit User
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ width: '120px' }}
              onClick={() => navigate('/')}
            >
              Back
            </Button>
          </Container>
        </Box>
      </Box>
    </Container>
  );
}
