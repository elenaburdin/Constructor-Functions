function Hero(name, alterEgo, species) {
    this.name = name,
        this.alterEgo = alterEgo,
        this.species = species
}

const hero1 = new Hero('Iron Man', 'Tony Start', 'Human');
console.log(hero1);

document.getElementById('getHero').innerHTML = hero1.name;
document.getElementById('getHero').innerHTML = hero1.alterEgo;
document.getElementById('getHero').innerHTML = hero1.species;



