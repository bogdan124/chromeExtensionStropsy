if (verifyIfPersonIsLoggedIn()) {
    $(".content").html(`<div class="wordDetection">
<span class="enable_detection">Enable only highlite detection</span>
<label class="switch">
<input id="wordDetectCheckbox_enable_selection" type="checkbox">
<span class="slider round"> </span>
</label>
</div>

</div>
<div class="footer">
<a href="stropsy.com">
<div class="GoToStropsy" id="my_stropsy">My Stropsy</div>
</a>
</div>`);
} else {
    $(".content").html(`
    <div class="footer">
    <a href="stropsy.com">
    <div class="GoToStropsy" id="my_stropsy">My Stropsy</div>
    </a>
    </div>`);
}