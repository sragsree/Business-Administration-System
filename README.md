# Business Administration System

A Web based Business Administration System developed with MEAN Stack that includes subsystems for:

  - Employee Management
  - Vendor Management
  - Inventory Management
  - Ticket Management

This application uses node.js as the server, MongoDB as database, Express.js as the backend and Angular.js for front end. The instance of MongoDB is hosted at https://mlab.com/.

### Installation

The following sections gives you the instruction to get this application up and running in your machine. The installation is as follows

 - Install npm registry and nodeJS
```
$ sudo apt-get update
$ sudo apt-get install nodejs
```
```
$ sudo apt-get install npm
```
 - Install ExpressJS
```
$ npm install -g express
```
  - Install AngularJS
```
$ npm install angular
```
  - Install Mongoose
```
$ npm install mongoose
```
 - Install dependencies
```
$ npm install body-parser
```
```
$ npm install ejs
```
```
$ npm install passport
```
```
npm install -g nodemon
```

To setup the DB create an account in https://mlab.com/ and update it's credentials details in connection String file of mongoose
```
var mongoose = require('mongoose');
mongoose.connect(< 'mLab connection credentials' >);
```
To fill the DB with sample data you can use JSON generator available in http://www.json-generator.com/

Passport is used for authentication and Postman can be used for testing.
 
### Usage

```
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

### Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

License
----

**Free Software, Hell Yeah!**
