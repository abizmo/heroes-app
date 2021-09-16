import heroes from "../data/heroes"

const getHeroById = (heroId) => heroes.find((hero) => hero.id === heroId)

export default getHeroById