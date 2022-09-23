import React from "react";

function ExperiencePage() {
  return (
    <div className="container mt-4">
      <div class="row align-items-center">
        <div class="col-12">
          <h1 className=" text-center">Experience</h1>
          <p className="text-center mb-5">Lorem ipsum dolor sit amet.</p>
          <div class="experience1 d-flex  border-bottom-1 align-items-center">
            <div class="left col-6">
              <h3>SOFTWARE ENGINER</h3>
              <h6 className="text-primary">Tokopedia</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, facilis.</p>
            </div>
            <div class="col-6 range text-end">
              <h6 className="text-primary">28 Agustus 2012 - 12 Desember 2014</h6>
            </div>
          </div>
          <div class="experience2 d-flex align-items-center">
            <div class="left col-6 ">
              <h3>IT SUPPORT</h3>
              <h6 className="text-primary">Shopee</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, facilis.</p>
            </div>
            <div class="col-6 range text-end">
              <h6 className="text-primary">28 Agustus 2015 - 12 Desember 2017</h6>
            </div>
          </div>
          <div class="experience3 d-flex align-items-center">
            <div class="col-6 left">
              <h3>UI/UX DESIGNER</h3>
              <h6 className="text-primary">Lazada</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, facilis.</p>
            </div>
            <div class="col-6 range text-end">
              <h6 className="text-primary">28 Agustus 2018 - 12 Desember 2022</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
