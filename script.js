let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    console.log("PrintDeveloperbyMap button clicked");
    arr.map(employee => {
      if(employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach(employee => {
      if(employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  function addData() {
    let newEmployee = {id:4, name:"sanket", age:"20", profession:"intern"};
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    arr = arr.filter(employee => employee.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    let newArray = [
      {id:4, name:"kartik", age:"22", profession:"designer"},
      {id:5, name:"mahesh", age:"25", profession:"manager"},
      {id:6, name:"ajay", age:"23", profession:"tester"}
    ];
    let concatenatedArray = arr.concat(newArray);
    console.log(concatenatedArray);
  }