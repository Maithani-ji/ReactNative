import express from 'express';
// const bodyparser = require('body-parser')
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose
  .connect(
   'your own atlas connect url '
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    console.log('connected to mongodb successfully');
  })
  .catch(err => {
    console.log('error connecting');
  });

const port = '3000';

app.listen(port, () => {
  console.log('listening on port' + port);
});

import User from './models/user.js';
import Post from './models/post.js';

const sendVerificationEmail = async (email, verificationToken) => {
  //create a nodemailer transporter
  const transporter = await nodemailer.createTransport({
    // await maybe used
    service: 'gmail',
    auth: {
      user: 'your email address by which you want to send verification code ',
      pass: 'your password from google',// not email password other in manage account app password create mail 
    },
  });

  //compose the email message
  const mailOptions = {
    from: 'Threads.com',
    to: email,
    subject: 'Email Verification',
    text: `Please click the following link to verify your email http://localhost:3000/verify/${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error, 'error sending mail');
  }
};

// endpoint to register a user in the backend

app.post('/register', async (req, res) => {
  try {
    //destructuring information sent through form submission
    const {name, email, password} = req.body;

    //checking exisiting user in database through email address
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return res.status(400).json({message: 'email already registered'});
    }

    console.log('password is', password);
    // Hashing the password before saving it to the database
    //const hashedPassword = await bcrypt.hash(password, 10);
    // console.log('password is', hashedPassword);
    //creating new user if there is no existing user
    const newUser = new User({name, email, password}); //

    //generate and store the verification token from newUser
    newUser.verificationToken = crypto.randomBytes(20).toString('hex');

    // Save the user to the Backend
    await newUser.save();

    //send the verification mail to the user
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    //sending succesfull creation response to frontend
    res.status(200).json({
      message:
        'Registration Successful and please check your for verification token',
    });
  } catch (error) {
    console.log(error, 'error registering user');
    res.status(500).json({message: 'error registering user'});
  }
});

app.get('/verify/:token', async (req, res) => {
  try {
    const token = req.params.token;
    const user = await User.findOne({verificationToken: token});

    if (!user) {
      return res.status(404).json({message: 'Invalid Token'});
    }

    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({message: 'Email verified successfully'});
  } catch (error) {
    console.log('error getting token', error);
    res.status(500).json({message: 'Email verification failed'});
  }
});

// const generatesecretKey = () => {
//   // generating secret key for assign jwt token during signin / login process
//   const secretKey = crypto.randomBytes(32).toString('hex');
//   return secretKey;
// };

// login endpoint
app.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if (!user) {
      return res.status(404).json({message: 'invalid email'});
    }

    if (user.password !== password) {
      return res.status(404).json({message: 'invalid password'});
    }

    const secretKey = crypto.randomBytes(32).toString('hex');
    console.log(secretKey);
    const token = jwt.sign({userId: user._id}, secretKey);

    res.status(200).json({token, userId: user._id});
  } catch (error) {
    res.status(500).json({message: 'Login failed'});
    console.log(error, 'Login failed');
  }
});

//endpoint to access all the users except the logged in user
app.get('/users/:userId', (req, res) => {
  try {
    const loggedinuserId = req.params.userId;
    User.find({_id: {$ne: loggedinuserId}})
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json('error ');
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Error getting the user'});
  }
});
//endpoint for follow a particular user
// Endpoint to follow a user
app.post('/follow', async (req, res) => {
  const {currentUserId, selectedUserId} = req.body;
  console.log('follow request', req.body);
  try {
    await User.findByIdAndUpdate(selectedUserId, {
      $push: {followers: currentUserId},
    });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Error in following the user'});
  }
});

// Endpoint to unfollow a user
app.post('/unfollow', async (req, res) => {
  const {loggedInuserId, targetuserId} = req.body;
  console.log('Unfollow request', req.body);
  try {
    await User.findByIdAndUpdate(targetuserId, {
      $pull: {followers: loggedInuserId},
    });
    res.status(200).json({message: 'Unfollowed Succesfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Error in unfollowing the user'});
  }
});
// endpoint to create a new post to the backend
app.post('/create-posts', async (req, res) => {
  try {
    const {content, userId} = req.body;
    const newPostdata = {
      user: userId,
    };

    if (content) {
      newPostdata.content = content;
    }
    console.log('post creation for this user ', newPostdata);
    const newPosT = new Post(newPostdata);
    await newPosT.save();
    res.status(200).json({message: 'Post saved successfully'});
  } catch (error) {
    res.status(500).json({message: 'Post creation failed'});
  }
});

// endpoint for liking a particular post

app.put('/post/:postId/:userId/like', async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.params.userId;

    const post = await Post.findById(postId).populate('user', 'name');

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {$addToSet: {likes: userId}},
      {new: true},
    );
    if (!updatedPost) {
      return res.status(404).json({message: 'post not found'});
    }

    updatedPost.user = post.user;
    res.json(updatedPost);
  } catch (error) {
    console.log('error in liking ', error);
    res.status(500).json({message: 'error in liking post'});
  }
});

//endpoint to unlike a post

app.put('/post/:postId/:userId/unlike', async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.params.userId;

    const post = await Post.findById(postId).populate('user', 'name');

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {$pull: {likes: userId}},
      {new: true},
    );
    if (!updatedPost) {
      return res.status(404).json({message: 'post not found'});
    }

    updatedPost.user = post.user;
    res.json(updatedPost);
  } catch (error) {
    console.log('error in liking ', error);
    res.status(500).json({message: 'error in liking post'});
  }
});

// endpoint to get all the post

app.get('/get-posts', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('user', 'name')
      .sort({createdAt: -1});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({message: 'error getting the post'});
  }
});
//endpoint for getting user details
app.get('/profile/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({message: 'User not found'});
    }
    return res.status(200).json({user});
  } catch (error) {
    res.status(500).json({message: 'error getting the profile'});
    console.log('error getting the user id ');
  }
});
