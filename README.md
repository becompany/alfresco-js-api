# Alfresco JavaScript API Client


<p>
  <a title='Gitter chat' href="https://gitter.im/Alfresco/alfresco-ng2-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
     <img src='https://badges.gitter.im/Alfresco/alfresco-ng2-components.svg'  alt='Gitter chat' />
  </a>
  <a title='Build Status' href="https://travis-ci.org/Alfresco/alfresco-js-api">
     <img src='https://travis-ci.org/Alfresco/alfresco-js-api.svg?branch=master'  alt='travis Status' />
  </a>
  <a href='https://codecov.io/gh/Alfresco/alfresco-js-api'>
    <img src='https://img.shields.io/codecov/c/github/Alfresco/alfresco-js-api/master.svg?maxAge=0' alt='Coverage Status' />
  </a>
  <a href='https://raw.githubusercontent.com/Alfresco/dev-platform-js-api/master/LICENSE'>
     <img src='https://img.shields.io/hexpm/l/plug.svg' alt='license' />
  </a>

</p>

<p align="center">
  <img title="alfresco" alt='alfresco' src='assets/alfresco.png'  width="280px" height="150px"></img>
</p>

This project provides a JavaScript client API into the Alfresco REST API and Activiti REST API.

<!-- markdown-toc start - Don't edit this section.  npm run toc to generate it-->

<!-- toc -->

- [Node](#node)
- [Api Modules complete methods list](#api-modules-complete-methods-list)
- [Install](#install)
- [Use](#use)
    + [Import library for node projects](#import-library-for-node-projects)
    + [Import library for browser projects](#import-library-for-browser-projects)
- [Authentication JS-API](#authentication-js-api)
  * [Login](#login)
    + [Login with Username and Password BPM and ECM](#login-with-username-and-password-bpm-and-ecm)
      - [Example](#example)
    + [Login with Username and Password ECM](#login-with-username-and-password-ecm)
      - [Example](#example-1)
    + [Login with ticket ECM](#login-with-ticket-ecm)
    + [Login with ticket](#login-with-ticket)
      - [Example](#example-2)
    + [Ticket as parameter in the constructor](#ticket-as-parameter-in-the-constructor)
      - [Example](#example-3)
    + [Login with Username and Password BPM](#login-with-username-and-password-bpm)
    + [Example](#example-4)
  * [Logout](#logout)
    + [Example](#example-5)
  * [isLoggedIn](#isloggedin)
    + [Example](#example-6)
  * [Events login/logout](#events-loginlogout)
    + [Example](#example-7)
- [ECM](#ecm)
  * [Get File or Folder Info](#get-file-or-folder-info)
    + [Example](#example-8)
  * [Get Folder Children Info](#get-folder-children-info)
    + [Example](#example-9)
  * [Create Folder](#create-folder)
    + [Example](#example-10)
    + [Example](#example-11)
  * [Upload File](#upload-file)
    + [Example](#example-12)
  * [Events Upload File](#events-upload-file)
    + [Example](#example-13)
  * [Delete File or Folder](#delete-file-or-folder)
    + [Example](#example-14)
  * [Delete File or Folder Permanent](#delete-file-or-folder-permanent)
    + [Example](#example-15)
  * [Get thumbnail Url](#get-thumbnail-url)
    + [Example](#example-16)
  * [Get preview Url](#get-preview-url)
    + [Example](#example-17)
  * [Get content Url](#get-content-url)
    + [Example](#example-18)
  * [Custom web scripts call](#custom-web-scripts-call)
- [BPM](#bpm)
  * [Task Api](#task-api)
    + [List Task](#list-task)
      - [Parameters](#parameters)
      - [Example](#example-19)
    + [Get Task](#get-task)
      - [Parameters](#parameters-1)
      - [Example](#example-20)
    + [Filter Task](#filter-task)
      - [Parameters](#parameters-2)
      - [Example](#example-21)
    + [Complete Task](#complete-task)
      - [Parameters](#parameters-3)
      - [Example](#example-22)
    + [Complete Task Form](#complete-task-form)
      - [Parameters](#parameters-4)
      - [Example](#example-23)
  * [Process Api](#process-api)
    + [Get Process Instances](#get-process-instances)
      - [Parameters](#parameters-5)
      - [Example](#example-24)
- [Development](#development)
- [Release History](#release-history)

<!-- tocstop -->

<!-- markdown-toc end -->

# Node
To correctly use this component check that on your machine is running Node version 5.0.0 or higher.

# Api Modules complete methods list

- [Authentication API](/src/alfresco-auth-rest-api)
- [Core API](/src/alfresco-core-rest-api)
- [Activiti API](/src/alfresco-activiti-rest-api)
- [Mock API](/test/mockObjects)

# Install
npm install --save alfresco-js-api

# Use

### Import library for node projects

```javascript
var AlfrescoApi = require('alfresco-js-api');
```

### Import library for browser projects

```html
    <script src="node_modules/alfresco-js-api/dist/alfresco-js-api.min.js"></script>
    
    or for not minify version
    
    <script src="node_modules/alfresco-js-api/dist/alfresco-js-api.js"></script>
```


# Authentication JS-API

## Login

AlfrescoApi({alfrescoHost, activitiHost, contextRoot, ticket});

Property | Description  | default value| 
------------- | ------------- | -------------|
alfrescoHost| (Optional value The Ip or Name of the host where your Alfresco instance is running )|http://127.0.0.1:8080 |
activitiHost| (Optional value The Ip or Name of the host where your Activiti instance is running )|http://127.0.0.1:9999 |
contextRoot| (Optional value that define the context Root of the API default value is alfresco )|alfresco |
provider| (Optional value default value is ECM. This parameter can accept as value ECM BPM or ALL to use the API and Login in the ECM, Activiti BPM or Both )|alfresco |
ticket| (Optional only if you want login with the ticket see example below)| |

### Login with Username and Password BPM and ECM

#### Example
```javascript
this.alfrescoJsApi = new AlfrescoApi({ provider:'ALL' });

this.alfrescoJsApi.login('admin', 'admin').then(function (data) {
    console.log('API called successfully Login in  BPM and ECM performed ');
}, function (error) {
    console.error(error);
});
```


### Login with Username and Password ECM

#### Example
```javascript
this.alfrescoJsApi = new AlfrescoApi();

this.alfrescoJsApi.login('admin', 'admin').then(function (data) {
    console.log('API called successfully Login ticket:' + data);
}, function (error) {
    console.error(error);
});

//The output will be: API called successfully Login ticket: TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1

```

### Login with ticket ECM

If you already know thw ticket when you invoke the constructor you can pass it as parameter in the constructor otherwise you can call the login with ticket that will validate the ticket against the server


### Login with ticket

This authentication validate also the ticket against the server
 
#### Example
```javascript
var ticket = 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1';

this.alfrescoJsApi.loginTicket(ticket).then(function (data) {
             console.log('valid ticket you are logged in');
         }, function (error) {
             console.error(error);
         });
```

### Ticket as parameter in the constructor

With this authentication the ticket is not validated against the server 

#### Example
```javascript
this.alfrescoJsApi = new AlfrescoApi({ ticket:'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1', host:'http://127.0.0.1:8080'});

```

### Login with Username and Password BPM

### Example
```javascript
this.alfrescoJsApi = new AlfrescoApi({ provider:'BPM' });

this.alfrescoJsApi.login('admin', 'admin').then(function (data) {
    console.log('API called successfully Login in Activiti BPM performed ');
}, function (error) {
    console.error(error);
});

```

## Logout

logout()

### Example

```javascript

this.alfrescoJsApi.logout().then(function (data) {
    console.log('Successfully Logout');
}, function (error) {
    console.error('Possible ticket already expired');
});

```

## isLoggedIn

isLoggedIn()

> return true if you are logged in false if you are not.

### Example

```javascript

var isLoggedIn = this.alfrescoJsApi.isLoggedIn();

if (isLoggedIn) {
    console.log('You are logged in');
} else {
    console.log('You are not logged in');
}

```
## Events login/logout

>  The login/logout are also an EventEmitter which you can register to listen to any of the following event types:
* unauthorized (If this event is triggered a call to the Api was unauthorized)
* success (If this event is triggered the login was success you can use this event instead the login promise)
* logout (If this event is triggered the client is successfully logout)

### Example

```javascript

this.alfrescoJsApi.login('admin', 'admin').on('unauthorized', function(){
    console.log('You are unauthorized you can use this event to redirect to login');
});

this.alfrescoJsApi.login('admin', 'admin').on('success', function(){
    console.log('Success Login');
});

this.alfrescoJsApi.logout().on('logout', function(){
    console.log('Successfully Logout');
});
```

# ECM

A complete list of all the ECM methods is available here : [Core API](/src/alfresco-core-rest-api). 
Below you can find some common examples.


## Get File or Folder Info

getNodeInfo(fileOrFolderId, opts)

>Get information for the File/Folder with the identifier nodeId.

### Example

```javascript

var fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.nodes.getNodeInfo(fileOrFolderId).then(function (data) {
    console.log('This is the name' + data.name );    
}, function (error) {
    console.log('This node does not exist');
});

```
## Get Folder Children Info

getNodeChildren(fileOrFolderId, opts)

>Minimal information for each child is returned by default.
You can use the include parameter to return additional information.
returns a promise with the Info about the children of the node if resolved and {error} if rejected.
 
### Example

```javascript

var folderNodeId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.nodes.getNodeChildren(folderNodeId).then(function (data) {
    console.log('The number of children in this folder are ' + data.list.pagination.count );    
}, function (error) {
    console.log('This node does not exist');
});

```
## Create Folder

createFolder(name, relativePath, nodeId, opts) 

>createFolder return a promise that is resolved if the folder is created and {error} if rejected.
 
### Example

```javascript

this.alfrescoJsApi.nodes.createFolder('newFolderName').then(function (data) {
    console.log('The folder is created in root');    
}, function (error) {
    console.log('Error in creation of this folder or folder already exist' + error);
});


this.alfrescoJsApi.nodes.createFolder('newFolderName', 'folderA/folderB').then(function (data) {
    console.log('The folder is created in  folderA/folderB from root');    
}, function (error) {
    console.log('Error in creation of this folder or folder already exist' + error);
});


var parentFolder = '80a94ac8-3ece-47ad-864e-5d939424c47c'

this.alfrescoJsApi.nodes.createFolder('newFolderName', 'folderA/folderB', parentFolder).then(function (data) {
    console.log('The folder is created in  folderA/folderB from parentFolder:' + parentFolder);    
}, function (error) {
    console.log('Error in creation of this folder or folder already exist' + error);
});

```

**CreateFolder With Auto Rename**

createFolderAutoRename(name, relativePath, nodeId, opts)
>is the same of createFolder(name, relativePath, nodeId, {autoRename: true}) is just syntactic sugar

### Example

```javascript

this.alfrescoJsApi.nodes.createFolderAutoRename('newFolderName').then(function (data) {
    console.log('The folder is created in root');    
}, function (error) {
    console.log('Error in creation of this folder' + error);
});
```

## Upload File

uploadFile(fileDefinition, relativePath, nodeId, nodeBody, opts)
>uploadFile return a promise that is resolved if the file is successful uploaded and {error} if rejected.

The fileDefinition provides information about files and allows JavaScript to access their content.

*Web File Definition 
File Definition are generally retrieved from a FileList object returned as a result of a user selecting files using the <input> element

*Node File Definition
File Definition are generally retrieved from a read Stram

### Example

```javascript
 
var fs = require('fs');

var fileToUpload = fs.createReadStream('./folderA/folderB/newFile.txt');

this.alfrescoJsApi.upload.uploadFile(fileToUpload)
    .then(function () {
        console.log('File Uploaded in the root');
    }, function (error) {
        console.log('Error during the upload' + error);
    });        


this.alfrescoJsApi.upload.uploadFile(fileToUpload, null, null, null, {autoRename: true})
    .then(function () {
        console.log('File Uploaded in the root');
    }, function (error) {
        console.log('Error during the upload' + error);
    });
    

this.alfrescoJsApi.upload.uploadFile(fileToUpload, 'folderX/folderY/folderZ')
    .then(function () {
        console.log('File Uploaded in the from root folderX/folderY/folderZ');
    }, function (error) {
        console.log('Error during the upload' + error);
    });    


var parentFolder = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.upload.uploadFile(fileToUpload, 'folderX/folderY/folderZ', parentFolder )
    .then(function () {
        console.log('File Uploaded in the from parentFolder ' + parentFolder + ' n folderX/folderY/folderZ');
    }, function (error) {
        console.log('Error during the upload' + error);
    }); 
    
```

* To abort a file uploading


```javascript
 
var fs = require('fs');

var fileToUpload = fs.createReadStream('./folderA/folderB/newFile.txt');

var promiseUpload = this.alfrescoJsApi.upload.uploadFile(fileToUpload)
    .once('abort', function () {
        console.log('File Uploaded aborted');
    });        

promiseUpload.abort();
```


## Events Upload File

>  The uploadFile is also an EventEmitter which you can register to listen to any of the following event types:
* progress 
* success 
* abort 
* error 
* unauthorized 

### Example

```javascript
var fs = require('fs');

var fileToUpload = fs.createReadStream('./folderA/folderB/newFile.txt');

this.alfrescoJsApi.upload.uploadFile(fileToUpload)
    .on('progress', (progress) => {
        console.log( 'Total :' + progress.total );
        console.log( 'Loaded :' + progress.loaded );
        console.log( 'Percent :' + progress.percent );
    })  
    .on('success', () => {
       console.log( 'Your File is uploaded');
    });
    .on('abort', () => {
      console.log( 'Upload Aborted');
    })
    .on('error', () => {
      console.log( 'Error during the upload');
    })
    .on('unauthorized', () => {
    console.log('You are unauthorized');
    })
```

## Delete File or Folder

deleteNode(fileOrFolderId)

>Delete File/Folder with the identifier nodeId, if the nodeId is a folder, then its children are also deleted
Deleted nodes move to the trash bin is still possible to recover it

### Example

```javascript

var fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.nodes.deleteNode(fileOrFolderId).then(function (data) {
    console.log('The file/folder is deleted');    
}, function (error) {
    console.log('This node does not exist');
});

```

## Delete File or Folder Permanent

deleteNodePermanent(fileOrFolderId)

>Delete File/Folder with the identifier nodeId, if the nodeId is a folder, then its children are also deleted
If Deleted Permanent is used will not be possible recover the files

### Example

```javascript

var fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.nodes.deleteNodePermanent(fileOrFolderId).then(function (data) {
    console.log('The file/folder is deleted');    
}, function (error) {
    console.log('This node does not exist');
});

```

## Get thumbnail Url
  
getDocumentThumbnailUrl(documentId)

### Example

```javascript

var thumbnailUrl = this.alfrescoJsApi.content.getDocumentThumbnailUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

## Get preview Url
  
getDocumentPreviewUrl(documentId)

### Example

```javascript

var previewUrl = this.alfrescoJsApi.content.getDocumentPreviewUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

## Get content Url
  
getContentUrl(documentId)

### Example

```javascript

var contentUrl = this.alfrescoJsApi.content.getContentUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

## Custom web scripts call

For mor information about web scripts read the [Wiki](https://wiki.alfresco.com/wiki/Web_Scripts) and the [Wiki with Web Scripts Examples](https://wiki.alfresco.com/wiki/Web_Scripts_Examples)

executeWebScript(httpMethod, scriptPath, scriptArgs, contextRoot, servicePath)

>  Anatomy of a Web Script URI  **http(s)://(host):(port)/(contextPath)/(servicePath)/(scriptPath)?(scriptArgs)**
A Web Script is simply a service bound to a URI which responds to HTTP methods such as GET, POST, PUT and DELETE. While using the same underlying code, there are broadly two kinds of Web Scripts.

*  **httpMethod**  possible value GET, POST, PUT and DELETE
*  **scriptPath**  path to Web Script (as defined by Web Script)
*  **scriptArgs**  arguments to pass to Web Script
*  **contextRoot** path where application is deployed default value 'alfresco'
*  **servicePath** path where Web Script service is mapped default value 'service'

```javascript

//Call a GET on a Web Scripts available at the following URIs: http://127.0.01:8080/alfresco/service/mytasks

this.alfrescoJsApi.webScript.executeWebScript('GET', 'mytasks').then(function (data) {
   console.log('Data received form http://127.0.01:8080/alfresco/service/mytasks' + data);    
}, function (error) {
   console.log('Error' + error);
});
        
//Call a GET on a Web Scripts available at the following URIs: http://127.0.01:8080/share/service/mytasks

this.alfrescoJsApi.webScript.executeWebScript('GET', 'mytasks', null, 'share').then(function (data) {
   console.log('Data received form http://127.0.01:8080/share/service/mytasks' + data);    
}, function (error) {
   console.log('Error' + error);
});

//Call a GET on a Web Scripts available at the following URIs: http://127.0.01:8080/share/differentServiceSlug/mytasks

this.alfrescoJsApi.webScript.executeWebScript('GET', 'mytasks', null, 'share', 'differentServiceSlug').then(function (data) {
   console.log('Data received form http://127.0.01:8080/share/differentServiceSlug/mytasks' + data);    
}, function (error) {
   console.log('Error' + error);
});
        
```

# BPM

A complete list of all the BPM methods is available her[Activiti API](/src/alfresco-activiti-rest-api). 
Below you can find some common examples.    

## Task Api

Below you can find some example relative to the Activiti process api for all the possible method go to [Task Api documentation](/src/alfresco-activiti-rest-api/docs/TaskApi.md)

### List Task

listTasks(requestNode)

>return a list of task based on the requestNode query

#### Parameters

Name | Type | Description  
------------- | ------------- | ------------- 
 **requestNode** | [**Representation**](/src/alfresco-activiti-rest-api/docs/TaskQueryRequestRepresentation.md)| requestNode 

#### Example

```javascript
var requestNode = new this.alfrescoJsApi.activiti.TaskQueryRequestRepresentation();
 
this.alfrescoJsApi.activiti.taskApi.listTasks(requestNode).then(function (data) {
 console.log('listTasks ' + data);    
}, function (error) {
 console.log('Error' + error);
});
```

### Get Task

getTask(taskId)

>return the [**TaskRepresentation**](/src/alfresco-activiti-rest-api/docs/TaskRepresentation.md)  of single task by id

#### Parameters

Name | Type | Description  
------------- | ------------- | ------------- 
 **taskId** | **String**| taskId 
 
#### Example

```javascript

var taskId = '10'; // String | taskId

this.alfrescoJsApi.activiti.taskApi.getTask(taskId).then(function (data) {
    console.log('Task representation ' + data);    
}, function (error) {
    console.log('Error' + error);
});
```

### Filter Task

filterTasks(requestNode)

>return the [**ResultListDataRepresentation**](/src/alfresco-activiti-rest-api/docs/ResultListDataRepresentation.md) that is a list of all the task filered

#### Parameters

Name | Type | Description  
------------- | ------------- | ------------- 
 **requestNode** | [**TaskFilterRequestRepresentation**](/src/alfresco-activiti-rest-api/docs/TaskFilterRequestRepresentation.md)| requestNode 


#### Example

```javascript

var requestNode = new this.alfrescoJsApi.activiti.TaskFilterRequestRepresentation();
requestNode.appDefinitionId = 1;

this.alfrescoJsApi.activiti.taskApi.filterTasks(requestNode).then(function (data) {
    console.log('Task filter list ' + data);    
}, function (error) {
    console.log('Error' + error);
});
```

### Complete Task

completeTask(taskId)

>To complete a task (standalone or without a task form) :

#### Parameters

Name | Type | Description  
------------- | ------------- | ------------- 
 **taskId** | **String**| taskId 

#### Example

```javascript

var taskId = '10'; // String | taskId

this.alfrescoJsApi.activiti.taskApi.completeTask(taskId).then(function () {
    console.log('Task completed');    
}, function (error) {
    console.log('Error' + error);
});
```

### Complete Task Form

completeTaskForm(taskId, completeTaskFormRepresentation)

>Complete a Task Form

#### Parameters

Name | Type | Description  
------------- | ------------- | -------------
 **taskId** | **String**| taskId 
 **completeTaskFormRepresentation** | [**CompleteFormRepresentation**](/src/alfresco-activiti-rest-api/docs/CompleteFormRepresentation.md)| completeTaskFormRepresentation 

#### Example

```javascript

var taskId = '10'; // String | taskId

this.alfrescoJsApi.activiti.taskApi.completeTaskForm(taskId, completeTaskFormRepresentation).then(function () {
    console.log('Task completed');    
}, function (error) {
    console.log('Error' + error);
});
```

## Process Api

Below you can find some example relative to the Activiti process api for all the possible method go to [Process Api documentation](/src/alfresco-activiti-rest-api/docs/ProcessApi.md)


### Get Process Instances

getProcessInstances(requestNode)

>Retrieve a list of process instances [**ResultListDataRepresentation**](/src/alfresco-activiti-rest-api/docs/ResultListDataRepresentation.md)

#### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestNode** | [**ProcessFilterRequestRepresentation**](/src/alfresco-activiti-rest-api/docs/ProcessFilterRequestRepresentation.md)| requestNode | 

#### Example

```javascript
var requestNode = new this.alfrescoJsApi.activiti.ProcessFilterRequestRepresentation();

this.alfrescoJsApi.activiti.processApi.getProcessInstances(requestNode).then(function (data) {
    console.log('All processes' + data);    
}, function (error) {
    console.log('Error' + error);
});
```

Filtered process:

```javascript
 var requestNode = new this.alfrescoJsApi.activiti.ProcessFilterRequestRepresentation();

requestNode.page = 0;
requestNode.sort = 'created-desc';
requestNode.state = 'completed';

this.alfrescoJsApi.activiti.processApi.getProcessInstances(requestNode).then(function () {
   console.log('All processes completed' + data);    
}, function (error) {
   console.log('Error' + error);
});
```




# Development

* To run the build 

    ```$ npm run build```

* To run the build in watch mode

    ```$ npm run watchify```
    
* To run the test 

    ```$ npm run test```

* To run the test coverage

    ```$ npm run coverage```


# Release History

Read the [Changelog] (./CHANGELOG.md)

