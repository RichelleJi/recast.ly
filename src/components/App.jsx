class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      video: window.exampleVideoData[0],
      keyTerm: '',
    };
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  
 handleClick(videoEvent) {
    this.setState({video: videoEvent})
    // this.setState(
    // prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }));
    // var title = event.target
    // console.log(videoEvent)
    
  }

   handleChange(realTerm) {
    var query = $('.form-control').val();
  
    var app = this
    var callback = function(data){
      app.setState(
      {
        videos: data.items,
        video: data.items[0]
      })
    }
      // console.log(this);
   window.searchYouTube({query: query, key: window.YOUTUBE_API_KEY, max: 5}, callback)
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleChange = {this.handleChange}/>
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
var searchYouTube;
// <VideoList videos={window.exampleVideoData}/>
//line 12: React.createElement(VideoList, { videos: window.exampleVideoData });