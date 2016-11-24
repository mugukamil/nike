$(document).ready(function() {
    var slider = document.getElementById('js-range-price');

    noUiSlider.create(slider, {
        start: [0, 5000],
        step: 100,
        connect: true,
        range: {
            'min': 0,
            'max': 30000
        }
    });

    slider.noUiSlider.on('update', function( values, handle ) {

        var value = values[handle];

        if ( handle ) {
            var str = Math.round(values[handle]);
            str = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

            $('span.js-filter-to').text(str);
            $('input.js-filter-to').val(str);
        }
        else {
            var str = Math.round(values[handle]);
            str = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

            $('span.js-filter-from').text(str);
            $('input.js-filter-from').val(str);
        }
    });

    $('input.js-filter-from').on('change', function(){
        slider.noUiSlider.set([this.value, null]);                  
        $('.js-range-reset').show();
    });
    $('input.js-filter-to').on('change', function(){
        slider.noUiSlider.set([null, this.value]);          
        $('.js-range-reset').show();
    });

    slider.noUiSlider.on('slide', function( values, handle ) {

        $('.js-filter-range .placeholder').hide();
        $('.js-filter-range-value').show();         
        $('.js-range-reset').show();

    });

    $('.js-range-reset').click(function() {
        $('.placeholder').show().text('Не выбрано');
        $('.js-filter-range-value').hide();
        slider.noUiSlider.set([0, 200000]); 
        $(this).hide();                 
    });
});