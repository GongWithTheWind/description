const express = require("express");
const path = require("path");
const db = require("../database/postgres.js");

const app = express();

app.use("/:homeId", express.static(path.join(__dirname, "../public/")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.post("/descriptions", (req, res) => {
//   db.getLatestHomeId((err, results) => {
//     const { homeId } = results[0];
//     db.saveHouse(homeId + 1, (error) => {
//       if (error) {
//         console.error(error);
//       }
//       res.sendStatus(200);
//     });
//   });
// });

// app.delete("/descriptions/:homeId", (req, res) => {
//   db.getLatestHomeId((err, results) => {
//     const { homeId } = results[0];
//     db.removeHouse(homeId, (error) => {
//       if (error) {
//         console.error(error);
//       }
//       res.sendStatus(200);
//     });
//   });
// });

app.get("/descriptions/:homeId", (req, res) => {
  const homeId = Number(req.params.homeId);
  db.getListing(homeId, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const {
        name,
        bathroom_quantity,
        general,
        guest_access,
        guest_quantity,
        highlight_description,
        highlight_title,
        guest_interactions,
        location,
        space_information,
        property_type,
        contact,
        image,
      } = result.rows[0];
      const data = {
        name: "Quaint home near the sea",
        propertyType: property_type,
        location,
        guests: guest_quantity,
        beds: {
          bedrooms: [["floor mattress", "double", "futon", "couch"], ["floor mattress", "queen", "couch"]],
        },
        bathrooms: bathroom_quantity,
        miniAd: {
          title: "This home is on people’s minds.",
          description: "It’s been viewed 500+ times in the past week.",
        },
        highlights: [{
          title: highlight_title,
          description: highlight_description,
        }],
        description: {
          general,
          theSpace: space_information,
          guestAccess: guest_access,
          interactionsWithGuests: guest_interactions,
        },
        amenities: {
          basics: ["smoking allowed", "iron", "essentials (towels,  bedsheets,  soap,  toilet paper,  pillows)", "heating", "pets allowed", "TV", "shampoo", "parking", "desk/workspace", "closet/drawers", "fireplace", "wifi"], 
          facilities: ["dryer", "pool", "gym", "jacuzzi", "washer"],
          safety: ["carbon monoxide detector"],
          dining: ["coffee/tea", "breakfast", "pizza oven"],
        },
        owner: {
          name,
          contact,
          image,
        },
      };
      res.send((data));
    }
  });
});

app.listen(3002, () => console.log("Listening on port 3002..."));
