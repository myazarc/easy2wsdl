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