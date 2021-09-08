const step1 = () => {
  setTimeout(()=>{
    console.log('first step');
  }, 3000);
}

const step2 = () => {
  console.log('second step');
}

step1();
step2();