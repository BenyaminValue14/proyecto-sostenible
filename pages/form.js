import { useEffect, useState } from 'react';
import React from 'react';
//import { useForm } from 'react-hook-form';
import CreditCard from '../src/components/CreditCard';
import FormUser from '../src/components/FormUser';
import Layout from '../src/components/Layout';
import FormPage from '../src/components/FormPage';

const form = () => {
  
  return (
    <>
    <Layout>
      <FormPage/>
    </Layout>
    </>
  )
}

export default form
