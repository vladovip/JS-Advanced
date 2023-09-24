function solve(juices) {
    const flavorsObj = {};
    const bottlesFlavor = {};
    juices.forEach((juice) => {
      let [juiceName, juiceQuantity] = juice.split(" => ");
      juiceQuantity = Number(juiceQuantity);
      if (!flavorsObj[juiceName]) flavorsObj[juiceName] = 0;
      flavorsObj[juiceName] += juiceQuantity;
      if (flavorsObj[juiceName] >= 1000) {
        const bottles = Math.floor(flavorsObj[juiceName] / 1000);
        if (!bottlesFlavor[juiceName]) bottlesFlavor[juiceName] = 0;
        bottlesFlavor[juiceName] += bottles;
        flavorsObj[juiceName] -= bottles * 1000;
      }
    });
  
    for (const bottle in bottlesFlavor) {
      console.log(`${bottle} => ${bottlesFlavor[bottle]}`);
    }
  }