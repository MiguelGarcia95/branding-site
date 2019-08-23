var tlFirstScroll = new TimelineMax();

tlFirstScroll
.set('.iphone-image-wrapper', {scale: 4, transformOrigin: 'center top'})
.to('.iphone-image-wrapper', 3, {scale: 2.5, y: '-40%'})
.to('.iphone-image-wrapper', 3, {scale: 1, y: '0%'})