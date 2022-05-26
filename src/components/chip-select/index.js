import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(option, options, idLabel) {
  console.log(options);
  return {
    fontWeight:
      options.find(o => o[idLabel] === option.id) ? '500' : '400'
  };
}

const ChipSelect = ({ id, label, options, optionsSelected, setOptionsSelected, idLabel = 'id', valueLabel = 'value', fullWidth = false }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  useEffect(() => {
    if (options) {
      const preselected = optionsSelected.map(os => options.find(o => o.id === os[idLabel]));
      setSelectedValues([...preselected]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedValues(value);
    setOptionsSelected(value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: fullWidth ? '100%' : 300, margin: 0 }}>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select
          labelId={`${id}-label`}
          id={id}
          multiple
          value={selectedValues}
          onChange={handleChange}
          input={<OutlinedInput id={`${id}-input`} label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value.id} label={value[valueLabel]} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          fullWidth={fullWidth}
        >
          {options.map((o) => (
            <MenuItem
              key={o.id}
              value={o}
              style={getStyles(o, selectedValues, idLabel)}
            >
              {o[valueLabel]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default ChipSelect;
