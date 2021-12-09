import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import { TablePaginationActions } from '../../component/tablePagination';
import { NavLink } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { IconButton, Stack } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import { StyledTableCell, Img } from '../../utils/styles'
import PreviewIcon from '@mui/icons-material/Preview';

export default function Contacts(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const list = props.contactList.filter(item => item.status == 0);
    const list1 = props.contactList.filter(item => item.status == 1);

    const { token, user } = JSON.parse(localStorage.getItem('auth'));

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - list.length) : 0;
    const emptyRows1 = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - list1.length) : 0;

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
                <Typography variant='h4'>Contacts</Typography>
                <Typography variant='h4'></Typography>
            </Grid>
            <TabContext value={value} style={{ border: '1px solid #ddd', backgroundColor: '#ffffff' }}>
                <Box sx={{ borderBottom: 1, borderTop: 1, borderLeft: 1, borderRight: 1, borderColor: 'divider', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Waiting" value="1" />
                        <Tab label="Replied" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ p: '0' }}>
                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">ID</StyledTableCell>
                                    <StyledTableCell align="left">Title</StyledTableCell>
                                    <StyledTableCell align="left">Name</StyledTableCell>
                                    <StyledTableCell align="left">Phone</StyledTableCell>
                                    <StyledTableCell align="left">Email</StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : list
                                ).map((list, index) => (
                                    <TableRow key={index} hover>
                                        <TableCell style={{ width: 60 }} align="center">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell style={{ width: 200 }} align="left">
                                            {list.title}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography variant="subtitle2"  >
                                                {list.name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell style={{ width: 120 }} align="left">
                                            0{list.phone}
                                        </TableCell>
                                        <TableCell style={{ width: 120 }} align="left">
                                            {list.email}
                                        </TableCell>
                                        <TableCell style={{ width: 80 }} align="right">
                                            <Stack alignItems="center" direction="row">
                                                <Tooltip title="View">
                                                    <NavLink to={`/admin/contact/${list._id}/view`}>
                                                        <IconButton>
                                                            <PreviewIcon fontSize='small' />
                                                        </IconButton>
                                                    </NavLink>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton onClick={() => props.onHandleDelete3(list._id, user._id, token)}>
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
                                        rowsPerPageOptions={[10, 15, 20, 25, { label: 'All', value: -1 }]}
                                        colSpan={6}
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
                </TabPanel>
                <TabPanel value="2" sx={{ p: '0' }}>
                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">ID</StyledTableCell>
                                    <StyledTableCell align="left">Title</StyledTableCell>
                                    <StyledTableCell align="left">Name</StyledTableCell>
                                    <StyledTableCell align="left">Phone</StyledTableCell>
                                    <StyledTableCell align="left">Email</StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? list1.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : list1
                                ).map((list, index) => (
                                    <TableRow key={index} hover>
                                        <TableCell style={{ width: 60 }} align="center">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell style={{ width: 120 }} align="left">
                                            {list.title}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography variant="subtitle2"  >
                                                {list.name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell style={{ width: 120 }} align="left">
                                            {list.phone}
                                        </TableCell>
                                        <TableCell style={{ width: 120 }} align="left">
                                            {list.email}
                                        </TableCell>

                                        <TableCell style={{ width: 80 }} align="right">
                                            <Stack alignItems="center" direction="row">
                                                <Tooltip title="View">
                                                    <NavLink to={`/admin/contact/${list._id}/view`}>
                                                        <IconButton>
                                                            <PreviewIcon fontSize='small' />
                                                        </IconButton>
                                                    </NavLink>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton onClick={() => props.onDelete(list._id, user._id, token)}>
                                                        <DeleteForeverIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}

                                {emptyRows1 > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows1 }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[10, 15, 20, 25, { label: 'All', value: -1 }]}
                                        colSpan={6}
                                        count={list1.length}
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
                </TabPanel>
            </TabContext>

        </>
    );
}
