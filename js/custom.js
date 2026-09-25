window.addEventListener('DOMContentLoaded', function() {
  var referrer = document.referrer;
  var currentHost = window.location.host;

  // 1. 判断是不是站内跳转
  if (referrer && referrer.indexOf(currentHost) !== -1) {
    
    // 2. 创建一块“白布”
    var cover = document.createElement('div');
    cover.style.position = 'fixed';
    cover.style.top = '0';
    cover.style.left = '0';
    cover.style.width = '100vw';
    cover.style.height = '100vh';
    cover.style.backgroundColor = '#eeeeee'; // 纯白色
    cover.style.zIndex = '999999'; // 确保在最顶层
    
    // 3. 把白布盖在屏幕上
    document.body.appendChild(cover);

    // 4. 等 100ms 让白布盖住屏幕
    setTimeout(function() {
      var main = document.getElementById('main');
      if (main) {
        // 5. 在白色遮挡下，瞬间跳转到文章区
        main.scrollIntoView({ behavior: 'auto', block: 'start' });
        
        // 6. 到达后，把白布撤掉
        setTimeout(function() {
          if (document.body.contains(cover)) {
            document.body.removeChild(cover);
          }
        }, 100); // 这里留 100ms 给浏览器渲染完文章区
      } else {
        // 没找到文章区，也撤掉白布，避免一直白屏
        if (document.body.contains(cover)) {
          document.body.removeChild(cover);
        }
      }
    }, 100);
  }
});