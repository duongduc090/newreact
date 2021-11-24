import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableCell  from '@mui/material/TableCell';
import { TablePaginationActions } from '../../component/tablePagination';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import { IconButton, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {StyledTableCell } from '../../utils/styles'


export default function Category(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const list = props.categories;
    const { token, user } = JSON.parse(localStorage.getItem('auth'));

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - list.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: '15px' }}>
                <Typography variant='h4'>Categories</Typography>
                <NavLink to="/admin/category/add" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" startIcon={<>+</>} style={{ marginBottom: 10 }}>
                        Add
                    </Button>
                </NavLink>
            </Grid>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : list
                        ).map((list, index) => (
                            <TableRow key={index}>
                                <TableCell style={{ width: 60 }} align="left">
                                    {index + 1}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {list.name}
                                </TableCell>
                                <TableCell style={{ width: 80 }} align="right" >
                                    <Stack alignItems="center" direction="row">
                                        <Tooltip title="Edit">
                                            <NavLink to={`/admin/category/${list._id}/edit`}>
                                                <IconButton>
                                                    <EditIcon fontSize='small' />
                                                </IconButton>
                                            </NavLink>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton onClick={() => props.onDelete2(list._id, user._id, token)}>
                                                <DeleteForeverIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 15, 20, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={list.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    );
}
