const CreateUser = async (req, res) => {
  try {
    res.send("Everything is OK");
  } catch (error) {
    console.log(error);
  }
};


module.exports = { CreateUser };
