import React from 'react';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';


class carouselBulma extends React.Component {
    constructor(props) {
        super();

    }
    componentDidMount() {
     bulmaCarousel.attach('.carousel', {
        slidesToScroll: 1,
        slidesToShow: 1
      });
    }
    render() {
        return (
            <div>
                <div class='carousel carousel-animated carousel-animate-slide'>
                    <div class='carousel-container'>
                        <div class='carousel-item has-background is-active'>
                            <img class="is-background" src="" alt="" width="640" height="310" />
                            <div class="title">Merry Christmas</div>
                        </div>
                        <div class='carousel-item has-background'>
                            <img class="is-background" src="https://wikiki.github.io/images/singer.jpg" alt="" width="640" height="310" />
                            
                        </div>
                        <div class='carousel-item has-background'>
                            <img class="is-background" src="https://wikiki.github.io/images/sushi.jpg" alt="" width="640" height="310" />
                            <div class="title">Sushi time</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default carouselBulma