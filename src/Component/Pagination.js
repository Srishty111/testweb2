import React, {Component} from 'react'
import ReactPaginate from 'react-paginate';
import "./Pagination.css";
import './Card.css'
export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          data: [],
          perPage: 3,
          currentPage: 0
      };
      this.handlePageClick = this
          .handlePageClick
          .bind(this);
  }
  receivedData() {

              const data = this.props.Data?this.props.Data:[];
              const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
              const postData = slice.map(pd => <React.Fragment>
               
               <div className="cards">
                        <div className="image">
                            <img src={pd.imageurl}></img>
                        </div>
                        <div className="card-bodys">
                         <h6>  {pd.level} </h6>
                          <h6>  {pd.title}</h6>
                          <input type="text"></input>
                        </div>
                        <div className="card-footers">
                            <div > <i className="fa fa-plus" ></i>&nbsp;</div>
                            <div style={{borderLeft:"0.2px solid rgb(219, 216, 216)",borderRight:"0.2px solid rgb(219, 216, 216)",paddingLeft:"20px",paddingRight:"20px"}}> <i className="fal fa-layer-plus"></i>&nbsp;</div>
                            <div> <i className="fa fa-heart"></i>&nbsp;</div>

                        </div>

                    </div>


              </React.Fragment>)

              this.setState({
                  pageCount: Math.ceil(data.length / this.state.perPage),
                 
                  postData
              })
          
  }
  handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };

  componentDidMount() {
      this.receivedData()
  }
  render() {
      return (
          <div className="under-body-parts">
              <div className="cardss">
              {this.state.postData}
              </div>
              
              <div className="mypaginations" style={{marginLeft:"300px",marginTop:"60px"}}>
                
              <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
                
            </div>
          </div>

      )
  }
}
