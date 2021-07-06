import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import md5 from 'md5';

// Components
import { Pagination } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../../components/Header';
import CardHeroes from '../../components/CardHeroes';

// Styles and Images
import * as S from './styles';
import { searchIcon } from '../../assets/images';

function Home() {
  const timestamp = Number(new Date());
  const publicKey = '103248e9efd30606097ef4c255d11c69';
  const privateKey = 'eb3576de0b9929bb1287be582e8389b71d7bd180';
  const hash = md5(timestamp + privateKey + publicKey);

  const [heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState('');
  const [heroesFiltered, setHeroesFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [heroesPerPage, setHeroesPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=100`).then((res) => {
      setLoading(false);
      const { data } = res.data;
      setHeroes(data.results);
      setTotalPages(Math.ceil(data.results.length / heroesPerPage));
    });
  }, []);

  useEffect(() => {
    const filtered = heroes.filter(
      (item) => item.name.toLowerCase().includes(search.toLowerCase()),
    );
    setHeroesFiltered(filtered);
  }, [search]);

  const changePage = (e, numberPage) => {
    setPage(numberPage);
  };

  const startIndex = (page - 1) * heroesPerPage;
  const selectedHeroes = heroes.slice(startIndex, startIndex + heroesPerPage);

  return (
    <S.Container>
      <Header />

      <S.MainSection>
        <h1>Busca de personanges</h1>

        <S.ContainerInput>
          <h3>Nome do personagem</h3>

          <div>
            <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
            <a href="#">
              <img src={searchIcon} alt="iconeSearch" />
            </a>
          </div>
        </S.ContainerInput>

        {loading ? (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          >
            <CircularProgress />
          </div>

        ) : (
          <S.ContainerResults>
            <S.ContainerTitleCard>
              <p>Personagem</p>
              <p>Séries</p>
              <p>Eventos</p>
            </S.ContainerTitleCard>
            {search !== '' && heroesFiltered.length > 0 ? (
              heroesFiltered.map((res) => {
                const { path, extension } = res.thumbnail;
                const { items } = res.series;
                const eventos = res.events;
                const series = items.map((serie) => serie.name).slice(0, 3);
                const eventosSlice = eventos.items.map((event) => event.name).slice(0, 3);

                return <CardHeroes key={res.id} name={res.name} img={`${path}.${extension}`} series={series} events={eventosSlice} />;
              })
            ) : search !== '' && !heroesFiltered.length ? (
              <S.ContainerTextError>
                <h1>Não possui resultados disponíveis :D</h1>
              </S.ContainerTextError>
            ) : (
              selectedHeroes.map((res) => {
                const { path, extension } = res.thumbnail;
                const { items } = res.series;
                const eventos = res.events;
                const series = items.map((serie) => serie.name).slice(0, 3);
                const eventosSlice = eventos.items.map((event) => event.name).slice(0, 3);

                return <CardHeroes key={res.id} name={res.name} img={`${path}.${extension}`} series={series} events={eventosSlice} />;
              })
            )}
          </S.ContainerResults>
        )}

      </S.MainSection>
      <S.Footer>
        <Pagination count={totalPages} onChange={changePage} variant="outlined" shape="rounded" defaultPage={1} page={page} color="primary" />
      </S.Footer>
    </S.Container>
  );
}

export default Home;
