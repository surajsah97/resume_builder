import { useContext } from "react";
import { FormContext } from "./FormContext";
import "../App.css";
import { Box, Stepper, StepLabel, Step } from "@material-ui/core";

import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

export default function Header() {
  var [form, setForm] = useContext(FormContext);
  const steps = [
    "Basics",
    "Education",
    "Job",
    "Summary",
    "Skills",
    "Extra",
    "Done",
  ];

  const icons = {
    1: {
      iconNo: "1",
      color: "hsla(148, 89%, 78%, 1)",
      gradientColor: `linear-gradient(135deg, hsla(148, 89%, 78%, 1) 0%, hsla(210, 81%, 22%, 1) 100%)
`,
    },
    2: {
      iconNo: "2",
      color: "hsla(290, 87%, 63%, 1)",
      gradientColor: `linear-gradient(135deg, hsla(290, 87%, 63%, 1) 0%, hsla(105, 11%, 85%, 1) 100%)
`,
    },
    3: {
      iconNo: "3",
      color: "hsla(13, 74%, 53%, 0.8)",
      gradientColor: `linear-gradient(135deg, hsla(13, 74%, 53%, 0.8) 0%, hsla(21, 53%, 88%, 1) 100%)
`,
    },
    4: {
      iconNo: "4",
      color: "hsla(334, 74%, 66%, 0.5)",
      gradientColor: `linear-gradient(135deg, hsla(334, 74%, 66%, 0.5) 0%, hsla(328, 94%, 27%, 1) 100%)
`,
    },
    5: {
      iconNo: "5",
      color: "hsla(175, 79%, 63%, 1)",
      gradientColor: `linear-gradient(135deg, hsla(175, 79%, 63%, 1) 0%, hsla(82, 96%, 57%, 1) 100%)
`,
    },
    6: {
      iconNo: "6",
      color: "hsla(236, 100%, 8%, 1)",
      gradientColor: ` linear-gradient(135deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)
`,
    },
    7: {
      iconNo: "7",
      color: " hsla(324, 91%, 46%, 1)",
      gradientColor: ` linear-gradient(90deg, hsla(324, 91%, 46%, 1) 0%, hsla(18, 100%, 49%, 1) 100%)`,
    },
  };

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState, icon }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      border: `2px solid ${icons[icon].color}`,
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      backgroundColor: "#ffffff",
    }),
    ...(ownerState.completed && {
      backgroundImage: `${icons[icon].gradientColor}`,
    }),
    ...(!ownerState.completed &&
      !ownerState.active && {
        backgroundColor: "#ffffff",
      }),

    // ...(ownerState.completed && ownerState.icons {
    //     backgroundImage:
    //       "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    //   }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <>
        {!props.active && !props.completed && (
          <ColorlibStepIconRoot
            ownerState={{ active }}
            icon={props.icon}
            className={className}
          >
            <span style={{ color: "black" }}>
              {icons[String(props.icon)].iconNo}
            </span>
          </ColorlibStepIconRoot>
        )}

        {props.active && (
          <ColorlibStepIconRoot
            ownerState={{ active }}
            icon={props.icon}
            className={className}
          >
            <span style={{ color: "black" }}>
              {icons[String(props.icon)].iconNo}
            </span>
          </ColorlibStepIconRoot>
        )}

        {props.completed && (
          <ColorlibStepIconRoot
            ownerState={{ completed }}
            icon={props.icon}
            className={className}
          >
            {/* {icons[String(props.icon.iconLogo)]} */}
            <span style={{ color: "white" }}>
              {icons[String(props.icon)].iconNo}
            </span>
          </ColorlibStepIconRoot>
        )}
      </>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  return (
    <div>
      <Box sx={{ height: "100%", width: "100%" }}>
        <Stepper
          style={{
            borderBottom: "2px solid black",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "stretch",
            gap: "20px",
          }}
          activeStep={form.step}
          orientation="vertical"
          //   connector={<ColorlibConnector />}
          connector={false}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
