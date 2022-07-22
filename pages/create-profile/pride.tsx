import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function PridePage(): JSX.Element {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
