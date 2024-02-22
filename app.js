const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mongoose = require("mongoose");
const farmerModel = require("./model");

// mongoose.connect("mongodb://0.0.0.0:27017/farmer");
mongoose.connect("mongodb+srv://sampathganesh97:Vallabha%231234@cluster0.khbroee.mongodb.net/farmer?retryWrites=true&w=majority");

mongoose.set("debug", (collectionName, method, query, doc) => {
    console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});

const db = mongoose.connection;


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://sampathganesh97:Vallabha%1234@cluster0.khbroee.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


db.once("open", function () {
  console.log("Connected to db successfully");
});




const app = express();

const constants = {defaultPassword:"asnoasnoianfoinfo",supPassword:"dsjfnsodfoifnoifndsoifndo",Chainagelimit:2}

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

app.get("/getFarmers", function(req, res){
  let chainageQuery=parseInt(req.query.value)
  farmerModel.find({Chainage: {$gt:chainageQuery-constants.Chainagelimit, $lt:chainageQuery+constants.Chainagelimit}}).exec((err, farmerResult) => {
    // console.log(animals);
    if(err){
      res.send({status: "Failed", message:err})
    }
    else{
      res.send(farmerResult);
    }
  });

})

app.get("/", function(req,res){
    res.sendFile(__dirname + "/loginpage.html");
  });

app.post("/", function(req,res){
  var email = req.body.email;
  var password = req.body.password;

  console.log(email, password);
  if (password == constants.defaultPassword){
    res.sendFile(__dirname + "/index.html");
  }
  else if (password == constants.supPassword) {
    res.sendFile(__dirname + "/ROU.html");
  }
  else {
    res.sendFile(__dirname + "/wrong.html")
  }
})

app.get("/loginpage", function(req, res){
  res.sendFile(__dirname + "/loginpage.html");
})

app.get("/index", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.get("/rou", function(req, res){
  res.sendFile(__dirname + "/ROU.html");
})

    app.get("/farmercrossings", function(req, res){
      res.sendFile(__dirname + "/farmercrossings.html");
    })

    app.get("/SV_STATION", function(req, res){
      res.sendFile(__dirname + "/SV_STATION.html");
    })

      app.get("/sv_09", function(req, res){
      res.sendFile(__dirname + "/sv_09.html");
      })

      app.get("/sv_10", function(req, res){
      res.sendFile(__dirname + "/sv_10.html");
      })

      app.get("/sv_10", function(req, res){
      res.sendFile(__dirname + "/sv_10.html");
      })

      app.get("/sv_11", function(req, res){
      res.sendFile(__dirname + "/sv_11.html");
      })

      app.get("/sv_12", function(req, res){
      res.sendFile(__dirname + "/sv_12.html");
      })

      app.get("/sv_13", function(req, res){
      res.sendFile(__dirname + "/sv_13.html");
      })

      app.get("/sv_14", function(req, res){
      res.sendFile(__dirname + "/sv_14.html");
      })

      app.get("/sv_15", function(req, res){
      res.sendFile(__dirname + "/sv_15.html");
      })

app.get("/Mechanical", function(req, res){
res.sendFile(__dirname + "/Mechanical.html");
})
  app.get("/Mech_equipment", function(req, res){
  res.sendFile(__dirname + "/Mech_equipment.html");
  })

app.get("/Operations", function(req, res){
res.sendFile(__dirname + "/Operations.html");
})
  app.get("/SOP", function(req, res){
  res.sendFile(__dirname + "/SOP.html");
  })
  app.get("/imsschedule", function(req, res){
  res.sendFile(__dirname + "/imsschedule.html");
  })
  app.get("/jan", function(req, res){
  res.sendFile(__dirname + "/jan.html");
  })
  app.get("/feb", function(req, res){
  res.sendFile(__dirname + "/feb.html");
  })
  app.get("/mar", function(req, res){
  res.sendFile(__dirname + "/mar.html");
  })
  app.get("/apr", function(req, res){
  res.sendFile(__dirname + "/apr.html");
  })
  app.get("/may", function(req, res){
  res.sendFile(__dirname + "/may.html");
  })
  app.get("/jun", function(req, res){
  res.sendFile(__dirname + "/jun.html");
  })
  app.get("/jul", function(req, res){
  res.sendFile(__dirname + "/jul.html");
  })
  app.get("/aug", function(req, res){
  res.sendFile(__dirname + "/aug.html");
  })
  app.get("/sep", function(req, res){
  res.sendFile(__dirname + "/sep.html");
  })
  app.get("/oct", function(req, res){
  res.sendFile(__dirname + "/oct.html");
  })
  app.get("/nov", function(req, res){
  res.sendFile(__dirname + "/nov.html");
  })
  app.get("/dec", function(req, res){
  res.sendFile(__dirname + "/dec.html");
  })

app.get("/sv_09rc", function(req, res){
res.sendFile(__dirname + "/sv_09rc.html");
})

app.get("/sv_10rc", function(req, res){
res.sendFile(__dirname + "/sv_10rc.html");
})

app.get("/sv_11rc", function(req, res){
res.sendFile(__dirname + "/sv_11rc.html");
})

app.get("/sv_12rc", function(req, res){
res.sendFile(__dirname + "/sv_12rc.html");
})

app.get("/sv_13rc", function(req, res){
res.sendFile(__dirname + "/sv_13rc.html");
})

app.get("/sv_14rc", function(req, res){
res.sendFile(__dirname + "/sv_14rc.html");
})

app.get("/sv_15rc", function(req, res){
res.sendFile(__dirname + "/sv_15rc.html");
})

app.get("/loginpage", function(req, res){
res.sendFile(__dirname + "/loginpage.html");
})

app.get("/FAS", function(req, res){
res.sendFile(__dirname + "/FAS.html");
})

app.get("/SV_STATION_home", function(req, res){
res.sendFile(__dirname + "/SV_STATION_home.html");
})


app.get("/Instrumentation", function(req, res){
res.sendFile(__dirname + "/Instrumentation.html");
})

app.get("/Electrical", function(req, res){
res.sendFile(__dirname + "/Electrical.html");
})

app.get("/Telecom", function(req, res){
res.sendFile(__dirname + "/Telecom.html");
})

app.get("/Purchase_orders", function(req, res){
res.sendFile(__dirname + "/Purchase_orders.html");
})

app.get("/sv_09docs", function(req, res){
res.sendFile(__dirname + "/sv_09docs.html");
})

app.get("/sv_10docs", function(req, res){
res.sendFile(__dirname + "/sv_10docs.html");
})

app.get("/sv_11docs", function(req, res){
res.sendFile(__dirname + "/sv_11docs.html");
})

app.get("/sv_12docs", function(req, res){
res.sendFile(__dirname + "/sv_12docs.html");
})

app.get("/sv_13docs", function(req, res){
res.sendFile(__dirname + "/sv_13docs.html");
})

app.get("/sv_14docs", function(req, res){
res.sendFile(__dirname + "/sv_14docs.html");
})

app.get("/sv_15docs", function(req, res){
res.sendFile(__dirname + "/sv_15docs.html");
})

app.get("/ManpowerPO", function(req, res){
res.sendFile(__dirname + "/ManpowerPO.html");
})

app.get("/crossings", function(req, res){
res.sendFile(__dirname + "/crossings.html");
})

app.get("/AMCsPO", function(req, res){
res.sendFile(__dirname + "/AMCsPO.html");
})

app.get("/VDS_ROU", function(req, res){
res.sendFile(__dirname + "/VDS_ROU.html");
})

app.get("/RBS_ROU", function(req, res){
res.sendFile(__dirname + "/RBS_ROU.html");
})

app.get("/VBS_ROU", function(req, res){
res.sendFile(__dirname + "/VBS_ROU.html");
})

app.get("/SRS_ROU", function(req, res){
res.sendFile(__dirname + "/SRS_ROU.html");
})

app.get("/CP02Contacts", function(req, res){
res.sendFile(__dirname + "/CP02Contacts.html");
})

app.get("/CP03Contacts", function(req, res){
  res.sendFile(__dirname + "/CP03Contacts.html");
})

app.get("/CP04Contacts", function(req, res){
  res.sendFile(__dirname + "/CP04Contacts.html");
})

app.get("/CP05Contacts", function(req, res){
  res.sendFile(__dirname + "/CP05Contacts.html");
})

app.get("/CP06Contacts", function(req, res){
  res.sendFile(__dirname + "/CP06Contacts.html");
})

app.get("/CP07Contacts", function(req, res){
  res.sendFile(__dirname + "/CP07Contacts.html");
})

app.get("/CP08Contacts", function(req, res){
  res.sendFile(__dirname + "/CP08Contacts.html");
})

app.get("/CP09Contacts", function(req, res){
  res.sendFile(__dirname + "/CP09Contacts.html");
})

app.get("/CP10Contacts", function(req, res){
  res.sendFile(__dirname + "/CP10Contacts.html");
})

app.get("/CP11Contacts", function(req, res){
  res.sendFile(__dirname + "/CP11Contacts.html");
})

app.get("/CP12Contacts", function(req, res){
  res.sendFile(__dirname + "/CP12Contacts.html");
})

app.get("/CP13Contacts", function(req, res){
  res.sendFile(__dirname + "/CP13Contacts.html");
})

app.get("/CP14Contacts", function(req, res){
  res.sendFile(__dirname + "/CP14Contacts.html");
})

app.get("/CP16Contacts", function(req, res){
  res.sendFile(__dirname + "/CP16Contacts.html");
})

app.get("/CP17Contacts", function(req, res){
  res.sendFile(__dirname + "/CP17Contacts.html");
})

app.get("/CP18Contacts", function(req, res){
  res.sendFile(__dirname + "/CP18Contacts.html");
})

app.get("/SV06Contacts", function(req, res){
  res.sendFile(__dirname + "/SV06Contacts.html");
});

app.get("/SV07Contacts", function(req, res){
  res.sendFile(__dirname + "/SV07Contacts.html");
});

app.get("/SV08Contacts", function(req, res){
  res.sendFile(__dirname + "/SV08Contacts.html");
});

app.get("/SV09Contacts", function(req, res){
  res.sendFile(__dirname + "/SV09Contacts.html");
});

app.get("/SV10Contacts", function(req, res){
  res.sendFile(__dirname + "/SV10Contacts.html");
});

app.get("/SV11Contacts", function(req, res){
  res.sendFile(__dirname + "/SV11Contacts.html");
});

app.get("/SV12Contacts", function(req, res){
  res.sendFile(__dirname + "/SV12Contacts.html");
});

app.get("/SV13Contacts", function(req, res){
  res.sendFile(__dirname + "/SV13Contacts.html");
});

app.get("/SV14Contacts", function(req, res){
  res.sendFile(__dirname + "/SV14Contacts.html");
});

app.get("/SV16Contacts", function(req, res){
  res.sendFile(__dirname + "/SV16Contacts.html");
});

app.get("/SV17Contacts", function(req, res){
  res.sendFile(__dirname + "/SV17Contacts.html");
});

app.get("/SV18Contacts", function(req, res){
  res.sendFile(__dirname + "/SV18Contacts.html");
});

app.get("/SV19Contacts", function(req, res){
  res.sendFile(__dirname + "/SV19Contacts.html");
});

app.get("/SV20Contacts", function(req, res){
  res.sendFile(__dirname + "/SV20Contacts.html");
});

app.get("/SV21Contacts", function(req, res){
  res.sendFile(__dirname + "/SV21Contacts.html");
});

app.get("/VVSPLHomePage", function(req, res){
  res.sendFile(__dirname + "/VVSPLHomePage.html");
});

app.get("/VDPLHomePage", function(req, res){
  res.sendFile(__dirname + "/VDPLHomePage.html");
});

app.get("/SVStationLocation", function(req, res){
  res.sendFile(__dirname + "/SVStationLocation.html");
});

app.get("/SVStationEmergencyContacts", function(req, res){
  res.sendFile(__dirname + "/SVStationEmergencyContacts.html");
});

app.get("/VVSPLCasedCrossings", function(req, res){
  res.sendFile(__dirname + "/VVSPLCasedCrossings.html");
});

app.get("/VVSPLCrossings", function(req, res){
  res.sendFile(__dirname + "/VVSPLCrossings.html");
});

app.get("/VVSPLDeptManuals", function(req, res){
  res.sendFile(__dirname + "/VVSPLDeptManuals.html");
});

app.get("/VDPLSVStationLocation", function(req, res){
  res.sendFile(__dirname + "/VDPLSVStationLocation.html");
});

app.get("/VDPLSVStationEmergencyContacts", function(req, res){
  res.sendFile(__dirname + "/VDPLSVStationEmergencyContacts.html");
});

app.get("/VDPLCasedCrossings", function(req, res){
  res.sendFile(__dirname + "/VDPLCasedCrossings.html");
});

app.get("/VDPLOperations", function(req, res){
  res.sendFile(__dirname + "/VDPLOperations.html");
});

app.get("/VDPLDeptManuals", function(req, res){
  res.sendFile(__dirname + "/VDPLDeptManuals.html");
});

app.get("/VDPLDeptManuals", function(req, res){
  res.sendFile(__dirname + "/VDPLDeptManuals.html");
});

app.get("/VDPLCrossings", function(req, res){
  res.sendFile(__dirname + "/VDPLCrossings.html");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000");
});
