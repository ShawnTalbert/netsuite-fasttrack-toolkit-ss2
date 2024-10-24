var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Transaction", "./Sublist", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InboundShipmentBase = exports.LandedCostSublist = exports.ItemSublist = void 0;
    /**
     * NetSuite Inbound Shipment record
     */
    const Transaction_1 = require("./Transaction");
    const Sublist_1 = require("./Sublist");
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     * The 'item' sublist
     */
    class ItemSublist extends Sublist_1.SublistLine {
    }
    exports.ItemSublist = ItemSublist;
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ItemSublist.prototype, "id", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ItemSublist.prototype, "currencyprecision", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "expectedrate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "fulfillable", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "fxrate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "inventorydetailavail", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "inventorydetailid", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "isnumbereditem", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "itemid", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "itemtype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "lineid", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "ownershiptransferscount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "pocurrency", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "porate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "povendor", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "povendorkey", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "povendorurl", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "purchaseorder", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "purchaseorderkey", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "purchaseorderurl", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "quantitybilled", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantityexpected", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantityexpectedorig", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantityreceived", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantityremaining", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "receivinglocation", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "relatedtransactions", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "relatedtransactionsurl", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "sequencenumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "shipmentitem", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "shipmentitemamount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "shipmentitemdescription", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemSublist.prototype, "shipmentitemeffectivedate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "shipmentitemexchangerate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "shipmentitemfxrateoverriden", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "shipmentitemkey", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "shipmentitemtext", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "shipmentitemurl", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "totalunitcost", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "tracklandedcost", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "unit", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "unitlandedcost", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "unitrate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "vendorid", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "weightlbs", void 0);
    /**
     * The 'landedcost' sublist
     */
    class LandedCostSublist extends Sublist_1.SublistLine {
    }
    exports.LandedCostSublist = LandedCostSublist;
    __decorate([
        Sublist_1.SublistFieldType.select
    ], LandedCostSublist.prototype, "landedcostallocationmethod", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], LandedCostSublist.prototype, "landedcostamount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], LandedCostSublist.prototype, "landedcostcostcategory", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], LandedCostSublist.prototype, "landedcostcurrency", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], LandedCostSublist.prototype, "landedcostcurrencyprecision", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], LandedCostSublist.prototype, "landedcosteffectivedate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], LandedCostSublist.prototype, "landedcostexchangerate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], LandedCostSublist.prototype, "landedcostexchangerateoverriden", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], LandedCostSublist.prototype, "landedcostid", void 0);
    __decorate([
        Sublist_1.SublistFieldType.multiselect
    ], LandedCostSublist.prototype, "landedcostshipmentitems", void 0);
    /**
     * NetSuite Inbound Shipment Record Type
     */
    class InboundShipmentBase extends Transaction_1.TransactionBase {
        static recordType() {
            return record.Type.INBOUND_SHIPMENT;
        }
    }
    exports.InboundShipmentBase = InboundShipmentBase;
    __decorate([
        Record_1.FieldType.date
    ], InboundShipmentBase.prototype, "actualdeliverydate", void 0);
    __decorate([
        Record_1.FieldType.date
    ], InboundShipmentBase.prototype, "actualshippingdate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InboundShipmentBase.prototype, "billoflading", void 0);
    __decorate([
        Record_1.FieldType.date
    ], InboundShipmentBase.prototype, "expecteddeliverydate", void 0);
    __decorate([
        Record_1.FieldType.date
    ], InboundShipmentBase.prototype, "expectedshippingdate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InboundShipmentBase.prototype, "externaldocumentnumber", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InboundShipmentBase.prototype, "inventorydetailuitype", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InboundShipmentBase.prototype, "shipmentbasecurrency", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InboundShipmentBase.prototype, "shipmentbillingstatus", void 0);
    __decorate([
        Record_1.FieldType.date
    ], InboundShipmentBase.prototype, "shipmentcreateddate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InboundShipmentBase.prototype, "shipmentmemo", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InboundShipmentBase.prototype, "shipmentnumber", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InboundShipmentBase.prototype, "shipmentstatus", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InboundShipmentBase.prototype, "templatestored", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InboundShipmentBase.prototype, "vesselnumber", void 0);
    __decorate([
        Record_1.FieldType.sublist(ItemSublist)
    ], InboundShipmentBase.prototype, "items", void 0);
    __decorate([
        Record_1.FieldType.sublist(LandedCostSublist)
    ], InboundShipmentBase.prototype, "landedcost", void 0);
});
