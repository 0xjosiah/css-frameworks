import React from 'react';

function Bootstrap() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card" style={{ maxWidth: '800px' }}>
        <div className="row g-0">
          <div className="col-4">
            <div className="bg-secondary h-100" style={{ minHeight: '200px' }}></div>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">Bootstrap</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-primary">Click Me</button>
        </div>
      </div>
    </div>
  );
}

export default Bootstrap; 