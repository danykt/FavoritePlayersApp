import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import PlayersList from '../PlayersList/PlayersList';
import PlayerView from '../PlayerView/PlayerView';
import Header from '../Header/Header';

let playersList = [
  {
    name: "Lionel Messi------",
    imageSrc: 'https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Ffansided.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2019%2F04%2F1133931098-850x560.jpeg',
    number: "10",
    club: "FC Barcelona",
    key: 0,
    nationality: "Argentine",
    nation: 'argentina',
    nickName: "La Pulga",
    clubImagSrc:"https://cdn2.bigcommerce.com/n-biq04i/xd4xhbm/products/5473/images/1053/12FCB__45616.1446482089.1280.1280.jpg?c:2"
  },
  {
    name: "Cristiano Ronaldo",
    imageSrc: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/03/28/15853858123072.jpg",
    number: "9",
    club: "Juventus",
    key: 1,
    nationality: "Portuguese",
    nation: 'portugal',
    nickName: "El comandante",
    clubImagSrc:"https://creativereview.imgix.net/content/uploads/2017/01/Juve-sq.jpg"
  },
  {
    name: "Zinedine Zidane--",
    imageSrc: "https://i.ytimg.com/vi/Nn1dvD2DIBk/maxresdefault.jpg",
    number: "10",
    club: "Juventus",
    key: 2,
    nationality: "French",
    nation: 'france',
    nickName: "Zizu",
    clubImagSrc:"https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png"
  },
  {
    name: "Diego Maradona-",
    imageSrc: "https://images.squarespace-cdn.com/content/v1/5cb5d057755be255f4b40002/1557253433223-3Z1NC33WBKZSD03OMUZG/ke17ZwdGBToddI8pDm48kN950yupXKpKKnDvX6siqYFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwHrBpslUiJIhd_0RPNoX3MabtPtYyA7uTyrdL_4j810yIsPDNtBeF8hp6xckAns0s/diego-maradona-1982-world-cup.jpg?format=1500w",
    number: "10",
    club: "Napoli",
    key: 3,
    nationality: "Argentine",
    nation: "argentina",
    nickName: "Don Diego",
    clubImagSrc:"https://cdn.freelogovectors.net/wp-content/uploads/2020/01/SSC-Napoli-Logo.png"
  },
  {
    name: "Edson Arantes---",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfZGZU62fJEb7BwBeSWP0OC4nlOYVhKa6XMNbZRDvs-jE5DAzh&usqp=CAU",
    number: "9",
    club: "Santos",
    key: 4,
    nationality: "Brazilian",
    nation: "brazil",
    nickName: "Pele",
    clubImagSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/1200px-Santos_logo.svg.png"
  },
  {
    name: "Andres Iniesta------",
    imageSrc: "https://img.bleacherreport.net/img/images/photos/003/740/501/hi-res-83e4075ee96e703601555011effd0731_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
    number: "8",
    club: "Barcelona",
    key: 5,
    nationality: "Spanish",
    nation: "spain",
    nickName: "Don Andres",
    clubImagSrc:"https://cdn2.bigcommerce.com/n-biq04i/xd4xhbm/products/5473/images/1053/12FCB__45616.1446482089.1280.1280.jpg?c:2"
  },
  {
    name: "Carles Puyol---------",
    imageSrc: "https://i.dailymail.co.uk/1s/2019/08/01/11/16761478-0-image-a-31_1564654983526.jpg",
    number: "5",
    club: "Barcelona",
    key: 6,
    nationality: "Spanish",
    nation: "spain",
    nickName: "Tarzan",
    clubImagSrc:"https://cdn2.bigcommerce.com/n-biq04i/xd4xhbm/products/5473/images/1053/12FCB__45616.1446482089.1280.1280.jpg?c:2"
  },
  {
    name: "Ronaldinho Gaucho",
    imageSrc: "https://i2-prod.mirror.co.uk/incoming/article8876177.ece/ALTERNATES/s615/Ronaldinho.jpg",
    number: "10",
    club: "Barcelona",
    key: 7,
    nationality: "Brazilian",
    nation: "brazil",
    nickName: "Dinho",
    clubImagSrc:"https://cdn2.bigcommerce.com/n-biq04i/xd4xhbm/products/5473/images/1053/12FCB__45616.1446482089.1280.1280.jpg?c:2"
  },
  {
    name: "Rafael Marquez-----",
    imageSrc: "https://futbol.radioformula.com.mx/wp-content/uploads/2019/02/Rafa-Marquez-640x405.jpg",
    number: "4",
    club: "Barcelona",
    key: 8,
    nationality: "Mexican",
    nation: "mexico",
    nickName: "El Kaiser",
    clubImagSrc:"https://cdn2.bigcommerce.com/n-biq04i/xd4xhbm/products/5473/images/1053/12FCB__45616.1446482089.1280.1280.jpg?c:2"
  },
  {
    name: "Xavi Hernandez-----",
    imageSrc: "https://i.ytimg.com/vi/W6Tjz_weKOY/maxresdefault.jpg",
    number: "6",
    club: "Barcelona",
    key: 9,
    nationality: "Spanish",
    nation: "spain",
    nickName: "Don Andres",
    clubImagSrc:"https://cdn2.bigcommerce.com/n-biq04i/xd4xhbm/products/5473/images/1053/12FCB__45616.1446482089.1280.1280.jpg?c:2"
  },
  

]

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {selectedPlayer: playersList[0], viewState: 'set'};
    this.choosePlayer = this.choosePlayer.bind(this);
  }

  leaveAnimation()
  {
    this.setState({viewState: 'leaving'});
  }

  apearingAnimation()
  {
    this.setState({viewState: 'set'});
  }

  choosePlayer(playerKey){
    this.setState({selectedPlayer: playersList[playerKey]})
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <PlayerView selectedPlayer={this.state.selectedPlayer} state = {this.state.viewState}/>
        <PlayersList players={playersList} choosePlayer={this.choosePlayer}/>
      </div>
    );
  }

}

export default App;
