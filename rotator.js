document.body.innerHTML = document.body.innerHTML + "<style> .rotate {animation: rotation 0.4s infinite linear;}@keyframes rotation{from{transform: rotate(0deg);}to{transform: rotate(359deg);}}</style>"
document.body.classList.add("rotate");
