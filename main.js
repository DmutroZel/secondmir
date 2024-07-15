let timer;
    let startTime;
    let elapsedTime = 0;

    function formatTime(ms) {
        const hours = String(Math.floor((ms / 3600000) % 24)).padStart(2, '0');
        const minutes = String(Math.floor((ms / 60000) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((ms / 1000) % 60)).padStart(2, '0');
        const milliseconds = String(ms % 1000).padStart(3, '0');
        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    function updateStopwatch() {
        elapsedTime = Date.now() - startTime;
        $('#stopwatch').text(formatTime(elapsedTime));
    }

    $('#start').click(function() {
        startTime = Date.now() - elapsedTime; 
        timer = setInterval(updateStopwatch, 1); 
    });

    $('#pause').click(function() {
        clearInterval(timer);
    });

    $('#reset').click(function() {
        clearInterval(timer);
        elapsedTime = 0;
        $('#stopwatch').text(formatTime(elapsedTime));
    });