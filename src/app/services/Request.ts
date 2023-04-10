export interface Request{
    //all the field should be match with the database.
  //   requestId: '2',
  //   employee: 
  //   {
  //   userName: 'mani_!23',
  //   password: 'mani123',
  //   firstName: "string",
  //   lastName: "string",
  //   profilePic: "string",
  //   designation: "string",
  //   managerId: 4,
  //   dateOfJoining: "2022-11-10T05:14:43.959Z",
  //   roles: [
  //     {
  //       id: 5,
  //       name: "string"
  //     }
  //   ],
  //   employeeId: 5
  // },
  //   date: "2022-19-11",
  //   statusForDay: "WFM",
  //   requestStatus: "PENDING"
  
    requestId: 0,
    employee: {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      profilePic: "",
      designation: "",
      managerId: 4,
      dateOfJoining: "",
      roles: [
        {
          id: 2,
          name: ""
        }
      ],
      employeeId: 5
    },
    date: "2022-11-10",
    statusForDay: "WFO",
    requestStatus: "PENDING"
  }