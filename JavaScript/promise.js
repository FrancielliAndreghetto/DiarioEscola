async function a() {
    b();
    await c();
    await d();
    alertUser('a');
  }

a();
  
  function b() {
    return;
    alertUser('b');
  }
  
  function c() {
    return new Promise((resolve) => {
      resolve();
      alertUser('c');
    });
  }
  
  function d() {
    return new Promise((resolve) => {
      alertUser('d');
    });
  }

  
  function alertUser(message) {
    console.log('A função é: '+message);
  }

//   3) Qual a ordem dos prints no console?
//        A ordem dos prints são c e d.

// 4) Existe algum erro nesse código? Se sim, comente sobre?

//  Sim, esse código tem dois erros, o primeiro é na função b onde tem um return antes da chamada, 
//  logo isso significa que a função alertUser nunca vai ser chamada.
//  O segundo erro é o await sem promise em d, o uso do await só deve ser feito quando retorna uma promise, 
//  resolvida ou rejeitada, no caso desse código a função A esperaria para sempre para ser executada.