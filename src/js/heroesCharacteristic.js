import side  from './side'

const characteristicsOfHeroes = {
  [side.USER]: { 
    Bowman: {
      attack: 25,
      defence: 25,
      stepsRadius: 2,
      attackRadius: 2,
    },
    Magician: {
      attack: 10,
      defence: 40,
      stepsRadius: 1,
      attackRadius: 4,
    },
    Swordsman: {
      attack: 40,
     defence: 10,
      stepsRadius: 4,
      attackRadius: 1,
    },
  },  
  [side.COMP]: { 
    Daemon: {
      attack: 10,
      defence: 40,
      stepsRadius: 1,
      attackRadius: 4,
    },
    Undead: {
      attack: 40,
      defence: 10,
      stepsRadius: 4,
      attackRadius: 1,
    },
    Vampire: {
      attack: 25,
      defence: 25,
      stepsRadius: 2,
      attackRadius: 2,
    },
  }  
};

export default characteristicsOfHeroes;
