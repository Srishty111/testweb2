import React, { Component } from "react";
    import "./App.css";
    
    class App1 extends Component {
      constructor(props) {
        super(props);
        this.state = {
          items: 2,
          loading: false
        };
      }
      componentDidMount() {
        // Detect when scrolled to bottom.
        this.refs.myscroll.addEventListener("scroll", () => {
          if (
            this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
            this.refs.myscroll.scrollHeight
          ) {
            this.loadMore();
          }
        });
      }
    
      showItems() {
        var items = [];
        for (var i = 0; i < this.state.items; i++) {
          items.push(<h1 class="text-center"><br/><br/><br/><br/><br/><br/>Hello World
            <br/><br/><br/><br/><br/><br/></h1>);
        }
        return items;
      }
    
      loadMore() {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ items: this.state.items + 2, loading: false });
        }, 500);
      }
    
      render() {
        return (
          <div
            className="App"
            ref="myscroll"
            style={{ height: "500px", overflow: "auto" }}
          >
            
            <ul>
              {this.showItems()}
            </ul>
            {this.state.loading
              ? null
              : ""}
    
          </div>
        );
      }
    }
    
    export default App1;