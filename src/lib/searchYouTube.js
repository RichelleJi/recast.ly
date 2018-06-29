var searchYouTube = (options, callback) => {
    
  var newOptions = {'maxResults': options.max,
                   'part': 'snippet',
                   'q': options.query,
                   'type': 'video',
                   'key': options.key, 
                   'videoEmbeddable': true
                  }
                   
  $.ajax({
    url:"https://www.googleapis.com/youtube/v3/search",
    type: 'GET',
    data: newOptions, 
    success: function (data) {
    }
  });
};

window.searchYouTube = searchYouTube;