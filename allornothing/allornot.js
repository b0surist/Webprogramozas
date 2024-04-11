const possiblyPerfect = (key, answers) => {
    let jo = 0;
    let rossz = 0;
  
    for (let i = 0; i < key.length; i++) {
      const vart = key[i];
      const kapott = answers[i];
  
      if (vart !== "_") {
        rossz++;
  
        if (vart === kapott) {
          jo++;
        }
      }
    }
  
    return jo === rossz || jo === 0;
  };
