import React from 'react';
import { Link } from '../Link/Link';
import { Search } from '../Search/Search';
import { Title } from '../Title/Title';
import { Album } from '../Album/Album';
import { Artist } from '../Artist/Artist';
import { Song } from '../Song/Song';


import './App.css';

function App() {
  return (

    <div className="App">
      <nav className="App__nav">
        <img className="App__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/2048px-Youtube_Music_icon.svg.png" />
        <div className="App__LinkGroup">
          <Link
          actives
            text="Home"
            url="https://www.youtube.com/watch?v=fmOEKOjyDxU" />
          <Link
            text="Explore"
            url="https://www.youtube.com/watch?v=fmOEKOjyDxU"></Link>
          <Link
            text="Library"
            url="https://www.youtube.com/watch?v=fmOEKOjyDxU"></Link>
          <Search praceholder="Search" url="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-2.png "> </Search>
        </div>
        <img className="App__img" src="https://www.pinclipart.com/picdir/big/73-739007_icon-profile-picture-circle-png-clipart.png" />
      </nav>
      <section className="App__Section">
        <Title title="Your Favorites" disablePhoto></Title>
        <article className="Carrousel">
          <Artist name="Twice" url="https://www.nacionrex.com/__export/1624374755140/sites/debate/img/2021/06/22/twice-como-se-formo-historia-pre-debut-kpop_1_crop1624374740920.jpg_423682103.jpg" number="7688992"></Artist>
          <Song artist="Loona" name="Star" url="https://http2.mlstatic.com/D_NQ_NP_936084-MLC44440598033_122020-V.jpg"></Song>
          <Album artist="Mamamoo" name="Travel" url="https://www.toktokstore.com/wp-content/uploads/2020/11/ejp4c97xyaibldh.jpg" ></Album>
        </article>
      </section>

      <section className="App__Section">
        <Title title="Mamamoo" url=" https://6.viki.io/image/39f03f2762e640cd8282eb760c44bbea.jpeg?s=900x600&e=t" subtitle="Similar to"></Title>
        <article className="Carrousel">
          <Artist name="Twice" url="https://www.nacionrex.com/__export/1624374755140/sites/debate/img/2021/06/22/twice-como-se-formo-historia-pre-debut-kpop_1_crop1624374740920.jpg_423682103.jpg" number="7688992"></Artist>
          <Song artist="Loona" name="Star" url="https://http2.mlstatic.com/D_NQ_NP_936084-MLC44440598033_122020-V.jpg"></Song>
          <Album artist="Mamamoo" name="Travel" url="https://www.toktokstore.com/wp-content/uploads/2020/11/ejp4c97xyaibldh.jpg" ></Album>
        </article>
      </section>

    </div>
  )
}
export default App;
