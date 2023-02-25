import { VendorServicesTemplate } from '@components/templates/VendorServicesTemplate/VendorServicesTemplate'
import { NextPage } from 'next'
import React from 'react'
import gql from 'graphql-tag'
import AWSAppSyncClient from 'aws-appsync';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { awsUserToken } from 'userToken';
import { userTokenGlobalState } from '@components/globalStates/UserGlobal/UserGlobalState';

const VendorServicespage: NextPage = () => <VendorServicesTemplate />

export default VendorServicespage;
