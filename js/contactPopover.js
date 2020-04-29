(()=>{
    let popOver = document.querySelector('.msg-popover');
        submitBtn = document.querySelector('#cont-submit');
    //console.log(popOver);
    //console.log(submitBtn);

    function showPopover() {
        popOver.classList.add('show');
    }

    function hidePopover() {
        popOver.classList.remove('show');
    }

    submitBtn.addEventListener('click', showPopover);
    popOver.addEventListener('click', hidePopover);
})();