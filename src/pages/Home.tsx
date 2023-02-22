import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteUserStart, loadUsersStart } from '../redux/action/actions';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { users } = useSelector((state: any) => state.data);

  useEffect(() => {
    dispatch(loadUsersStart({ page: 1, perPage: 5 }));
  }, [dispatch]);

  const handleDelete = (userId: any) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteUserStart(userId));
      toast.success('Delete User Successfully');
    }
  };
  const handleEdit = (userId: any) => {
    navigate(`/editUser/${userId}`);
  };

  const handlePagination = (event: any, value: number) => {
    dispatch(loadUsersStart({ page: value, perPage: 5 }));
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '50px',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: '15px' }}
          onClick={() => navigate('/addUser')}
        >
          Add User
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">ID</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Gender</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item: any) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.id}
                </StyledTableCell>
                <StyledTableCell align="left">{item.name}</StyledTableCell>
                <StyledTableCell align="left">{item.email}</StyledTableCell>
                <StyledTableCell align="left">{item.gender}</StyledTableCell>
                <StyledTableCell align="left">{item.status}</StyledTableCell>
                <StyledTableCell align="left">
                  <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="primary" onClick={() => handleEdit(item.id)}>
                      Edit
                    </Button>
                    <Button variant="contained" color="error" onClick={() => handleDelete(item.id)}>
                      Delete
                    </Button>
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} sx={{ alignItems: 'center', padding: '30px 0' }}>
        <Pagination count={5} onChange={handlePagination} color="primary" />
      </Stack>
    </Container>
  );
}
