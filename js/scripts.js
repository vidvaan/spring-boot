function loadComponents() {
    // Load Header
    fetch("header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header-container").innerHTML = data;
      });

    // Load Footer
    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer-container").innerHTML = data;
      });
  }
  loadComponents();


  function copyCode() {
    const code = document.getElementById('code1').innerText;
    
    // Use the Clipboard API to copy the code
    navigator.clipboard.writeText(code).then(function() {
      const tooltip = document.querySelector('.tooltip');
      tooltip.style.visibility = 'visible'; // Show the tooltip
      setTimeout(function() {
        tooltip.style.visibility = 'hidden'; // Hide the tooltip after 1.5 seconds
      }, 1500);
    }).catch(function(error) {
      console.error('Error copying text: ', error);
    });
  }

