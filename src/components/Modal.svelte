<script>
  export let renderComponent;
  export let onClose = function() {};

  function onModalClose(event) {
    if (event.eventPhase === 2) {
      onClose();
    }
  }
</script>

<style>
  .modal-container {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    height: 100vh;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 999;
  }

  .modal {
    border-radius: 0.3rem;
    flex: 1;
    overflow: auto;
    max-height: 100vh;
    max-width: 100vw;
    position: absolute;
    /* temp */
    background-color: white;
    width: 100px;
    height: 100px;
  }
</style>

<div class="modal-container" on:click={onModalClose}>
  <div class="modal">
    <div>...</div>
  </div>
</div>
