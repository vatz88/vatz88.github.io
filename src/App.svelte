<script>
  import Modal from './components/Modal.svelte';

  let showResume = true;
  function closeResumeModal() {
    showResume = false;
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
</style>

<div class="App fx-container direction-column align-center justify-center">
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
</div>

{#if showResume}
  <Modal onClose={closeResumeModal} />
{/if}
