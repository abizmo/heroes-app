import heroes from "../data/heroes";

const getHeroesBySuperhero = (superhero) => 
  heroes.filter(hero => hero.superhero.toLowerCase().includes(superhero.toLowerCase()))

export default getHeroesBySuperhero
