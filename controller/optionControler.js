const Option = require('../models/option');
const Question = require('../models/question');

module.exports.create = async function (req, res) {
  try {
    // the "option" field is provided and not empty
    if (!req.body.option) {
      return res.status(400).send('Option field is not found.');
    }

    const opt = await Option.create({//It creates a new option for a particuler question
      option: req.body.option,
      question: req.params.id,
    });

    // Update the "add_vote" field
    opt.add_vote = `http://localhost:3002/api/p1/options/${opt._id}/add_vote`;
    await opt.save();//Update and save add-vote field

    const ques = await Question.findById(req.params.id);// fand a question with a id 
    if (ques) {
      ques.options.push(opt);//put the new option in the question
      await ques.save();
      res.send(ques);
    } else {
      res.status(404).send('Question does not exist');
    }
  } catch (err) {
    console.log("Error in creating the option schema", err);
    res.status(500).send("Error creating option");
  }
};

module.exports.add_vote = async function (req, res) {
  try {
    const opt = await Option.findByIdAndUpdate(req.params.id, { $inc: { vote: 1 } });
    //It find the option and update vote by 1
    if (opt) {
      await opt.save();
      res.send(opt);
    } else {
      res.status(404).send('Option does not exist');
    }
  } catch (err) {
    console.log("Error while adding a vote to the option", err);
    res.status(500).send("Error adding a vote to the option");
  }
};

module.exports.delete = async function (req, res) {
  try {
    const opt = await Option.findById(req.params.id);
    
    if (opt) {
      const quesId = opt.question;
      const ques = await Question.findByIdAndUpdate(quesId, { $pull: { options: req.params.id } });
      //update the question with pull the particuler option from options array
      await Option.findByIdAndDelete(req.params.id);
      
      res.send('Option deleted');
    } else {
      res.status(404).send('Option does not exist');
    }
  } catch (err) {
   
    res.status(500).send('Error deleting the option');
  }
};
