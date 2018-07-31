import React from 'react';
import Webix from './../../Webix';
import * as data from './Create-project-data';
import addmaterila from '../../assets/images/icons/add-material.png';
import * as reuse from '../Core/iCore';

export default class CreateProject_ extends React.Component {
  constructor(props) {
    super(props);
}


  hideForm() {
    document.getElementById('submodeofreceipt').style.display = "none";
    document.getElementById('appr_alt_sh').classList.add('hide');
    document.getElementById('service_alt_sh').classList.add('hide');
  }

  render() {
    return (
      <div onLoad={this.hideForm.bind(this)} className="create-project-form">
        <div className="iR-row">
          <div className="iR-col-12 ir_tab" >

            {/* First Colum Start */}
            <div className="iR-col-6 no-padding">

              <div className="iR-col-12 no-padding">
                {/* Project Detail Start */}
                <div aria-hidden="false" className="widget">
                  <div className="widget_header" onClick={reuse.toggleWidget.bind(this)}> Project Details
                      <a href='#' tabIndex="0"><i className="fa fa-expand" title="Expand"></i> <i className="fa fa-compress" title="collapse"></i></a>
                  </div>
                  <div className="widget_body" id="expandable-1">
                    <Webix ui={data._CreateProject()} id="create_pro" />
                    <div id="uploader_container">
                      <Webix ui={data._Upload_form()}></Webix>
                    </div>
                    <div id="submodeofreceipt" className="submodeofreceipt">
                      <Webix ui={data._Submodeofreceipt()} id="submodeofreceipt"></Webix>
                    </div>
                  </div>
                </div>
                {/* Project Detail End */}
              </div>

              <div className="iR-col-12 no-padding">
                {/* Due Date Start */}
                <div aria-hidden="false" className="widget">
                  <div className="widget_header" onClick={reuse.toggleWidget.bind(this)}> Due Date
                    <a href='#' tabIndex="0"><i className="fa fa-expand" title="Expand"></i><i className="fa fa-compress" title="collapse"></i></a>
                  </div>
                  <div className="widget_body" id="duedate">
                    <Webix ui={data._DueDate()} />
                  </div>
                </div>
                {/* Due Date End */}
              </div>

            </div>
            {/* First Colum End */}

            {/* Second Colum Start */}
           
            <div className="iR-col-6 no-right-padding">

              <div className="iR-col-12 no-padding">
                {/* Customer Detail Start */}
                <div aria-hidden="false" className="widget">
                  <div className="widget_header" onClick={reuse.toggleWidget.bind(this)}> Customer Details
                      <a href='#' tabIndex="0"><i className="fa fa-expand" title="Expand"></i> <i className="fa fa-compress" title="collapse"></i></a>
                  </div>
                  <div className="widget_body" id="create_pro2">
                    <Webix ui={data._customerdetails()} />
                  </div>
                </div>
                {/* Customer Detail End */}
              </div>


              <div className="iR-col-12 no-padding">
                {/* Customer Access Start */}
                <div aria-hidden="false" className="widget">
                  <div className="widget_header" onClick={reuse.toggleWidget.bind(this)}> Customer Access
                      <a href='#' tabIndex="0"><i className="fa fa-expand" title="Expand"></i> <i className="fa fa-compress" title="collapse"></i></a>
                  </div>
                  <div className="widget_body" id="expandable-4">
                    <div id="select_approver">
                      <Webix ui={data._Select_Approver()} ></Webix>
                    </div>
                    <div className="al-btn">
                      <button type="button" onClick={this.showForm.bind(this, "appr_alt_sh")} id="add_sel_approv" className="alt-btn app_btn" title="Add Select / Approver"><img src={addmaterila} alt="add to" /></button>
                      <div className="iR-col-12 alt-frm2 zoomIn animated" id="appr_alt_sh">
                        <div className="expand">Customer Access</div>
                        <div id="appr_alt">
                          <Webix ui={data._Add_Select_Approver()}></Webix>
                        </div>
                        <div className="btn_fun">
                          <div id="approver_btn" className="common_btn">
                            <Webix ui={data._select_button()} ></Webix>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Customer Access End */}
              </div>

              <div className="iR-col-12 no-padding">
                {/* Budget  Area  Start */}
                <div aria-hidden="false" className="widget">
                  <div className="widget_header" onClick={reuse.toggleWidget.bind(this)}> Budget
                      <a href='#' tabIndex="0"><i className="fa fa-expand" title="Expand"></i> <i className="fa fa-compress" title="collapse"></i></a>
                  </div>
                  <div className="widget_body" id="budget">
                    <Webix ui={data._Create_budget()}></Webix>
                  </div>
                </div>
                {/* Budget  Area  end */}
              </div>

            </div>
            {/* Second Colum End */}

            <div className="iR-col-12 no-padding">
              {/* Service  Area  Start */}
              <div aria-hidden="false" className="widget">
                <div className="widget_header" onClick={reuse.toggleWidget.bind(this)}> Services
                    <a href='#' tabIndex="0"><i className="fa fa-expand" title="Expand"></i> <i className="fa fa-compress" title="collapse"></i></a>
                </div>
                <div className="widget_body" id="expandable-6">
                  <div id="Services" className="table_btn">
                    <Webix ui={data._Select_Services()}></Webix>
                  </div>
                  <div className="al-btn">
                    <button type="button" id="add_service" onClick={this.showForm.bind(this, "service_alt_sh")} className="alt-btn service_btn" title="Add Services" ><img src={addmaterila} alt="add" /> </button>
                    <div className='iR-col-6 alt-frm zoomIn animated alt_show_from' id="service_alt_sh">
                      <div className="expand"> Services</div>
                      <Webix ui={data._add_Services()} ></Webix>
                      <div id="service_uploader">
                        <Webix ui={data._add_Services_uploader()} ></Webix>
                      </div>
                      <div className="btn_fun">
                        <div id="service_btn" className="common_btn">
                          <Webix ui={data._service_button()} ></Webix>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Service  Area  End */}
            </div>

            <div className="clearfix"></div>

            {/* Comments  Area  Start */}
            <div className="iR-col-12 down_margin-bottom no-padding">
              <div aria-hidden="false" className="widget">
                <div className="widget_header" onClick={reuse.toggleWidget.bind(this)}> Comments <a href='#' tabIndex="0"><i className="fa fa-expand" title="Expand"></i> <i className="fa fa-compress" title="collapse"></i></a></div>
                <div className="widget_body">
                  <div className="comments" id="comments">
                    <Webix ui={data._comments()} ></Webix>
                  </div>
                </div>
              </div>
            </div>
            {/* Comments  Area  Start */}

          </div>
        </div>

        <div className="clearfix"></div>
        <div className="iR-col-12 iR-form-footer text-right">
          <div id="footer_btn" className="common_btn" >
            <Webix ui={data._create_Footer(this.props.onSubmit)} ></Webix>
          </div>
        </div>
      </div>
    )
  };

  showForm(_this, formID) {
    document.getElementById(_this).classList.remove('hide')
  }
}

