async function simulateTouches() {
    const touchCount = 6;
  
    const touchPromises = Array.from({ length: touchCount }).map((_, index) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Touch ${index + 1} simulated`);
          resolve();
        }, Math.random() * 1000); // случайная задержка до 1 секунды
      });
    });
  
    await Promise.all(touchPromises);
    console.log('All touches simulated');
  }
  
  simulateTouches();