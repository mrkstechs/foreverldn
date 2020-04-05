import React, {useState, useEffect} from 'react';
import {ReactComponent as LeftArrow} from '../../images/left-arrow.svg';
import {ReactComponent as RightArrow} from '../../images/right-arrow.svg';
function Images({images}) {
  const [activeIndex, setActiveIndex] = useState(0);
  //const [animating, setAnimating] = useState(false);

  useEffect(()=>{
    let thumbs = document.querySelectorAll('.thumb');
    for (let index = 0; index < images.length; index++) {
      if (activeIndex == index) {
        thumbs[index].childNodes[0].style.opacity = 1;
      } else if(activeIndex !== index){
        thumbs[index].childNodes[0].style.opacity = 0.6;
      }
    }

  })

  const slidesWidth = () => {
    let amount = images.length * 100;
    return(amount + "%");
  }
  const slides = images.map(image => {
    return(
      <div className="slide" key={image.id}>
        <img src={image.src} alt={image.alt} />
      </div>
    )
  });
  const thumbs = images.map(image =>{
    return(
      <div className="thumb" key={image.id}>
        <img src={image.src} alt={image.alt} />
      </div>
    )
  });
  const next = () => {
    //if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    //if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const moveSlide = () => {
    for (let index = 0; index < images.length; index++) {
      if (activeIndex == index) {
        return 'translateX(-' + index * 25 + '%)';
      }
    }
  }
  return (
    <div id="images" className="slide-show-container">
      <div className="slides" style={{width: 100 + '%'}}>
        <div className="inner" style={{width: slidesWidth(), transform: moveSlide()}}>
          {slides}
        </div>
      </div>
      <div className="prev" onClick={previous}>
        <LeftArrow />
      </div>
      <div className="next" onClick={next}>
        <RightArrow />
      </div>
      <div className="thumbnails">
        {thumbs}
      </div>
    </div>
  )
}

export default Images
