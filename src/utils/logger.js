window.addEventListener('load', () => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '../utils/logger.css';
    document.head.appendChild(css);

    const loggerEl = document.createElement('div');
    loggerEl.className = 'logger';
    document.body.appendChild(loggerEl);

    window.logger = {
        el: loggerEl,
        log (msg) {
            this.el.innerHTML += `<span>${new Date().toLocaleTimeString()}：${msg}</span><br/>`;
            this.el.scrollTop = this.el.scrollHeight;
        },
        error (msg) {
            this.el.innerHTML += `<span class="error">${new Date().toLocaleTimeString()}：${msg}</span><br/>`;
        }
    };

    logger.log('信息面板初始完毕');
});
