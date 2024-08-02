// Get the button
        var goToTopBtn = document.getElementById("goToTopBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () { scrollFunction(); };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                goToTopBtn.classList.add("show");
                goToTopBtn.classList.remove("hide");
            } else {
                goToTopBtn.classList.remove("show");
                goToTopBtn.classList.add("hide");
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        goToTopBtn.onclick = function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }