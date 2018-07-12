# easy2wsdl
Create wsdl to javascript class with [node-soap](https://github.com/vpulim/node-soap);

# Installation

```
npm install --save-dev easy2wsdl
```

# Usage

```
const easy2wsdl = require('easy2wsdl');

easy2wsdl.create(url,serviceName).then((res) => {
  console.log(res);
});

```

# Example
```
const easy2wsdl = require('easy2wsdl');
const url = 'http://webservices.amazon.com/AWSECommerceService/2013-08-01/AWSECommerceService.wsdl';
const serviceName = 'AWSECommerceService';
easy2wsdl.create(,serviceName).then((res) => {
  console.log(res);
});
```
Save response: awsService.js

install node soap

```
npm install --save soap
```

Run:

```
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