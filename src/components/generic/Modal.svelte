<script>
  import { theme } from '../../stores/theme-store';

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
    height: 80vh;
    width: 95vw;
  }

  @media (min-width: 576px) {
    .modal {
      height: 85vh;
      width: 85vw;
    }
  }

  @media (min-width: 768px) {
    .modal {
      height: 85vh;
      width: 75vw;
    }
  }

  @media (min-width: 992px) {
    .modal {
      height: 85vh;
      width: 70vw;
    }
  }

  @media (min-width: 1200px) {
    .modal {
      height: 85vh;
      width: 65vw;
    }
  }
</style>

<div class={`modal-container ${$theme}`} on:click={onModalClose}>
  <div class="modal">
    <slot />
  </div>
</div>
