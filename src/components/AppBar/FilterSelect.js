import React, { useState } from 'react';
import { connect } from 'react-redux';
import { showAll, showDone, showOpen } from '../../redux/actions/filters';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const baseColor = '#fff'

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

const FilterSelect = ({ show, showAll, showDone, showOpen }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    filter: show,
  });

  const handleChange = event => {
    const { value, name } = event.target;

    setValues(oldValues => ({
      ...oldValues,
      [name]: value,
    }));

    if (value === 'all') {
      showAll();
    } else if (value === 'open') {
      showOpen();
    } else if (value === 'done') {
      showDone();
    }

  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="filter-simple"
        style={{ color: baseColor }}>Filter</InputLabel>
      <Select
        style={{ color: baseColor }}
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

const maptStateToProps = ({ filters }) => {
  return {
    show: filters.show
  }
}

const mapDispatchToState = {
  showAll,
  showDone,
  showOpen,
}

export default connect(maptStateToProps, mapDispatchToState)(FilterSelect)