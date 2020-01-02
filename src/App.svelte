<script>
  import Header from './components/Header.svelte';
  import Main from './components/Main.svelte';
  import Footer from './components/Footer.svelte';
  import Modal from './components/generic/Modal.svelte';
  import Resume from './components/Resume.svelte';
  import { theme } from './stores/theme-store';

  let showResume = false;
  function checkToOpenResume() {
    if (window.location.hash.toLowerCase() === '#resume') {
      showResume = true;
      gtag('event', 'resume view', {
        non_interaction: true,
      });
    }
  }
  window.onhashchange = checkToOpenResume;
  checkToOpenResume();

  function closeResumeModal() {
    showResume = false;
    history.pushState(
      '',
      document.title,
      window.location.pathname + window.location.search,
    );
  }
</script>

<style>
  .App {
    font-family: sans-serif;
    height: 100%;
    padding: 1rem;
  }
</style>

<div
  itemscope
  itemtype="https://schema.org/Person"
  class={`App fx-container direction-column align-center ${$theme}`}>
  <Header />
  <Main />
  <Footer />
</div>

{#if showResume}
  <Modal onClose={closeResumeModal}>
    <Resume onClose={closeResumeModal} />
  </Modal>
{/if}
