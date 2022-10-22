/*Initialise express router*/
const express = require('express');
const router = express.Router();
const axios = require('axios');
const FormData = require('form-data');

/*Setting up AWS for docClient*/
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient()
const tableName = "conservation_heroes"

/*From Service files*/
const services = require('../services/mainServices')

/*From config files*/
const config = require('../config/dbConfig')

/*Test function*/
router.post('/test', async function(req, res) {
    res.send("system okay");
    console.log("system is on");
})

/*instagram login*/
router.get('/login', async function(req, res){
    const client_id = '1186208745587558';
    const client_secret = 'CLIENT_SECRET';
    const redirect_uri = 'http://';
    const login_url =  'https://api.instagram.com/oauth/authorize/?client_id=' + client_id + '&redirect_uri=https://social-engineer.herokuapp.com/&scope=user_profile,user_media' + '&response_type=code';
    res.redirect(login_url);

    console.log( login_url);

})

/*Instagram Authentication and create */
router.post('/auth', async function(req, res) {
    console.log("auth request");
    console.log(req);
    res.send(req);
    /*Setting up form data*/

    /*const form = new FormData();
    form.append('client_id', 'instagram client id');
    form.append('client_secret', 'instagram client secret');
    form.append('grant_type', 'authorization_code');
    form.append('redirect_uri', 'instagram redirect uri');
    form.append('code', `${req.query.code}`);
*/

   /* const response_data = await axios.post('https://api.instagram.com/oauth/access_token', form)

    /!*Get User data*!/
    const response_user = await axios.get(`https://graph.instagram.com/${response_data.user_id}?fields=id,username,&access_token=${response_data.access_token}`)

    const user_data = {
        id: response_data.user_id,
        access_token : response_data.access_token,
        username: response_user.username,
        points: 0
    };

    await docClient.put({
        TableName: tableName,
        Item: user_data
    });

    const new_user = await docClient.query({
        TableName: tableName,
        IndexName: user_name-index,
        KeyConditionExpression: 'username = :username',
        ExpressionAttributeValues: {
            ':username': user_data.username
        }
    }).promise()

    //outpu
*/
});

/* get url and run rekognitions*/
router.get('/image', async function(req, res) {

})





module.exports = router;
