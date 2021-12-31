////////////////////////////////////////////////////////////
// This is a code reference for backend/database section  //
////////////////////////////////////////////////////////////

// require('dotenv').config();

// const MONGO_URI = process.env['MONGO_URI'];
// const mongoose = require('mongoose'); 

// mongoose.connect( MONGO_URI, { } )
//         .then(()=>{ console.log("connected") })
//         .catch((err)=>{ console.log(err)});

// const personSchema = mongoose.Schema( {
//     name : { 
//       type : String, 
//       required : true
//     }, 
//     age : Number, 
//     favoriteFoods : [String]
// } );

// let Person = mongoose.model('Person', personSchema);

// const createAndSavePerson = (done) => {
//   // Create a document(model instance)
//   const person = new Person( {
//     name : "Jake Sung", 
//     age : 37, 
//     favoriteFoods : ["Pizza, Fish"]
//    });

//    // Save the document
//    person.save(function(err, data) { 
//     if (err) return console.log(err)
//     done(null, data);
//    });
// };

// const myPeople = [ 
//   { name : "Elly" , age: 13, favoriteFoods: ["fish", "soup"] }, 
//   { name : "Brian" , age: 66, favoriteFoods: ["banana", "apple"] }, 
//   { name : "Paul" , age: 27, favoriteFoods: ["coke", "coffee"] } 
// ];

// const createManyPeople = function(arrayOfPeople, done) {
//   Person.create(myPeople, function(err, people) {
//     if (err) return console.log(err)
//     done(null, people)
//   })
// };

// const findPeopleByName = (personName, done) => {
//   Person.find( { name: personName }, function(err, personFound) {
//     if (err) return console.log(err)
//     done(null, personFound)
//   } )
// };

// // model.findOne is useful to find properties declared as unique
// const findOneByFood = (food, done) => {
//   Person.findOne( {favoriteFoods:food}, function(err, data) {
//     if(err) return console.log(err)
//     done(null, data)
//   })
// };

// const findPersonById = (personId, done) => {
//   Person.findById( personId, function(err, data){
//     if (err) return console.log(err)
//     done(null, data)
//   } )
// };

// const findEditThenSave = (personId, done) => {
//   const foodToAdd = "hamburger";
//   Person.findById( personId, function(err, data){
//     if (err) return console.log(err)
//     person.favoriteFoods.push("hamburger")

//     person.save(function(err, data) { 
//       if (err) console.log(err)
//       done(null, data)
//     })
//   })
//   done(null /*, data*/);
// };

// const findAndUpdate = (personName, done) => {
//   const ageToSet = 20;
//   // modell.findAndUpdate(filter, update, new)
//   // set the third argument 'new'. Otherwise it will return unchanged object by default
//   Person.findAndUpdate({ name: personName }, { age : ageToSet }, { new : true }, (err, updatedDoc)=>{
//     if(err) return console.log(err)
//     done(null, updatedDoc)
//   })
//   done(null /*, data*/);
// };

// const removeById = (personId, done) => {
//   Person.findByIdAndRemove(personId, function(err, removedDoc){
//     if(err) return console.log(err)
//     done(null, removedDoc)
//   })
// };


// // Model.remove() is useful to delete all the documents
// //  matching given criteria.
// const removeManyPeople = (done) => {
//   const nameToRemove = "Mary";
//   // The response is a JSON object containing properties such as 
//   // deletedCount - containing the number of documents removed 
//   // from the collection.
//   Person.remove( { name : nameToRemove }, function(err, response){
//     if(err) return console.log(err)
//     done(null, response)
//   } )
//   done(null /*, data*/);
// };



// const queryChain = (done) => {
//   const foodToSearch = "burrito";
//   Person.find(foodToSearch)
//         // in sort method, 0 means descending order
//         // 1 means aescending order
//         .sort( { name : 1 } )
//         // limit method limits array size
//         .limit(2)
//          // in select method, 0 means false(hiding the property)
//          // 1 means true(showing the property)
//         .select( { age : 0 })
//         .exec(function(err, data){
//           if (err) return console.log(err)
//           done(null, data)
//         })
//         // if the callback is not passed, query won't work.
//         // you always have to pass this callback to exec method, which is
//         // last method of query chain
// };