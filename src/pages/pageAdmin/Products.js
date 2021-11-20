import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TablePaginationActions } from '../../component/tablePagination';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledMenu } from '../../utils/StyleMenu';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function Products(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const list = props.productList;
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
            <NavLink to="/admin/product/add" style={{ textDecoration: 'none' }}>
                <Button variant="contained" startIcon={<>+</>} style={{ marginBottom: 10 }}>
                    ADD
                </Button>
            </NavLink>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Price&nbsp;($)</StyledTableCell>
                            <StyledTableCell align="left">Quantity</StyledTableCell>
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
                                <TableCell style={{ width: 160 }} align="left">
                                    {list.price}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="left">
                                    {list.quantity}
                                </TableCell>
                                <TableCell style={{ width: 80 }} align="right">
                                    <NavLink to={`/admin/product/${list._id}/edit`} style={{textDecoration: 'none', color: '#000000de'}}> 
                                        <Button>
                                            Edit
                                        </Button>
                                    </NavLink>
                                    <Button onClick={() => props.onDelete(list._id, user._id, token)}> 
                                        Delete
                                    </Button>
                                    {/* <IconButton
                                        id="demo-customized-button"
                                        aria-controls="demo-customized-menu"
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        variant="contained"
                                        disableElevation
                                        onClick={handleClick}
                                        endIcon={<KeyboardArrowDownIcon />}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <StyledMenu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'demo-customized-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose} >
                                            <EditIcon />
                                            Edit
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <FileCopyIcon />
                                            Delete
                                        </MenuItem>
                                    </StyledMenu> */}
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
                                rowsPerPageOptions={[10, 15, 20, 25, { label: 'All', value: -1 }]}
                                colSpan={5}
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
