function solve(heroArr) {
    let register = [];
  
    while (heroArr.length != 0) {
      let [name, level, items] = heroArr.shift().split(" / ");
      level = Number(level);
      let hero = {};
  
      items = items ? items.split(", ") : [];
  
      hero = {
        name,
        level,
        items,
      };
  
      register.push(hero);
    }
    console.log(JSON.stringify(register));
  }