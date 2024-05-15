document.addEventListener("DOMContentLoaded", function() {
    var resetButtons = document.querySelectorAll(".sp-btn-refresh");
    var dropdownLabels = document.querySelectorAll(".form-check-label");
    dropdownLabels.forEach(function(label) {
        label.addEventListener("click", function(e) {
            e.stopPropagation();
        });
    });
    resetButtons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            var ulElement = this.closest('ul');
            var formCheckInputs = ulElement.querySelectorAll('.form-check-input');
            uncheckFormCheckInputs(formCheckInputs);
        });
    });

    function uncheckFormCheckInputs(inputs) {
        inputs.forEach(function(input) {
            input.checked = false;
        });
    }
});
