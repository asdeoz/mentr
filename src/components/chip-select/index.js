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

function getStyles(option, options) {
  return {
    fontWeight:
      options.find(o => o.id === option.id) ? '500' : '400'
  };
}

const ChipSelect = ({ id, label, options, optionsSelected, setOptionsSelected }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  useEffect(() => {
    const preselected = optionsSelected.map(os => options.find(o => o.id === os.id));
    setSelectedValues([...preselected]);
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
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
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
                <Chip key={value.id} label={value.value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((o) => (
            <MenuItem
              key={o.id}
              value={o}
              style={getStyles(o, selectedValues)}
            >
              {o.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default ChipSelect;