// import React from 'react'


const Card_Tiles = () => {
    
  return (
        <>
            {/* <!-- Content Row --> */}
            <div className="row">

            {/* <!-- Earnings (Monthly) Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            UnAssigned Tasks</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">10</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
            </div>
            </div>

            {/* <!-- Earnings (Monthly) Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Assigned Tasks</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">11</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-paperclip fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
            </div>
            </div>

            {/* <!-- Earnings (Monthly) Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Pending Tasks
                        </div>
                        <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">10</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
            </div>
            </div>

            {/* <!-- Pending Requests Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Completed Tasks</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">19</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-check fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </>
  )
}

export default Card_Tiles;