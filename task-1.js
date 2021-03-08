function job(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log( key + ", " + obj[key]);
      }
    }
  }
  
  
  let job1 = {
    name: 'Z',
    age: '32',
    occupation: true
  }
  
  let job2 = Object.create(job1);
  job2.city = "Teacher";
  
  job(job2)