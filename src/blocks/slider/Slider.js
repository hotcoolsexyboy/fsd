import 'ion-rangeslider';

class Slider {

    constructor() {
        this.init();
    }

    init() {
        let slider = $('.js-slider').ionRangeSlider({
            min: 1000,
            max: 20000,
            type: 'double',
            from: 5000,
            to: 10000,
            hide_from_to: true,
            onChange: this.updateLabel.bind(this),
            onStart: data => {
                data.slider.append('<div class="slider__min-max">');
                this.updateLabel(data);
            }
        });
    }

    updateLabel(data) {
        $(data.slider).find('.slider__min-max').html(data.from_pretty + '&#8381; - ' + data.to_pretty + '&#8381;');
    }
}

export { Slider }