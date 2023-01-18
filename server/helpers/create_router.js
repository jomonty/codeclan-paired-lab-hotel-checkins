const express = require('express');
const ObjectId = require('mongodb').ObjectId;
// const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  // GET index route
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then(dbRes => {
        res.json(dbRes);
      })
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error })
      })
  });

  // GET show route
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectId(id) })
      .then(dbRes => {
        res.json(dbRes);
      })
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error});
      });
  })

  // POST create route
  router.post('/', (req, res) => {
    const newBooking = req.body;
    collection
      .insertOne(req.body)
      .then(dbRes => {
        const newId = ObjectId(dbRes.insertedId);
        collection
          .findOne({ _id: newId })
          .then(insertedBooking => {
            res.json(insertedBooking);
          });
      })
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error});
      })
  })

  // PUT update route
  router.put('/', (req, res) => {
    const idToUpdate = req.body._id;
    const bookingToUpdate = {
      name: req.body.name,
      email: req.body.email,
      checked_in: req.body.checked_in
    };
    collection
      .updateOne(
        { _id: ObjectId(idToUpdate) },
        { $set: bookingToUpdate }
      )
      .then(dbRes => {
        res.json(dbRes);
      })
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error });
      })
    // res.json(`PUT, update route for id: ${id}`)
  })

  // DELETE delete route
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectId(id) })
      .then(dbRes => {
        res.json(dbRes);
      })
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error})
      });
    // res.json(`DELETE, delete route for id: ${id}`)
  })

  return router;
}

module.exports = createRouter;