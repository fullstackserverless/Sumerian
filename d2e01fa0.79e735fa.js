(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),o=(n(0),n(174));const r={id:"amplify-04",title:"DataStore - CRUD (Create Read Update Delete)",sidebar_label:"DataStore - CRUD"},i={id:"amplify-04",title:"DataStore - CRUD (Create Read Update Delete)",description:"The line between the backend and the frontend is broken! An innovative step in the evolution of state managers.",source:"@site/docs/amplify04.md",permalink:"/docs/amplify-04",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/amplify04.md",sidebar_label:"DataStore - CRUD",sidebar:"someSidebar",previous:{title:"Amplify API - AppSync - CRUD (Create Read Update Delete)",permalink:"/docs/amplify-03"},next:{title:"Push Notification with Amplify",permalink:"/docs/notif-00"}},c=[{value:"Advantages of AWS Amplify DataStore over Redux, MobX, Apollo, Relay, selectors:",id:"advantages-of-aws-amplify-datastore-over-redux-mobx-apollo-relay-selectors",children:[]},{value:"1. Real time out of the box.",id:"1-real-time-out-of-the-box",children:[]},{value:"2. Code generation.",id:"2-code-generation",children:[]},{value:"3. Offline data &amp; cloud sync",id:"3-offline-data--cloud-sync",children:[]},{value:"How much does it all cost?",id:"how-much-does-it-all-cost",children:[]},{value:"Clone the repository",id:"clone-the-repository",children:[]},{value:"Register your AWS account",id:"register-your-aws-account",children:[]},{value:"Initializing AWS Amplify in a React Native Project",id:"initializing-aws-amplify-in-a-react-native-project",children:[]},{value:"Connect the authentication plugin",id:"connect-the-authentication-plugin",children:[]},{value:"Installing dependencies",id:"installing-dependencies",children:[]},{value:"Connecting the API plugin (App Sync)",id:"connecting-the-api-plugin-app-sync",children:[]},{value:"Model generation",id:"model-generation",children:[]},{value:"Updating API",id:"updating-api",children:[]},{value:"READ",id:"read",children:[]},{value:"CREATE UPDATE DELETE",id:"create-update-delete",children:[]},{value:"Navigation",id:"navigation",children:[]},{value:"Jobs Button",id:"jobs-button",children:[]},{value:"Done \u2705",id:"done-",children:[]},{value:"References:",id:"references",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The line between the backend and the frontend is broken! An innovative step in the evolution of state managers."),Object(o.b)("h1",{id:"goodbye-redux-mobx-apollo"},"Goodbye Redux, MobX, Apollo!"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://youtu.be/rKTHKZ87Hh4"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"/img/dataStore/youtube.gif",alt:"AWS Amplify"})))),Object(o.b)("p",null,"One of the most difficult tasks in developing web and mobile applications is to synchronize data between devices and perform offline operations. Ideally, when the device is offline, your customers should be able to continue to use your application not only to access data, but also to create and modify it. When the device returns online, the application must reconnect to the backend, synchronize the data and resolve conflicts, if any. Correct handling of all extreme cases requires a lot of undifferentiated code, even when using the AWS AppSync SDK cache on a device with autonomous mutations and delta synchronization."),Object(o.b)("p",null,"Amplify DataStore provides persistent storage on the device for recording, reading and monitoring data changes if you are connected to the Internet or offline, and also makes it easy to synchronize data with the cloud and between devices."),Object(o.b)("p",null,"Amplify DataStore allows developers to write applications using distributed data without writing additional code for an offline or online script."),Object(o.b)("p",null,"You can use the Amplify DataStore for offline use in local-only mode without an AWS account or provide the entire backend using AWS AppSync and Amazon DynamoDB."),Object(o.b)("p",null,"The DataStore includes Delta Sync using your GraphQL backend and several conflict resolution strategies."),Object(o.b)("h2",{id:"advantages-of-aws-amplify-datastore-over-redux-mobx-apollo-relay-selectors"},"Advantages of AWS Amplify DataStore over Redux, MobX, Apollo, Relay, selectors:"),Object(o.b)("p",null,"Comparing AWS Amplify with Redux, MobX is not correct, since AWS Amplify is not only a state manager, but also a client-server, so in the client-server class we will compare it with Apollo and Relay."),Object(o.b)("h2",{id:"1-real-time-out-of-the-box"},"1. Real time out of the box."),Object(o.b)("p",null,"I don\u2019t think that a business can be considered serious if his mobile application is not affected by subscription events implemented using web sockets technology.\nAnd how many applications nowadays work on web sockets?\nI think not, due to the fact that real time is an additional work of developers on the back and front-end.\nFor us, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://fullstackserverless.github.io/docs/amplify-01"}),"fullStack serverless")," developers on AWS Amplify, real time goes out of the box, both on the front and on the back and we don\u2019t we need to write an implementation code for integrating web sockets for each model, since it is generated automatically, as well as writing documentation for all of our generated code, implemented in our project based on the GraphQL schema instruction. In order not to scare with big words, I will show you an example from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://fullstackserverless.github.io/docs/amplify-03"}),"the last lesson"),", how Store is defined in AWS Amplify:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Job @model @auth(rules: [{ allow: owner, ownerField: "owner", operations: [create, update, delete] }]) {\n  id: ID!\n  position: String!\n  rate: String!\n  description: String!\n  owner: String\n}\n')),Object(o.b)("p",null,"This determines the model in the store, not only for the frontend, but also for the backend. One source of truth for frontend and backend. Yes, yes, I see that I will repeat it more than once in my life, since this is a killer feature and punch line vs Redux, MobX, Apollo, Relay."),Object(o.b)("p",null,"It is this architecture, which is different from Redux, MobX, Apollo, that erases the line between the backend and frontend. And puts AWS Amplify DataStore over everyone"),Object(o.b)("p",null,"If you are from the backend, then you no longer need to write resolvers to the database and drag subscriptions to each data model."),Object(o.b)("p",null,"Serverless - this is when the backend developers came to learn the frontend, as their services are needed exclusively for projects that do not keep up with the times, and from which they do not live real time."),Object(o.b)("h2",{id:"2-code-generation"},"2. Code generation."),Object(o.b)("p",null,"What is code generation you can read without me on Wikipedia, unless of course you know its meaning, which in this punch reminds us of yourself.\nUse fetch or axios?\nBy sending requests to the deep forest API, which we also write in conjunction with Redux, MobX, Apollo, Relay.\nSo here is another news of the day!\nYou no longer need to write these API calls, you only need to call them.\nThis means that you no longer need to create this rather big daddy with the server request code, since in AWS Amplify DataStore they are also generated in your project based on your store, defined by the very same GraphQL diagram of their first item. And this is filled with one command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify codegen model\n")),Object(o.b)("p",null,"As a result, we get the models folder with the generated code."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore09.png",alt:"DataStore"}))),Object(o.b)("p",null,"And the graphql folder after pushing to the server, with all the request in Flow, TS or vanilla JavaScript."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore08.png",alt:"DataStore"}))),Object(o.b)("h2",{id:"3-offline-data--cloud-sync"},"3. Offline data & cloud sync"),Object(o.b)("p",null,"No need to write additional code to send a request to the server after the application is online.\nSometimes you find yourself in an unreliable situation, but you better wait longer than obviously fail the operation.\nApollo has apollo-link-retry which provides exponential rollback and server requests between default attempts. True, he (currently) does not handle retries for GraphQL errors in the response, only for network errors.\nRedux, MobX, of course, does not have this solution under the hood, since they are not clients and you have to use third-party middleware, because REST is like a retired grandfather with the support of any grandchildren. Detailed analysis of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://fullstackserverless.github.io/docs/amplify-02"}),"GraphQL vs REST"),".\nAWS Amplify DataStore has not only an analog of apollo-link-retry, but also a built-in and customizable familiar programming model with automatic version control, conflict detection and resolution in the cloud."),Object(o.b)("p",null,"Among the disadvantages of AWS Amplify, I want to mention that Apollo hooks with its loading and error out of the box reduce the amount of code written on the front."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws-amplify.github.io/docs/js/datastore"}),"Official documentation")),Object(o.b)("p",null,"At the end of this lesson we will collect with you this mobile application using the Amplify DataStore:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore07.png",alt:"dataStore"}))),Object(o.b)("h2",{id:"how-much-does-it-all-cost"},"How much does it all cost?"),Object(o.b)("p",null,"With AWS AppSync, you pay only for what you use with no minimum fees or mandatory service usage. You are billed separately for query and data modification operations, and for performing real-time updates on your data. This provides you with transparency and a low price regardless of your workload type, because you only pay for the specific AWS AppSync features you use."),Object(o.b)("p",null,"Query and Data Modification Operations"),Object(o.b)("p",null,"Query Operations enable your app to fetch data and cache it locally. Data Modification Operations enable your app to create, update, and delete data."),Object(o.b)("p",null,"4.00 dollars per million Query and Data Modification Operations","*"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/appsync/pricing/"}),"Details")),Object(o.b)("h1",{id:"go"},"Go!"),Object(o.b)("p",null,"Our AWS Amplify support chat ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://discord.gg/Ntuttww"}),"Discord")),Object(o.b)("p",null,"The final code for this part can be found on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/fullstackserverless/startup/tree/datastore"}),"Github"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/01.png",alt:"Step01"}))),Object(o.b)("h2",{id:"clone-the-repository"},"Clone the repository"),Object(o.b)("p",null,"If you continue the last lesson, you can go directly to step 5."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/fullstackserverless/startup.git\n")),Object(o.b)("p",null,"Go to the project folder"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd startup\n")),Object(o.b)("p",null,"Install dependencies"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"yarn")),Object(o.b)("p",null,"or"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npm install")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/02.png",alt:"Step02"}))),Object(o.b)("h2",{id:"register-your-aws-account"},"Register your AWS account"),Object(o.b)("p",null,"Step For Those Not Yet AWS Registered\nWe register according to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://portal.aws.amazon.com/billing/signup?redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start"}),"this")," instructions \ud83d\udcc3 and by the video tutorial \u0435\u043c we check all 5 steps."),Object(o.b)("div",{class:"alert alert--warning",role:"alert"},"You need a bank card \ud83d\udcb3, where should be more than 1$ \ud83d\udcb5 There we look and put the Amplify Command Line Interface (CLI)"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/03.png",alt:"Step03"}))),Object(o.b)("h2",{id:"initializing-aws-amplify-in-a-react-native-project"},"Initializing AWS Amplify in a React Native Project"),Object(o.b)("p",null,"Initialize our AWS Amplify project in the root directory of the React Native project."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify init\n")),Object(o.b)("p",null,"We answer the questions:\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/auth/auth02.png",alt:"amplify init"}))),Object(o.b)("p",null,"The project was initialized \ud83d\ude80"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/04.png",alt:"Step04"}))),Object(o.b)("h2",{id:"connect-the-authentication-plugin"},"Connect the authentication plugin"),Object(o.b)("p",null,"Now that the application is in the cloud, you can add some features, such as allowing users to register with our application and log in."),Object(o.b)("p",null,"We connect the authentication function."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify add auth\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/auth/auth03.png",alt:"amplify init"}))),Object(o.b)("p",null,"Submitting changes to the cloud \ud83d\udcad"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify push\n")),Object(o.b)("p",null,"\u2714 All resources are updated in the cloud"),Object(o.b)("p",null,"We collect the project and check the operation of authentication."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/auth/auth1-04.png",alt:"Hello screen"}))),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/05.png",alt:"Step05"}))),Object(o.b)("h2",{id:"installing-dependencies"},"Installing dependencies"),Object(o.b)("p",null,"Detailed installation ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws-amplify.github.io/docs/js/datastore#setup"}),"here")),Object(o.b)("p",null,"If you have a React Native Cli, then"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @aws-amplify/datastore @react-native-community/netinfo @react-native-community/async-storage\n")),Object(o.b)("p",null,"And if you use React Native> 0.60, then run the following command for iOS:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ios && pod install && cd ..\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/06.png",alt:"Step06"}))),Object(o.b)("h2",{id:"connecting-the-api-plugin-app-sync"},"Connecting the API plugin (App Sync)"),Object(o.b)("p",null,"If you connected it in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://fullstackserverless.github.io/docs/amplify-03"}),"the last lesson"),", then skip this step.\nIf not, connect the API plugin"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify add api\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore00.png",alt:"AWSAmplify"}))),Object(o.b)("p",null,"After the selected items, the GraphQL schema will open in ",Object(o.b)("inlineCode",{parentName:"p"},"amplify/backend/api/<datasourcename>/schema.graphql")," where we insert this model:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Job @model @auth(rules: [{ allow: owner, ownerField: "owner", operations: [create, update, delete] }]) {\n  id: ID!\n  position: String!\n  rate: String!\n  description: String!\n  owner: String\n}\n')),Object(o.b)("p",null,"More about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://fullstackserverless.github.io/docs/amplify-03#schemagraphql"}),"here")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/07.png",alt:"Step07"}))),Object(o.b)("h2",{id:"model-generation"},"Model generation"),Object(o.b)("p",null,"Modeling your data and creating the models used by the DataStore is the first step to getting started. GraphQL is used as a common language for JavaScript, iOS and Android for this process, and is also used as a network protocol when synchronizing with the cloud. GraphQL also supports some features, such as Automerge in AppSync."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You do not need an AWS account to run it and use DataStore locally, however, if you want to synchronize with the cloud, it is recommended to install and configure Amplify CLI as in the last lesson")),Object(o.b)("p",null,"Since we described the circuit in the last lesson, now it\u2019s enough for us to run the command"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify codegen model\n")),Object(o.b)("p",null,"and get the generated model in the src/models folder"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/08.png",alt:"Step08"}))),Object(o.b)("h2",{id:"updating-api"},"Updating API"),Object(o.b)("p",null,"We include DataStore for all API"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify update api\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore03.png",alt:"amplify update api"}))),Object(o.b)("p",null,"Submitting changes to the cloud \ud83d\udcad"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify push\n")),Object(o.b)("p",null,"\u2714 All resources are updated in the cloud"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/09.png",alt:"Step09"}))),Object(o.b)("h2",{id:"read"},"READ"),Object(o.b)("p",null,"Create the JobsMain src/screens/Jobs/JobsMain.js screen"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore04.png",alt:"READ"}))),Object(o.b)("p",null,"On this screen, we will make a Query query, with the pagination option, where the number is through the useQuery hook and it will return an array to us, which we will send to Flatlist."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useEffect, useState } from 'react'\nimport { FlatList } from 'react-native'\nimport { Auth } from 'aws-amplify'\nimport { AppContainer, CardVacancies, Space, Header } from 'react-native-unicorn-uikit'\nimport { DataStore } from '@aws-amplify/datastore'\nimport { Job } from '../../models'\nimport { goBack, onScreen } from '../../constants'\n\nconst JobsMain = ({ navigation }) => {\n  const [data, updateJobs] = useState([])\n\n  const fetchJobs = async () => {\n    const mess = await DataStore.query(Job)\n    updateJobs(mess)\n  }\n\n  useEffect(() => {\n    fetchJobs()\n    const subscription = DataStore.observe(Job).subscribe(() => fetchJobs())\n    return () => {\n      subscription.unsubscribe()\n    }\n  }, [data])\n\n  const _renderItem = ({ item }) => {\n    const owner = Auth.user.attributes.sub\n    const check = owner === item.owner\n    return (\n      <>\n        <CardVacancies obj={item} onPress={onScreen(check ? 'JOB_ADD' : 'JOB_DETAIL', navigation, item)} />\n        <Space height={20} />\n      </>\n    )\n  }\n\n  const _keyExtractor = obj => obj.id.toString()\n\n  return (\n    <AppContainer onPress={goBack(navigation)} flatlist>\n      <FlatList\n        scrollEventThrottle={16}\n        data={data}\n        renderItem={_renderItem}\n        keyExtractor={_keyExtractor}\n        onEndReachedThreshold={0.5}\n        ListHeaderComponent={\n          <Header\n            onPress={goBack(navigation)}\n            onPressRight={onScreen('JOB_ADD', navigation)}\n            iconLeft=\"angle-dobule-left\"\n            iconRight=\"plus-a\"\n          />\n        }\n        stickyHeaderIndices={[0]}\n      />\n    </AppContainer>\n  )\n}\n\nexport { JobsMain }\n")),Object(o.b)("p",null,"To disclose the details of the vacancy, create the screen JobDetail src/screens/Jobs/JobDetail.js"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore05.png",alt:null}))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { Platform } from 'react-native'\nimport { AppContainer, CardVacancies, Space, Header } from 'react-native-unicorn-uikit'\nimport { goBack } from '../../constants'\n\nconst JobDetail = ({ route, navigation }) => {\n  return (\n    <AppContainer>\n      <Header onPress={goBack(navigation)} iconLeft=\"angle-dobule-left\" />\n      <CardVacancies obj={route.params} detail />\n      <Space height={Platform.OS === 'ios' ? 100 : 30} />\n    </AppContainer>\n  )\n}\n\nexport { JobDetail }\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/10.png",alt:"Step10"}))),Object(o.b)("h2",{id:"create-update-delete"},"CREATE UPDATE DELETE"),Object(o.b)("p",null,"Create the screen JobAdd src/screens/Jobs/JobAdd.js, where we perform the functions CREATE UPDATE DELETE"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore06.png",alt:null}))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useState, useEffect, useRef } from 'react'\nimport { AppContainer, Input, Space, Button, Header, ButtonLink } from 'react-native-unicorn-uikit'\nimport { DataStore } from '@aws-amplify/datastore'\nimport { Formik } from 'formik'\nimport * as Yup from 'yup'\nimport { Job } from '../../models'\nimport { goBack } from '../../constants'\n\nconst JobAdd = ({ route, navigation }) => {\n  const [loading, setLoading] = useState(false)\n  const [check, setOwner] = useState(false)\n  const [error, setError] = useState('')\n\n  const [input, setJob] = useState({\n    id: '',\n    position: '',\n    rate: '',\n    description: ''\n  })\n\n  const formikRef = useRef()\n\n  useEffect(() => {\n    const obj = route.params\n    if (typeof obj !== 'undefined') {\n      setOwner(true)\n      setJob(obj)\n      const { setFieldValue } = formikRef.current\n      const { position, rate, description } = obj\n      setFieldValue('position', position)\n      setFieldValue('rate', rate)\n      setFieldValue('description', description)\n    }\n  }, [route.params])\n\n  const createJob = async values => (await DataStore.save(new Job({ ...values }))) && goBack(navigation)()\n\n  const updateJob = async ({ position, rate, description }) => {\n    try {\n      setLoading(true)\n      const original = await DataStore.query(Job, input.id)\n      const update = await DataStore.save(\n        Job.copyOf(original, updated => {\n          updated.position = position\n          updated.rate = rate\n          updated.description = description\n        })\n      )\n      update && goBack(navigation)()\n      setLoading(false)\n    } catch (err) {\n      setError(err)\n    }\n  }\n\n  const deleteJob = async () => {\n    try {\n      setLoading(true)\n      const job = await DataStore.query(Job, input.id)\n      const del = await DataStore.delete(job)\n      del && goBack(navigation)()\n      setLoading(false)\n    } catch (err) {\n      setError(err)\n    }\n  }\n\n  return (\n    <AppContainer onPress={goBack(navigation)} loading={loading} error={error}>\n      <Header onPress={goBack(navigation)} iconLeft=\"angle-dobule-left\" />\n      <Space height={20} />\n      <Formik\n        innerRef={formikRef}\n        initialValues={input}\n        onSubmit={values => (check ? updateJob(values) : createJob(values))}\n        validationSchema={Yup.object().shape({\n          position: Yup.string()\n            .min(3)\n            .required(),\n          rate: Yup.string()\n            .min(3)\n            .required(),\n          description: Yup.string()\n            .min(3)\n            .required()\n        })}\n      >\n        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (\n          <>\n            <Input\n              name=\"position\"\n              value={values.position}\n              onChangeText={handleChange('position')}\n              onBlur={() => setFieldTouched('position')}\n              placeholder=\"Position\"\n              touched={touched}\n              errors={errors}\n            />\n            <Input\n              name=\"rate\"\n              keyboardType=\"numeric\"\n              value={`${values.rate}`}\n              onChangeText={handleChange('rate')}\n              onBlur={() => setFieldTouched('rate')}\n              placeholder=\"Rate\"\n              touched={touched}\n              errors={errors}\n            />\n            <Input\n              name=\"description\"\n              value={values.description}\n              onChangeText={handleChange('description')}\n              onBlur={() => setFieldTouched('description')}\n              placeholder=\"Description\"\n              touched={touched}\n              errors={errors}\n              multiline\n              numberOfLines={5}\n            />\n            <Space height={40} />\n            <Button title={check ? 'Update' : 'Create'} disabled={!isValid} onPress={handleSubmit} formik />\n            {check && (\n              <>\n                <Space height={10} />\n                <ButtonLink title=\"or\" textStyle={{ alignSelf: 'center' }} />\n                <Space height={15} />\n                <Button title=\"DELETE\" onPress={deleteJob} cancel />\n              </>\n            )}\n          </>\n        )}\n      </Formik>\n      <Space height={100} />\n    </AppContainer>\n  )\n}\n\nexport { JobAdd }\n")),Object(o.b)("p",null,"and in screens/Jobs/index.js we export screens"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export * from './JobsMain'\nexport * from './JobDetail'\nexport * from './JobAdd'\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/11.png",alt:"Step11"}))),Object(o.b)("h2",{id:"navigation"},"Navigation"),Object(o.b)("p",null,"Add import of Jobs screens and connect them to StackNavigator"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import * as React from \'react\'\nimport { createStackNavigator } from \'@react-navigation/stack\'\nimport { enableScreens } from \'react-native-screens\' // eslint-disable-line\nimport { Hello, SignUp, SignIn, ConfirmSignUp, User, Forgot, ForgotPassSubmit } from \'./screens/Authenticator\'\nimport { JobsMain, JobDetail, JobAdd } from \'./screens/Jobs\'\n\nenableScreens()\n\nconst Stack = createStackNavigator()\n\nconst AppNavigator = () => {\n  return (\n    <Stack.Navigator\n      screenOptions={{\n        headerShown: false\n      }}\n      initialRouteName="HELLO"\n    >\n      <Stack.Screen name="HELLO" component={Hello} />\n      <Stack.Screen name="SIGN_UP" component={SignUp} />\n      <Stack.Screen name="SIGN_IN" component={SignIn} />\n      <Stack.Screen name="FORGOT" component={Forgot} />\n      <Stack.Screen name="FORGOT_PASSWORD_SUBMIT" component={ForgotPassSubmit} />\n      <Stack.Screen name="CONFIRM_SIGN_UP" component={ConfirmSignUp} />\n      <Stack.Screen name="USER" component={User} />\n      <Stack.Screen name="JOBS_MAIN" component={JobsMain} />\n      <Stack.Screen name="JOB_DETAIL" component={JobDetail} />\n      <Stack.Screen name="JOB_ADD" component={JobAdd} />\n    </Stack.Navigator>\n  )\n}\n\nexport default AppNavigator\n')),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/12.png",alt:"Step12"}))),Object(o.b)("h2",{id:"jobs-button"},"Jobs Button"),Object(o.b)("p",null,"Editing the User screen in screens/Authenticator/User/index.js"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useState, useEffect } from 'react'\nimport { Auth } from 'aws-amplify'\nimport * as Keychain from 'react-native-keychain'\nimport { AppContainer, Button } from 'react-native-unicorn-uikit'\nimport { goHome, onScreen } from '../../../constants'\n\nconst User = ({ navigation }) => {\n  const [loading, setLoading] = useState(false)\n  const [error, setError] = useState('')\n\n  useEffect(() => {\n    const checkUser = async () => {\n      await Auth.currentAuthenticatedUser()\n    }\n    checkUser()\n  })\n\n  const _onPress = async () => {\n    setLoading(true)\n    try {\n      await Auth.signOut()\n      await Keychain.resetInternetCredentials('auth')\n      goHome(navigation)()\n    } catch (err) {\n      setError(err.message)\n    }\n  }\n\n  const _onPressJob = () => onScreen('JOBS_MAIN', navigation)() // \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d JOBS_MAIN\n\n  return (\n    <AppContainer message={error} loading={loading}>\n      <Button title=\"Sign Out\" onPress={_onPress} />\n      <Button title=\"Jobs\" onPress={_onPressJob} />\n    </AppContainer>\n  )\n}\n\nexport { User }\n")),Object(o.b)("p",null,"Build the application and test"),Object(o.b)("h2",{id:"done-"},"Done \u2705"),Object(o.b)("h2",{id:"references"},"References:"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws-amplify.github.io"}),"https://aws-amplify.github.io")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://learning.oreilly.com/library/view/full-stack-serverless/9781492059882/"}),"https://learning.oreilly.com/library/view/full-stack-serverless/9781492059882/")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.altexsoft.com/blog/engineering/graphql-core-features-architecture-pros-and-cons/"}),"https://www.altexsoft.com/blog/engineering/graphql-core-features-architecture-pros-and-cons/")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://engineering.fb.com/core-data/graphql-a-data-query-language/"}),"https://engineering.fb.com/core-data/graphql-a-data-query-language/")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn"}),"https://graphql.org/learn")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.patreon.com/bePatron?u=34467235"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"/img/logo/patreon.png",alt:"Become a Patron!"})))))}s.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(h,c({ref:t},s,{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);