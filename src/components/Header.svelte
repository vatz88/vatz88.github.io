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
    cursor: pointer;
    width: 150px;
    height: auto;
  }
</style>

<div class="fx-item fx-grow-zero">
  <img
    on:click={toggleTheme}
    id="profile-pic"
    src="/public/vatsal-joshi.png"
    alt="Vatsal Joshi" />
</div>
<div class="fx-item fx-grow-zero">
  <h1>Vatsal Joshi</h1>
</div>
