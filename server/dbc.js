const mongoose = require('mongoose');

// Connect to remote MongoDB database
mongoose.connect(process.env['dburi'], { useNewUrlParser: true });
mongoose.set('strictQuery', true)

// Create a MongoDB schema for the player
const playerSchema = new mongoose.Schema({
  account: {
    playername: { type: String, required: true },
    hash: { type: String, required: true },
    email: { type: String, required: true },
    verification: {
      v: { type: Number, required: true, enum: [0, 1] },
      code: { type: Number, required: true },
      id: { type: String, required: true }
    },
    creation: { type: Date, required: false },
    status: { type: Number, required: true, enum: [0, 1, 2] },
    op: { type: Number, required: true, enum: [0, 1, 2] }
  },
  game: {
    rank: { type: Number, required: true, min: 0 },
    exp: { type: Number, required: true, min: 0 },
    bal: { type: Number, required: true, min: 0 },
    gems: { type: Number, required: true, min: 0 },
    faction: { type: String, required: false },
    metadata: { required: false },
    equipped: {
      abilities: {
        type: [[Number]],
        required: false
      },
      armor: {
        helm: {
          type: [Number],
          required: false
        },
        chpl: {
          type: [Number],
          required: false
        },
        legg: {
          type: [Number],
          required: false
        },
        boot: {
          type: [Number],
          required: false
        }
      }
    },
    inventory: {
      type: [[Number]],
      required: false
    },
    birds: {
      type: [[Number]],
      required: false
    },
    progress: {
      type: [[String]],
      required: false
    },
    friends: {
      type: [[String]],
      required: false
    }
  }
});


// Create a model for the schema
const Player = mongoose.model('Player', playerSchema);

function gsi() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000000);
  return `${timestamp}-${random}`;
}

// Create a new document (C in 
function registerUser (email,user,pwdh) {
  const now = new Date();
  const codeI = Math.floor(Math.random() * (999999 - 111111 + 1) + 111111);
  const idI = gsi();
const newPlayer = new Player({
  account: {
    playername: user,
    hash: pwdh,
    email: email,
    verification: {
      v: 0,
      code: codeI,
      id: idI
    },
    creation: now,
    status: 1,
    op: 0
  },
  game: {
    rank: 0,
    exp: 0,
    bal: 0,
    gems: 0,
    faction: "",
    metadata: {},
    equipped: {
      abilities: [],
      armor: {}
    },
    inventory: [],
    birds: [],
    progress: [],
    friends: []
  }
});


// Save the document to the database (C in CRUD)

newPlayer.save((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Player data saved successfully!');
  }
});
return [codeI,idI]
}

// Find all documents in the database (R in CRUD)

/* FIND BOILERPLATE
Player.find((error, players) => {
  if (error) {
    console.log(error);
  } else {
    console.log(players);
  }
});
*/


async function chkUsername(usr) {
  try {
    const players = await Player.find({});
    for (let i = 0; i < players.length; i++) {
      curref = players[i].account.playername
      if (curref.toLowerCase() === usr.toLowerCase()) {
        return 0;
      }
    }
    
    return 1;
  } catch (err) {
    console.error(err);
    return false;
  }
}

async function chkEmail(eml,usr) {
  try {
    const players = await Player.find({});
    for (let i = 0; i < players.length; i++) {
      curref = players[i].account.email
      if (curref.toLowerCase() === eml.toLowerCase()) {
        return 0;
      }
    }
    console.log("NEW MAKE REQUEST >> " + usr);
    return 1;
  } catch (err) {
    console.error(err);
    return false;
  }
}


async function chkVerifyHash(given) {
  try {
    const players = await Player.find({});
    for (let i = 0; i < players.length; i++) {
      curref = players[i].account.email
      if (curref.toLowerCase() === eml.toLowerCase()) {
        return 0;
      }
    }
    console.log("NEW MAKE REQUEST >> " + usr);
    return 1;
  } catch (err) {
    console.error(err);
    return false;
  }
}




/*
// Find a specific document by its ID (R in CRUD)
Player.findById('<player_id>', (error, player) => {
  if (error) {
    console.log(error);
  } else {
    console.log(player);
  }
});

// Update a specific document (U in CRUD)
Player.findByIdAndUpdate('<player_id>', {
  level: 2
}, (error, player) => {
  if (error) {
    console.log(error);
  } else {
    console.log(player);
  }
});

// Delete a specific document (D in CRUD)
Player.findByIdAndDelete('<player_id>', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Player data deleted successfully!');
  }
});
*/


module.exports = { registerUser, chkUsername, chkEmail, chkVerifyHash }