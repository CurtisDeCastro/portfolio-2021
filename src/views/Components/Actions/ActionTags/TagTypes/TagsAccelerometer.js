import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
// core components
import styles from "assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.js";

const useStyles = makeStyles(styles);

export default function TagsAccelerometer() {
  const [checked, setChecked] = React.useState([24, 22]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <div>
      <h3>
        Accelerometer Tags
      </h3>
      <div
        className={
          classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
        }
      >
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              onClick={() => handleToggle(21)}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{
                checked: classes.checked,
                root: classes.checkRoot
              }}
            />
          }
          classes={{ label: classes.label }}
          label="Unchecked"
        />
      </div>
      <div
        className={
          classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
        }
      >
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              onClick={() => handleToggle(22)}
              checked={checked.indexOf(22) !== -1 ? true : false}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{
                checked: classes.checked,
                root: classes.checkRoot
              }}
            />
          }
          classes={{ label: classes.label }}
          label="Checked"
        />
      </div>
      <div
        className={
          classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
        }
      >
        <FormControlLabel
          disabled
          control={
            <Checkbox
              tabIndex={-1}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{
                checked: classes.checked,
                root: classes.checkRoot
              }}
            />
          }
          classes={{
            label: classes.label,
            disabled: classes.disabledCheckboxAndRadio
          }}
          label="Disabled Unchecked"
        />
      </div>
      <div
        className={
          classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
        }
      >
        <FormControlLabel
          disabled
          control={
            <Checkbox
              tabIndex={-1}
              checked={checked.indexOf(24) !== -1 ? true : false}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{
                checked: classes.checked,
                root: classes.checkRoot
              }}
            />
          }
          classes={{
            label: classes.label,
            disabled: classes.disabledCheckboxAndRadio
          }}
          label="Disabled Checked"
        />
      </div>
    </div>
  );
}