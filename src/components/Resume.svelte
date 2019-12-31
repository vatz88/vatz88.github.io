<script>
  export let onClose = function() {};

  function onDownloadResume() {
    window.location =
      'https://docs.google.com/document/d/17SJXhb048iAt1bTxOR14O4VyAuik6nuqgC3-W1Sl740/export?format=pdf';
    gtag('event', 'resume download');
  }
</script>

<style>
  .resume-container {
    height: 100%;
  }

  iframe {
    border: 0;
    height: 100%;
    width: 100%;
  }

  .resume-action-buttons {
    padding: 1rem;
    justify-content: flex-end;
  }

  .resume-action-btn {
    all: unset;
    cursor: pointer;
    margin: 0 0.5rem;
    font-size: 12px;
    font-family: sans-serif;
    text-transform: uppercase;
  }
</style>

<div class="fx-container direction-column resume-container">
  <div class="fx-item">
    <iframe
      src="https://docs.google.com/viewer?srcid=17SJXhb048iAt1bTxOR14O4VyAuik6nuqgC3-W1Sl740&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
      title="Vatsal's resume" />
  </div>
  <div class="fx-item fx-grow-zero">
    <div class="fx-container resume-action-buttons">
      <div class="fx-item fx-grow-zero">
        <button on:click={onDownloadResume} class="resume-action-btn">
          Download
        </button>
      </div>
      <div class="fx-item fx-grow-zero">
        <button on:click={onClose} class="resume-action-btn">Close</button>
      </div>
    </div>
  </div>
</div>
