let dienstherrArray = [
  {
    value: "0",
    viewValue: "Bund"
  },
  {
    value: "2",
    viewValue: "Baden-Württemberg"
  },
  {
    value: "3",
    viewValue: "Bayern"
  },
  {
    value: "4",
    viewValue: "Berlin"
  },
  {
    value: "5",
    viewValue: "Brandenburg"
  },
  {
    value: "6",
    viewValue: "Bremen"
  },
  {
    value: "7",
    viewValue: "Hamburg"
  },
  {
    value: "8",
    viewValue: "Hessen"
  },
  {
    value: "9",
    viewValue: "Mecklenburg-Vorpommern"
  },
  {
    value: "10",
    viewValue: "Niedersachsen"
  },
  {
    value: "11",
    viewValue: "Nordrhein-Westfalen"
  },
  {
    value: "12",
    viewValue: "Rheinland-Pfalz"
  },
  {
    value: "13",
    viewValue: "Saarland"
  },
  {
    value: "14",
    viewValue: "Sachsen"
  },
  {
    value: "15",
    viewValue: "Sachsen-Anhalt"
  },
  {
    value: "16",
    viewValue: "Schleswig-Holstein"
  },
  {
    value: "17",
    viewValue: "Thüringen"
  }
]

const keyliste1 = {
  "dienstherr": [
    {
      "id": "0",
      "text": "Bund"
    }
  ],
  "besoldungsordnung": [
    {
      "id": "A",
      "text": "A"
    },
    {
      "id": "W",
      "text": "W"
    }
  ],
  "besoldungsgruppe": [
      {
          "id": "3",
          "text": "3"
      },
      {
          "id": "4",
          "text": "4"
      }
  ],
  "dienstalterstufe": [
      {
          "id": "1",
          "text": "ERFAHRUNGSSTUFE_UE1"
      }
  ]
}

const keyliste2 = {
  "dienstherr": [
    {
      "id": "0",
      "text": "Bund"
    }
  ],
  "besoldungsordnung": [
    {
      "id": "A",
      "text": "A"
    },
    {
      "id": "W",
      "text": "W"
    }
  ],
  "besoldungsgruppe": [
    {
      "id": "1",
      "text": "1"
    },
    {
      "id": "2",
      "text": "2"
    }
  ],
  "dienstalterstufe": [
    {
      "id": "2",
      "text": "ERFAHRUNGSSTUFE_UE6"
    }
  ]
}

const keyliste3 = {
  "dienstherr": [
    {
      "id": "0",
      "text": "Bund"
    }
  ],
  "besoldungsordnung": [
    {
      "id": "A",
      "text": "A"
    },
    {
      "id": "W",
      "text": "W"
    }
  ]
}

const resultFromCalculation = {
  "calc": [
    {
      "id": "1",
      "ruhegehalt": 3920.0,
      "versorgungsluecke": 3000.0
    },
    {
      "id": "2",
      "ruhegehalt": 2780.0,
      "versorgungsluecke": 2500.0
    },
    {
      "id": "3",
      "ruhegehalt": 2999.0,
      "versorgungsluecke": 2700.0
    }
  ]

}


module.exports = {

  getDienstherr: function () {

    const response = {
      result: {
        resultSuccess: "True",
        resultInfo: "",
        resultCount: dienstherrArray.length,
        resultLastInsertId: "",
        result: dienstherrArray
      }
    }

    return { status: 200, response: response }
  },


  getKeylisten: function (input) {

    const response = {
      result: {
        resultSuccess: "True",
        resultInfo: "",
        resultCount: keyliste1.length,
        resultLastInsertId: "",
        result: null
      }
    }


    if (input.body.besoldungsordnung === '' && input.body.besoldungsgruppe === "") {
      response.result.result = keyliste3;
      return { status: 200, response: response }

    }


    else if (input.body.besoldungsordnung === 'A' && input.body.besoldungsgruppe === "") {
      response.result.result = keyliste1;
      return { status: 200, response: response }

    }

    else if (input.body.besoldungsordnung === 'W' && input.body.besoldungsgruppe === "") {
      response.result.result = keyliste2;
      return { status: 200, response: response }

    }

    else if (input.body.besoldungsordnung !== '' && (input.body.besoldungsgruppe === "1" || input.body.besoldungsgruppe === "3")) {
      response.result.result = keyliste1;
      return { status: 200, response: response }

    }

    else if (input.body.besoldungsordnung !== '' && (input.body.besoldungsgruppe === "2" || input.body.besoldungsgruppe === "4")) {
      response.result.result = keyliste2;
      return { status: 200, response: response }

    }


    else {
      response.result.resultSuccess = 'False';
      return { status: 418, response: response }

    }



    // return { status: 200, response: response }
  },


  getKeylistenList: function (input) {

    const response = {
      result: {
        resultSuccess: "True",
        resultInfo: "",
        resultCount: keyliste1.length,
        resultLastInsertId: "",
        result: null
      }
    }


      response.result.result = keyliste2;
      return { status: 200, response: response }

    

  },
  calculateResult: function (input){

    const response = {
      result: {
        resultSuccess: "True",
        resultInfo: "",
        resultCount: keyliste1.length,
        resultLastInsertId: "",
        result: resultFromCalculation
      }
    }
    // console.log(input);
    return { status: 200, response: response }

  }

};
