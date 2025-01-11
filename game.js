document.getElementById('fullscreenGame').addEventListener('click', function() {
    const canvas = document.getElementById('gameCanvas');
    const controls = document.querySelector('.game-controls');
    const container = document.querySelector('.canvas-container');
    const gameIframe = document.getElementById('gameIframe');
    const gameFrame = document.getElementById('gameFrame');
    const playOverlay = document.querySelector('.play-overlay');
    const fullscreenBtn = this;

    if (!document.fullscreenElement) {
        
        if (container.requestFullscreen) {
            container.requestFullscreen();
        }
        canvas.classList.add('fullscreen');
        controls.classList.add('fullscreen');
        container.classList.add('fullscreen');
        gameIframe.classList.add('fullscreen');
        gameFrame.classList.add('fullscreen');
        playOverlay.classList.add('fullscreen');
        fullscreenBtn.classList.add('active');
    } else {
        
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        canvas.classList.remove('fullscreen');
        controls.classList.remove('fullscreen');
        container.classList.remove('fullscreen');
        gameIframe.classList.remove('fullscreen');
        gameFrame.classList.remove('fullscreen');
        playOverlay.classList.remove('fullscreen');
        fullscreenBtn.classList.remove('active');
    }
});


document.addEventListener('fullscreenchange', function() {
    const canvas = document.getElementById('gameCanvas');
    const controls = document.querySelector('.game-controls');
    const container = document.querySelector('.canvas-container');
    const gameIframe = document.getElementById('gameIframe');
    const gameFrame = document.getElementById('gameFrame');
    const playOverlay = document.querySelector('.play-overlay');
    const fullscreenBtn = document.getElementById('fullscreenGame');

    if (!document.fullscreenElement) {
        canvas.classList.remove('fullscreen');
        controls.classList.remove('fullscreen');
        container.classList.remove('fullscreen');
        gameIframe.classList.remove('fullscreen');
        gameFrame.classList.remove('fullscreen');
        playOverlay.classList.remove('fullscreen');
        fullscreenBtn.classList.remove('active');
        
        
        if (gameIframe.classList.contains('active')) {
            gameIframe.style.position = 'absolute';
            gameIframe.style.width = '100%';
            gameIframe.style.height = '100%';
            gameFrame.style.width = '100%';
            gameFrame.style.height = '100%';
        }
    }
});


document.getElementById('playNowBtn').addEventListener('click', function() {
    const canvas = document.getElementById('gameCanvas');
    const overlay = document.querySelector('.play-overlay');
    const gameIframe = document.getElementById('gameIframe');
    
   
    overlay.style.display = 'none';
    canvas.style.display = 'none';
    
   
    gameIframe.classList.add('active');
});


document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        
        this.classList.add('active');
        
        
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
}); 