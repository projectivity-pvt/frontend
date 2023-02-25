import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'ap-south-1_QbwTAA1ZS',
  ClientId: '1btvgpcoljsdksbc8bai8i12vv',
};

export default new CognitoUserPool(poolData);