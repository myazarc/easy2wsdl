# easy2wsdl
Create wsdl to javascript class with [node-soap](https://github.com/vpulim/node-soap).

# Note
easy2wsdl only run **ES6(import/export)** module (for classes)

# Installation

```
npm install --save-dev easy2wsdl
```

# Usage

```js
const easy2wsdl from 'easy2wsdl';

easy2wsdl.create(url,serviceName).then((res) => {
  console.log(res);
});

```

# Example
```js
const easy2wsdl from 'easy2wsdl';
const url = 'http://webservices.amazon.com/AWSECommerceService/2013-08-01/AWSECommerceService.wsdl';
const serviceName = 'AWSECommerceService';
easy2wsdl.create(url,serviceName).then((res) => {
  console.log(res);
});
```
Save response: awsService.js

install node soap

```
npm install --save soap
```

Run:

```js
import
{
  AWSECommerceService,
  ItemSearch,
  Shared,
}
from './awsService';

const soapService = new AWSECommerceService();

const ItemSearchRequest = new ItemSearch();
ItemSearchRequest.AssociateTag='';
ItemSearchRequest.AWSAccessKeyId='';
ItemSearchRequest.MarketplaceDomain='';
ItemSearchRequest.Request='';

const SharedRequest = new Shared();
SharedRequest.Actor = '';
SharedRequest.Brand = '';

ItemSearchRequest.Shared=SharedRequest;
ItemSearchRequest.Validate='';
ItemSearchRequest.XMLEscaping='';

soapService.init().then((service) => {
  return service.ItemSearch(ItemSearchRequest);
}).then((response) => {
  console.log(response);
});
```