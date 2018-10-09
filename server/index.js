const newrelic = require("newrelic");
const express = require("express");
const path = require("path");
const controllers = require("./controllers/descriptions");

const app = express();

app.use("/:homeId", express.static(path.join(__dirname, "../public")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/descriptions", (req, res) => {
  controllers.postListing((err) => {
    if (err) {
      res.sendStatus(404);
    }
    res.sendStatus(200);
  });
});

app.delete("/descriptions/:listingId", (req, res) => {
  const listingId = Number(req.params.listingId);
  controllers.removeListing(listingId, (err) => {
    if (err) {
      res.sendStatus(400);
    }
    res.sendStatus(200);
  });
});

app.get("/descriptions/:homeId", (req, res) => {
  const homeId = Number(req.params.homeId);
  controllers.getListing(homeId, (err, result) => {
    if (err) {
      res.sendStatus(404);
    } else {
      const {
        bathroom_quantity,
        general,
        guest_access,
        guest_quantity,
        highlight_description,
        highlight_title,
        guest_interactions,
        location,
        name,
        space_information,
        property_type,
        owner_name,
        contact,
        image,
      } = result.rows[0];
      const data = {
        name,
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
          name: owner_name,
          contact,
          image,
        },
      };
      res.send((data));
    }
  });
});

app.listen(3002, () => console.log("Listening on port 3002..."));
