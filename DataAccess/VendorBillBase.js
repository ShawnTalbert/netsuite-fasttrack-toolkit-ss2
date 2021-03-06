/**
 * NetSuite Vendor Bill record
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        define(["require", "exports", "./EC_nsdal", "./Sublist", "N/record", "./Transaction"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nsdal = require("./EC_nsdal");
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    var Transaction_1 = require("./Transaction");
    /**
     * Sublist 'item' on the Vendor Bill record
     */
    var ItemSublist = /** @class */ (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            nsdal.SublistFieldType.select
        ], ItemSublist.prototype, "item", void 0);
        __decorate([
            nsdal.SublistFieldType.integernumber
        ], ItemSublist.prototype, "quantity", void 0);
        __decorate([
            nsdal.SublistFieldType.currency
        ], ItemSublist.prototype, "amount", void 0);
        __decorate([
            nsdal.SublistFieldType.currency
        ], ItemSublist.prototype, "rate", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    /**
     * Sublist 'expense' on the Vendor Bill record
     */
    var ExpenseSublist = /** @class */ (function (_super) {
        __extends(ExpenseSublist, _super);
        function ExpenseSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            nsdal.SublistFieldType.select
        ], ExpenseSublist.prototype, "account", void 0);
        __decorate([
            nsdal.SublistFieldType.currency
        ], ExpenseSublist.prototype, "amount", void 0);
        __decorate([
            nsdal.SublistFieldType.select
        ], ExpenseSublist.prototype, "categoryexpaccount", void 0);
        __decorate([
            nsdal.SublistFieldType.select
        ], ExpenseSublist.prototype, "department", void 0);
        __decorate([
            nsdal.SublistFieldType.integernumber
        ], ExpenseSublist.prototype, "line", void 0);
        __decorate([
            nsdal.SublistFieldType.freeformtext
        ], ExpenseSublist.prototype, "lineuniquekey", void 0);
        __decorate([
            nsdal.SublistFieldType.select
        ], ExpenseSublist.prototype, "location", void 0);
        return ExpenseSublist;
    }(Sublist_1.SublistLine));
    exports.ExpenseSublist = ExpenseSublist;
    /**
     * NetSuite Vendor Bill Record
     */
    var VendorBillBase = /** @class */ (function (_super) {
        __extends(VendorBillBase, _super);
        function VendorBillBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VendorBillBase.recordType = record.Type.VENDOR_BILL;
        __decorate([
            nsdal.FieldType.sublist(ItemSublist)
        ], VendorBillBase.prototype, "item", void 0);
        __decorate([
            nsdal.FieldType.sublist(ExpenseSublist)
        ], VendorBillBase.prototype, "expense", void 0);
        return VendorBillBase;
    }(Transaction_1.TransactionBase));
    exports.VendorBillBase = VendorBillBase;
});
