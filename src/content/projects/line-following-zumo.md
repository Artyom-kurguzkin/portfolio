---
title: Line Following Zumo
summary: A control unit for line-following robots that traverse predefined terrain.
category: Electronics
organisation: Flinders
date: 2023-11-01
contributors: [Vaughn Brereton, Andrew Barry]
stack: [Flinduino (Arduino-compatible), C, Hand soldering, Oscilloscope, PuTTY, GitHub]
link: https://github.com/Artyom-kurguzkin/Maze-solving-robot
image: /media/zumo-loop-poster.webp
video: /media/zumo-loop.mp4
thumb: /img/zumo-thumb.webp
context: >-
  This is a guided uni project that I did a while ago.
---

## Core ideas

- **Finite State Machine** A mathematical framework useful to model simple computations. Also applicable for higher-level programming abstractions when system behaviour can be described as a finite, mutually exclusive set of states.
- **Sensor calibration** Establishing critical points of reference or edge boundaries within a sensing system. Useful when the system is meant to work in different environments (a dark room vs midday in the desert): the range of read values and their likely gradation should be accounted for, with different values for true/false.
- **Pulse Width Modulation** Encoding a signal (motor control) by varying the width of its pulses. Wider pulses → more power delivered to the motors → higher motor speed.

## How it works

### Building the controller

We hand-soldered electronic components to produce Flinduino boards: Arduino-compatible units that we used to control Zumo robots. We used an oscilloscope to confirm the circuits worked correctly and to observe the **PWM signal** that we then used to control the Zumo's motors.

### Following the line

The robot base had an array of light sensors that, once calibrated, can distinguish a black stripe (the road) on a white background. Scanning the array establishes the robot's position relative to the road at that moment. Based on the reading, the robot decides what speed to set for each motor. This way, the robot adjusts on every scan to follow the road.

### Handling obstacles

From this basic line-following state, we built extra behaviours (more states!) for obstacles such as road intersections and gaps in the road. Different combinations of sensor array readings corresponded to a prepared map of expected obstacles. We designed a finite state model for the system to suit the prepared maze, so that it **always converged back to line following** as long as none of the expected obstacles was detected.

![Finite state machine of the robot's control logic](https://raw.githubusercontent.com/Artyom-kurguzkin/Maze-solving-robot/main/FSM%20EL%20A1.png)

*Finite state machine: calibrating, line following, turning left, going blind and stop. Transitions are labelled with their condition and the left|right motor actions.*

## Debugging and teamwork

Nothing worked on the first try. To help with troubleshooting, we used the Wi-Fi module integrated into the Flinduino board, sending logs over a serial connection that we read in a PuTTY terminal. To collaborate as a team, we kept a shared GitHub repo that every team member could access.

## Outcome

<video src="https://github.com/user-attachments/assets/fbe06639-9d38-4dc6-822f-b6bc1b883644" controls muted playsinline preload="metadata"></video>

*Demo run on the trial course.*
