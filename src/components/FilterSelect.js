import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FilterSelect = ({ filterType, setFilterType }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    filter: filterType,
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    setFilterType(() => filterType = event.target.value)
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="filter-simple"
        style={{ color: '#fff' }}>Filter</InputLabel>
      <Select
        style={{ color: '#fff' }}
        value={values.filter}
        onChange={handleChange}
        inputProps={{
          name: 'filter',
          id: 'filter-simple',
        }}
      >
        <MenuItem value={'all'}>Show all</MenuItem>
        <MenuItem value={'open'}>Show open only</MenuItem>
        <MenuItem value={'done'}>Show done only</MenuItem>
      </Select>
    </FormControl>
  )
}

export default FilterSelect