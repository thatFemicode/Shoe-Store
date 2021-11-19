import React from "react";
import { GalleryStyled } from "./GalleryStyled";
import TabMain from "./Tab/TabMain";

const Gallery = () => {
  return (
    <GalleryStyled>
      <div class="circle"></div>
      <div className="gallery-text">
        <h1>View more products</h1>
        <p>
          Checkout some of express other products by clicking on the smaller
          images
        </p>
      </div>

      <TabMain />
    </GalleryStyled>
  );
};

export default Gallery;
