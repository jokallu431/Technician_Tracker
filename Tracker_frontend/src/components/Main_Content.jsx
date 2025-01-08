import React from 'react'
import Topbar from './Topbar';
import Card_Tiles from './Card_Tiles';
import Page_heading from './Page_heading';
import { Outlet } from 'react-router';

const Main_Content = () => {
  return (
    <>
   {/* <!-- Main Content --> */}
   <div id="content">

        <Topbar/>

   {/* <!-- Begin Page Content --> */}
   <div className="container-fluid">
        <Page_heading/>
        <Card_Tiles/>
       {/* <!-- Content Row --> */}
       <div className="row">

           {/* <!-- Content Column --> */}
           <div className="col-lg-7 mb-4">
               {/* <!-- Project Card Example --> */}
               <div className="card shadow mb-4">
                   <div className="card-header py-3">
                       <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                   </div>
                   <div className="card-body">
                       <h4 className="small font-weight-bold">Server Migration <span
                               className="float-right">20%</span></h4>
                       <div className="progress mb-4">
                           <div className="progress-bar bg-danger progress_bar_danger" role="progressbar"></div>
                       </div>
                       <h4 className="small font-weight-bold">Sales Tracking <span
                               className="float-right">40%</span></h4>
                       <div className="progress mb-4">
                           <div className="progress-bar bg-warning progress_bar_warning" role="progressbar" ></div>
                       </div>
                       <h4 className="small font-weight-bold">Customer Database <span
                               className="float-right">60%</span></h4>
                       <div className="progress mb-4">
                           <div className="progress-bar progress_bar" role="progressbar" ></div>
                       </div>
                       <h4 className="small font-weight-bold">Payout Details <span
                               className="float-right">80%</span></h4>
                       <div className="progress mb-4">
                           <div className="progress-bar bg-info progress_bar_info" role="progressbar" ></div>
                       </div>
                       <h4 className="small font-weight-bold">Account Setup <span
                               className="float-right">Complete!</span></h4>
                       <div className="progress">
                           <div className="progress-bar bg-success progress_bar_success" role="progressbar" ></div>
                       </div>
                   </div>
               </div>

               {/* <!-- Color System --> */}
               {/* <div className="row">
                   <div className="col-lg-6 mb-4">
                       <div className="card bg-primary text-white shadow">
                           <div className="card-body">
                               Primary
                               <div className="text-white-50 small">#4e73df</div>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-6 mb-4">
                       <div className="card bg-success text-white shadow">
                           <div className="card-body">
                               Success
                               <div className="text-white-50 small">#1cc88a</div>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-6 mb-4">
                       <div className="card bg-info text-white shadow">
                           <div className="card-body">
                               Info
                               <div className="text-white-50 small">#36b9cc</div>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-6 mb-4">
                       <div className="card bg-warning text-white shadow">
                           <div className="card-body">
                               Warning
                               <div className="text-white-50 small">#f6c23e</div>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-6 mb-4">
                       <div className="card bg-danger text-white shadow">
                           <div className="card-body">
                               Danger
                               <div className="text-white-50 small">#e74a3b</div>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-6 mb-4">
                       <div className="card bg-secondary text-white shadow">
                           <div className="card-body">
                               Secondary
                               <div className="text-white-50 small">#858796</div>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-6 mb-4">
                       <div className="card bg-light text-black shadow">
                           <div className="card-body">
                               Light
                               <div className="text-black-50 small">#f8f9fc</div>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-6 mb-4">
                       <div className="card bg-dark text-white shadow">
                           <div className="card-body">
                               Dark
                               <div className="text-white-50 small">#5a5c69</div>
                           </div>
                       </div>
                   </div>
               </div> */}

           </div>

           <div className="col-lg-5 mb-4">

               {/* <!-- Illustrations --> */}
               <div className="card shadow mb-4">
                   <div className="card-header py-3">
                       <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                   </div>
                   <div className="card-body">
                       <div className="text-center">
                           <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 card_img" 
                               src="img/undraw_posting_photo.svg" alt="..."/>
                       </div>
                       <p>Add some quality, svg illustrations to your project courtesy of a
                           constantly updated collection of beautiful svg images that you can use
                           completely free and without attribution!</p>
                   </div>
               </div>
           </div>
       </div>

   </div>
   {/* <!-- /.container-fluid --> */}

</div>
{/* <!-- End of Main Content --> */}
</>
  )
}

export default Main_Content;