var ExtISPyB ={
   version : 'alpha-u3',
   release_date : '2017/03/01',

   spaceGroups : ["P1", "P2", "P21", "C2", "P222", "P2221", "P21212", "P212121", "C2221", "C222", "F222", "I222", "I212121", "P4", "P41", "P42", "P43", "I4", "I41", "P422", "P4212", "P4122", "P41212", "P4222", "P42212", "P4322", "P43212", "I422", "I4122", "P3", "P31", "P32", "H3", "R3", "P312", "P321", "P3112", "P3121", "P3212", "P3221", "H32", "R32", "P6", "P61", "P65", "P62", "P64", "P63", "P622", "P6122", "P6522", "P6222", "P6422", "P6322", "P23", "F23", "I23", "P213", "I213", "P432", "P4232", "F432", "F4132", "I432", "P4332", "P4132", "I4132"],   
 

   sites:[
        {
         name:'EMBL Riga',
         url:'http://riga.embl-hamburg.de:8080/ispyb/ispyb-ws/rest',
         exiUrl:'http://riga.embl-hamburg.de:8080/ispyb/ispyb-ws/rest',
         beamlines:{
            SAXS:[
              { 
                   name : "P12"                   
               }

            ],
            MX:[
               { 
                   name : "P13",
                   sampleChangerType : 'FlexHCDDual'
               },
               { 
                   name : "P14",
                   sampleChangerType : 'FlexHCDDual'
               }                                             
            ]
         }

      }
   ]
};



