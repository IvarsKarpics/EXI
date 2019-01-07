var ExtISPyB ={
   sites:[
      {
         name:'ESRF',
         url:'https://ispyb.esrf.fr/ispyb/ispyb-ws/rest',
         exiUrl:'https://ispyb.esrf.fr/ispyb/ispyb-ws/rest',
         beamlines:{
            SAXS:[
               'BM29'
            ],
            MX:[
               "ID23-1","ID29","ID30B","ID23-2","ID30A-3","ID30A-1","ID30A-2","BM14U","BM30A","ID14-1","ID14-2","ID14-3","ID14-4"
            ]
         }
      },
      {
         name:'ESRF TEST',
         url:'https://ispyb-valid.esrf.fr/ispyb/ispyb-ws/rest',
         exiUrl:'https://ispyb-valid.esrf.fr/ispyb/ispyb-ws/rest',
         beamlines:{
            SAXS:[
               'BM29'
            ],
            MX:[
               "ID23-1","ID29","ID30B","ID23-2","ID30A-3","ID30A-1","ID30A-2","BM14U","BM30A","ID14-1","ID14-2","ID14-3","ID14-4"
            ]
         }
      },
      {
         name:'EMBL TEST',
         url:'http://ispyb-test.embl-hamburg.de:8080/ispyb/ispyb-ws/rest',
         exiUrl:'http://pc593.embl.fr:8080/extispyb-ws/rest',
         beamlines:{
            SAXS:[
               'P12'
            ],
            MX:[
               'P13','P14'
            ]
         }
      },
      {
         name:'EMBL',
         url:'http://192.109.31.39/ispyb/ispyb-ws/rest',
         exiUrl:'http://pc593.embl.fr:8080/extispyb-ws/rest',
         beamlines:{
            SAXS:[
               'P12'
            ],
            MX:[
               'P13','P14'
            ]
         }
      },
      {
          name:'MAXIV',
          url:'https://ispyb.maxiv.lu.se/ispyb/ispyb-ws/rest',
          exiUrl:'https://ispyb.maxiv.lu.se/ispyb/ispyb-ws/rest',
          beamlines:{
              SAXS:[
               ],
              MX:[
                  {
                      name : "BioMAX",
                      sampleChangerType : 'ISARA'
                  }
              ]
          }

      },
      {
          name:'MAXIV TEST',
          url:'https://ispyb-test.maxiv.lu.se/ispyb/ispyb-ws/rest',
          exiUrl:'https://ispyb-test.maxiv.lu.se/ispyb/ispyb-ws/rest',
          beamlines:{
              SAXS:[
              ],
              MX:[
                  {
                      name : "BioMAX",
                      sampleChangerType : 'ISARA'
                  }
              ]
          }
     },
     {
         name:'Local',
         url:'http://pc593.embl.fr:8080/ispyb-ws/rest',
         exiUrl:'http://pc593.embl.fr:8080/extispyb-ws/rest'
      }
   ]
};
