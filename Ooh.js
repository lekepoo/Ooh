<script>
        function swipeNoButton() {
            // Get the "No" button
            var noBtn = document.getElementById('noBtn');

            // Randomly choose new positions for the button (between 10% and 90% of viewport)
            var randomX = Math.floor(Math.random() * 80) + 10; // Left position (10% to 90%)
            var randomY = Math.floor(Math.random() * 80) + 10; // Top position (10% to 90%)

            // Apply the new positions to swipe the button
            noBtn.style.left = randomX + '%';
            noBtn.style.top = randomY + '%';

            // Optional: Display an alert for fun
            //alert('You missed! Try again.');
        }
    </script>
