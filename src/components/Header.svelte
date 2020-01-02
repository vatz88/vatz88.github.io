<script>
  import { THEMES, theme } from '../stores/theme-store';

  function toggleTheme() {
    theme.update(currentTheme => {
      return currentTheme === THEMES.dark ? THEMES.light : THEMES.dark;
    });
  }
</script>

<style>
  #profile-pic {
    height: 150px;
    width: 150px;
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
  <img id="profile-pic" src="/public/vatsal-joshi.png" alt="Vatsal Joshi" />
</div>
<div class="fx-item fx-grow-zero">
  <h1>Vatsal Joshi</h1>
</div>
