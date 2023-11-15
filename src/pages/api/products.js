const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.g79cke1.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run(req, res) {
  try {
    await client.connect();
    const productCollection = client.db("hey-tech").collection("products");

    if (req.method === "GET") {
      const products = await productCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: products });
    }

    if (req.method === "POST") {
      const products = req.body;
      const result = await productCollection.insertOne(products);
      res.json(result);
    }
  } catch (error) {
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default run;
