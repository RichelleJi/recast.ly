class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      video: window.exampleVideoData[0],
      keyTerm: '';
      
    };
      this.handleClick = this.handleClick.bind(this);
    
  }
  
 handleClick(videoEvent) {
    this.setState({video: videoEvent})
    // this.setState(
    // prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }));
    // var title = event.target
    console.log(videoEvent)
    
  }
  
 inputSearch(realTerm) {
    this.setState({keyTerm: realTerm})
    console.log(videoEvent)
  }

  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div video={this.state.keyTerm}><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} clickFunction = {this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// <VideoList videos={window.exampleVideoData}/>
//line 12: React.createElement(VideoList, { videos: window.exampleVideoData });