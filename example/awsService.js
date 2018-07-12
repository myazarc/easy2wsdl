const soap = require('soap');
class Availability {
}

class AudienceRating {
}

class Condition {
}

class RelatedItemPage {
}

class Shared {
	Actor;
	Artist;
	Availability;
	AudienceRating;
	Author;
	Brand;
	BrowseNode;
	Composer;
	Condition;
	Conductor;
	Director;
	ItemPage;
	Keywords;
	Manufacturer;
	MaximumPrice;
	MerchantId;
	MinimumPrice;
	MinPercentageOff;
	MusicLabel;
	Orchestra;
	Power;
	Publisher;
	RelatedItemPage;
	RelationshipType;
	ResponseGroup;
	SearchIndex;
	Sort;
	Title;
	ReleaseDate;
	IncludeReviewsSummary;
	TruncateReviewsAt;
}

class Request {
	Actor;
	Artist;
	Availability;
	AudienceRating;
	Author;
	Brand;
	BrowseNode;
	Composer;
	Condition;
	Conductor;
	Director;
	ItemPage;
	Keywords;
	Manufacturer;
	MaximumPrice;
	MerchantId;
	MinimumPrice;
	MinPercentageOff;
	MusicLabel;
	Orchestra;
	Power;
	Publisher;
	RelatedItemPage;
	RelationshipType;
	ResponseGroup;
	SearchIndex;
	Sort;
	Title;
	ReleaseDate;
	IncludeReviewsSummary;
	TruncateReviewsAt;
}

class ItemSearch {
	MarketplaceDomain;
	AWSAccessKeyId;
	AssociateTag;
	XMLEscaping;
	Validate;
	Shared;
	Request;
}

class ItemLookup {
	MarketplaceDomain;
	AWSAccessKeyId;
	AssociateTag;
	Validate;
	XMLEscaping;
	Shared;
	Request;
}

class BrowseNodeLookup {
	MarketplaceDomain;
	AWSAccessKeyId;
	AssociateTag;
	Validate;
	XMLEscaping;
	Shared;
	Request;
}

class SimilarityLookup {
	MarketplaceDomain;
	AWSAccessKeyId;
	AssociateTag;
	Validate;
	XMLEscaping;
	Shared;
	Request;
}

class CartGet {
	MarketplaceDomain;
	AWSAccessKeyId;
	AssociateTag;
	Validate;
	XMLEscaping;
	Shared;
	Request;
}

class CartAdd {
	MarketplaceDomain;
	AWSAccessKeyId;
	AssociateTag;
	Validate;
	XMLEscaping;
	Shared;
	Request;
}

class CartCreate {
	MarketplaceDomain;
	AWSAccessKeyId;
	AssociateTag;
	Validate;
	XMLEscaping;
	Shared;
	Request;
}

class CartModify {
	MarketplaceDomain;
	AWSAccessKeyId;
	AssociateTag;
	Validate;
	XMLEscaping;
	Shared;
	Request;
}

class CartClear {
	MarketplaceDomain;
	AWSAccessKeyId;
	AssociateTag;
	Validate;
	XMLEscaping;
	Shared;
	Request;
}

class AWSECommerceService {
	async init(url = 'http://webservices.amazon.com/AWSECommerceService/2013-08-01/AWSECommerceService.wsdl'){
		return this.soapService = soap.createClientAsync(url);
	}

	 ItemSearch(ItemSearch){
		return this.soapService.ItemSearchAsync(ItemSearch);
	}

	 ItemLookup(ItemLookup){
		return this.soapService.ItemLookupAsync(ItemLookup);
	}

	 BrowseNodeLookup(BrowseNodeLookup){
		return this.soapService.BrowseNodeLookupAsync(BrowseNodeLookup);
	}

	 SimilarityLookup(SimilarityLookup){
		return this.soapService.SimilarityLookupAsync(SimilarityLookup);
	}

	 CartGet(CartGet){
		return this.soapService.CartGetAsync(CartGet);
	}

	 CartAdd(CartAdd){
		return this.soapService.CartAddAsync(CartAdd);
	}

	 CartCreate(CartCreate){
		return this.soapService.CartCreateAsync(CartCreate);
	}

	 CartModify(CartModify){
		return this.soapService.CartModifyAsync(CartModify);
	}

	 CartClear(CartClear){
		return this.soapService.CartClearAsync(CartClear);
	}

}

export {
AWSECommerceService,
Availability,
AudienceRating,
Condition,
RelatedItemPage,
Shared,
Request,
ItemSearch,
ItemLookup,
BrowseNodeLookup,
SimilarityLookup,
CartGet,
CartAdd,
CartCreate,
CartModify,
CartClear }