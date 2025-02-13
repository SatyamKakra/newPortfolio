export default {
    background: {
      color: {
        value: "#1d1d1d",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "var(--selected-theme-main-color)",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

// >>>> Repulse Effect <<<<
// const particlesConfig = {
//   particles: {
//     number: {
//       value: 80,
//     },
//     move: {
//       enable: true,
//       speed: 2,
//     },
//   },
//   interactivity: {
//     events: {
//       onHover: {
//         enable: true,
//         mode: "repulse",
//       },
//     },
//     modes: {
//       repulse: {
//         distance: 100,
//         duration: 0.4,
//       },
//     },
//   },
// };
// export default particlesConfig;

// >>>> Bubble Effect <<<<
// const particlesConfig = {
//   particles: {
//     number: {
//       value: 100,
//     },
//     size: {
//       value: 5,
//       random: true,
//     },
//     move: {
//       speed: 2,
//     },
//     opacity: {
//       value: 0.5,
//       anim: {
//         enable: true,
//         speed: 1,
//         opacity_min: 0.1,
//       },
//     },
//   },
//   interactivity: {
//     events: {
//       onHover: {
//         enable: true,
//         mode: "bubble",
//       },
//     },
//     modes: {
//       bubble: {
//         size: 10,
//         distance: 200,
//         duration: 2,
//         opacity: 1,
//       },
//     },
//   },
// };
// export default particlesConfig;


// >>>> Shooting Stars Effect <<<<
// const particlesConfig = {
//   particles: {
//     number: {
//       value: 50,
//     },
//     shape: {
//       type: "star",
//     },
//     size: {
//       value: 4,
//       random: true,
//     },
//     move: {
//       enable: true,
//       speed: 3,
//       direction: "right",
//       straight: true,
//     },
//   },
// };
// export default particlesConfig;

// >>>> Random Explosion Effect <<<<
// const particlesConfig = {
//   particles: {
//     number: {
//       value: 100,
//     },
//     move: {
//       enable: true,
//       speed: 5,
//       direction: "random",
//       out_mode: "bounce",
//     },
//     size: {
//       value: 6,
//       random: true,
//     },
//   },
// };
// export default particlesConfig;

