const Question = require('../models/question');
const Option = require('../models/option');

//cerate a question
module.exports.create = async function (req, res) {
  try {
   
    const ques = await Question.create(req.body);
    res.send(ques);
  } catch (err) {
   
    res.status(500).send("Error creating question");
  }
};

//Show a question
module.exports.showDetails = async function (req, res) {
  try {
   

    const ques = await Question.findById(req.params.id).populate('options');

    if (ques) {
      res.send(ques);
    } else {
      res.status(404).send("Question not found");
    }
  } catch (err) {
   
    res.status(500).send("Error fetching question details");
  }
};

//Delete a question
module.exports.deleteQues = async function (req, res) {
  try {
    const ques = await Question.findByIdAndRemove(req.params.id);

    if (ques) {
      // Delete all the associated options with the question
      await Option.deleteMany({ question: req.params.id });
      res.send("Question deleted");
    } else {
      res.status(404).send("Question not found");
    }
  } catch (err) {
   
    res.status(500).send("Error deleting question");
  }
};
