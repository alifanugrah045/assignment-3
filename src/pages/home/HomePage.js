import React from "react";
import idCardterbaru from '../../img/idcardterbaru.png';

function HomePage() {
  return (
    <div className="container mt-4">
      <div class="row align-items-center">
        <div class="col-6">
          <h4>Halo Semua,Saya</h4>
          <h1 className="text-primary">Alif Anugrah</h1>
          <h4>Student | Designer</h4>
        </div>
        <div class="col-6 text-center">
        <img style={{width: 300, height: 300}}  src={idCardterbaru} className="" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
