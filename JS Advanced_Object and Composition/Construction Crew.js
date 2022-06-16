function solve(workerObj) {
  
     if (workerObj.dizziness == true ){
         workerObj.levelOfHydrated += 0.1 *workerObj.weight * workerObj.experience;
         workerObj.dizziness = false;
         return workerObj;
     } else {
         return workerObj; 
     }

}

solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });

solve({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true });

solve({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false });
