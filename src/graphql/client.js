import { Amplify, API, graphqlOperation } from 'aws-amplify';
import {Connect} from 'aws-amplify-react';

const {GRAPH_QL_ENDPOINT, GRAPH_QL_SECRET} = process.env;

console.log(GRAPH_QL_ENDPOINT, GRAPH_QL_SECRET);

const AmplifyConfig = {
  "aws_project_region": "us-east-2",
  "aws_appsync_graphqlEndpoint": GRAPH_QL_ENDPOINT,
  "aws_appsync_region": "us-east-2",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": GRAPH_QL_SECRET
}

Amplify.configure(AmplifyConfig);

export {
  API,
  graphqlOperation,
  Connect
}