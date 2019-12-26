<script>
  import Modal from './components/generic/Modal.svelte';
  import Resume from './components/Resume.svelte';

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
    background-color: rgb(50, 54, 57);
    color: rgb(232, 234, 237);
    font-family: sans-serif;
    height: 100%;
    padding: 1rem;
  }

  #profile-pic {
    width: 150px;
    height: auto;
  }

  p {
    line-height: 1.25rem;
  }

  a {
    color: rgb(138, 180, 248);
    text-decoration: none;
  }

  footer {
    margin-top: auto;
  }
</style>

<div
  itemscope
  itemtype="https://schema.org/Person"
  class="App fx-container direction-column align-center">
  <div class="fx-item fx-grow-zero">
    <img id="profile-pic" src="/public/vatsal-joshi.png" alt="Vatsal Joshi" />
  </div>
  <div class="fx-item fx-grow-zero">
    <h1>Vatsal Joshi</h1>
  </div>
  <div class="fx-item fx-grow-zero">
    <p>I'm a JavaScript and Web enthusiast, living in Banglore, India.</p>
    <p>
      Pseudo blogger at
      <a target="_blank" href="https://blog.vatz88.in" rel="noopener">
        blog.vatz88.in
      </a>
    </p>
    <p>
      Connect with me
      <a target="_blank" href="https://twitter.com/vatz88" rel="noopener">
        @vatz88
      </a>
    </p>
  </div>
  <footer class="fx-item fx-grow-zero">
    <p>
      Site build with
      <a href="https://svelte.dev">Svelte</a>
    </p>
    <p>
      Source code can be found at
      <a
        target="_blank"
        href="https://github.com/vatz88/vatz88.github.io"
        rel="noopener">
        github.com/vatz88/vatz88.github.io
      </a>
    </p>
  </footer>
</div>

{#if showResume}
  <Modal onClose={closeResumeModal}>
    <Resume onClose={closeResumeModal} />
  </Modal>
{/if}
