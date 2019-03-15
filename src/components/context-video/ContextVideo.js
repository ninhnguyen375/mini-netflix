import React, { Component } from 'react';
import {
  Container,
} from 'react-bootstrap';
import {
  CloudinaryContext,
  Video,
} from 'cloudinary-react';
import Axios from 'axios';
import Processing from '../Processing';
export default class ContextVideo extends Component {
  state = {
    videos: [],
    isUploading: true,
  }
  async getVideos(){
    try{ 
      const promiseData = await Axios.get('https://res.cloudinary.com/ninhnguyen375/video/list/mini-netflix.json');
      if (this.state.videos !== promiseData.data.resources) {
        this.setState({
          videos: promiseData.data.resources,
          isUploading: false,
        });
      } else {
        return;
      }
    } catch(err){
    }
  }
  componentDidMount(){
    this.getVideos();
    setInterval(this.getVideos.bind(this), 100);
  }
  componentWillUnmount(){
    clearInterval(this.getVideos);
  }
  render() {
    const { videos } = this.state;
    return (
        <Container>
          {
            this.state.isUploading 
              ? <Processing hidden="" />
              : <Processing hidden="" />
          }
          <CloudinaryContext cloudName="ninhnguyen375" className="d-flex flex-wrap">
              {
                videos.map((video, index) => (
                  <div key={index} className="col-sm-4">
                    <Video publicId={video.public_id} width="200" height="200" controls>
                    </Video>
                    <div>Create at { video.created_at }</div>
                  </div>
                ))
              }
          </CloudinaryContext>
        </Container>
    )
  }
}
