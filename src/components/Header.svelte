<script>
  import { THEMES, theme } from '../stores/theme-store';

  function toggleTheme() {
    window.navigator.vibrate && window.navigator.vibrate(50);
    theme.update(currentTheme => {
      return currentTheme === THEMES.dark ? THEMES.light : THEMES.dark;
    });
    window.gtag('event', 'theme toggled');
  }

  let picRotateValue = {
    x: 0,
    y: 0,
  };

  let orientationRotateValue = 0;

  function setPicRotateValue(key, val) {
    picRotateValue = {
      ...picRotateValue,
      [key]: val,
    };
  }

  function animatePic(newX, newY) {
    const intervalId = {};

    function setCoordinateValue(key, val) {
      intervalId[key] && window.clearTimeout(intervalId[key]);
      setPicRotateValue(key, val);
      intervalId[key] = window.setTimeout(() => {
        if (picRotateValue[key] !== 0) {
          setPicRotateValue(key, 0);
        } else {
          window.clearTimeout(intervalId[key]);
        }
      }, 200);
    }

    if (Math.sign(newX) === Math.sign(picRotateValue.x)) {
      if (
        Math.sign(newX) * newX >
        Math.sign(picRotateValue.x) * picRotateValue.x
      ) {
        setCoordinateValue('x', newX);
      }
    } else {
      setCoordinateValue('x', newX);
    }
    if (Math.sign(newY) === Math.sign(picRotateValue.y)) {
      if (
        Math.sign(newY) * newY >
        Math.sign(picRotateValue.y) * picRotateValue.y
      ) {
        setCoordinateValue('y', newY);
      }
    } else {
      setCoordinateValue('y', newY);
    }
  }

  const supportsMouse = window.matchMedia('(pointer:fine)').matches;
  const hasReducedMotionEnabled = window.matchMedia(
    '(prefers-reduced-motion:reduce)',
  ).matches;
  if (!hasReducedMotionEnabled) {
    if (supportsMouse) {
      window.document.addEventListener('mousemove', function(event) {
        animatePic(event.movementY * 2, event.movementX * 2);
      });
    } else if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function(event) {
        orientationRotateValue = -event.gamma;
      });
    }
  }
</script>

<style>
  #profile-pic {
    height: 150px;
    width: 150px;
    transition-property: transform;
    transition-duration: 0.2s;
  }

  .ripple-ring {
    cursor: pointer;
    position: relative;
  }

  .ripple-ring::after {
    /* ripple animation for 2s runs 2 times */
    animation: ripple 2s linear 2;
    /* animation starts after a delay of 3s */
    animation-delay: 3s;
    /* Safari fix
     * It needs the animated property defined in default styling
     */
    border: 1px solid rgba(#dbdce0, 0);
    border-radius: 50%;
    content: '';
    height: 150px;
    left: 0;
    position: absolute;
    width: 150px;
  }

  @keyframes ripple {
    0% {
      border: 1px solid rgba(#dbdce0, 1);
      transform: scale(1);
    }
    100% {
      border: 1px solid rgba(#dbdce0, 0);
      transform: scale(1.1);
    }
  }
</style>

<div class="fx-item fx-grow-zero ripple-ring" on:click={toggleTheme}>
  <img
    id="profile-pic"
    src="/public/vatsal-joshi.png"
    alt="Vatsal Joshi"
    style="transform: rotate({orientationRotateValue}deg) rotateX({picRotateValue.x}deg)
    rotateY({picRotateValue.y}deg)" />
</div>
<div class="fx-item fx-grow-zero">
  <h1>Vatsal Joshi</h1>
</div>
