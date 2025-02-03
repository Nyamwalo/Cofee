const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://deez:Ochuodho90*@cluster0.gz7xy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const db = client.db("Referral_codes");
    const coll = db.collection("Referrals");

    const docs = [
      // insert code
      { address: "Hill peak", ref_code: 100, is_manager_code: 401 },
      { address: "Siaya", ref_code: 201, is_manager_code: 431 },
      { address: "Nairobi", ref_code: 210, is_manager_code: 471 },
      { address: "Zimmerman", ref_code: 240, is_manager_code: 450 },
    ];
    const result = await coll.insertMany(docs);

    console.log(result.insertedIds); // display the results of your operation
  } finally {
    await client.close(); // Ensures that the client will close when finish/error
  }
}
run().catch(console.dir);
