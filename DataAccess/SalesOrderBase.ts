
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { FieldType } from './Record'
import { AddressBase } from './AddressBase'

/**
 * Sublist 'item' on the Sales Order record
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.decimalnumber
   amount:number

   @SublistFieldType.select
   commitinventory:number

   @SublistFieldType.currency
   costestimate:number

   @SublistFieldType.currency
   costestimaterate:number

   @SublistFieldType.checkbox
   deferrevrec:boolean

   @SublistFieldType.textarea
   description:string

   @SublistFieldType.date
   expectedshipdate:Date

   @SublistFieldType.checkbox
   isclosed:boolean

   @SublistFieldType.checkbox
   isestimate:boolean

   @SublistFieldType.checkbox
   istaxable:boolean

   @SublistFieldType.select
   item: number

   @SublistFieldType.freeformtext
   itemtype:string

   @SublistFieldType.freeformtext
   lineuniquekey:string

   @SublistFieldType.integernumber
   linenumber:number

   @SublistFieldType.select
   location:number

   @SublistFieldType.currency
   porate:number

   @SublistFieldType.select
   price:number

   @SublistFieldType.float
   quantity:number

   @SublistFieldType.decimalnumber
   rate:number

   @SublistFieldType.select
   taxcode:number

   @SublistFieldType.select
   department:number

   @SublistFieldType.date
   revrecstartdate:Date

   @SublistFieldType.date
   revrecenddate:Date

   @SublistFieldType.decimalnumber
   taxrate1:number

   @SublistFieldType.select
   units:number
}

/**
 * 'salesteam' sublist
 */
export class SalesTeamSublist extends SublistLine {

   @SublistFieldType.decimalnumber
   contribution:number

   @SublistFieldType.select
   employee:number

   @SublistFieldType.checkbox
   isprimary:boolean

   @SublistFieldType.select
   salesrole:number
}


/**
 * NetSuite Sales Order Record
 */
export class SalesOrderBase extends TransactionBase {

   static recordType() { return record.Type.SALES_ORDER }

   @FieldType.checkbox
   allowemptycards: boolean

   @FieldType.currency
   althandlingcost: number

   @FieldType.currency
   altsalestotal: number

   @FieldType.currency
   altshippingcost: number

   @FieldType.text
   authcode: string

   @FieldType.currency
   balance: number

   @FieldType.select
   billaddresslist: number

   @FieldType.subrecord(AddressBase)
   billingaddress: AddressBase

   @FieldType.select
   billingschedule: number

   @FieldType.text
   billisresidential: string

   @FieldType.checkbox
   canhavestackable: boolean

   @FieldType.checkbox
   ccapproved: boolean

   @FieldType.select
   ccavsstreetmatch: number

   @FieldType.select
   ccavszipmatch: number

   @FieldType.freeformtext
   ccexpiredate: string

   @FieldType.text
   cchold: string

   @FieldType.textarea
   ccholdetails: string

   @FieldType.select
   cciavsmatch: number

   @FieldType.text
   ccname: string

   @FieldType.freeformtext
   ccnumber: string

   @FieldType.text
   ccprocessoraccount: string

   @FieldType.text
   ccsecuritycode: string

   @FieldType.select
   ccsecuritycodematch: number

   @FieldType.text
   ccstreet: string

   @FieldType.text
   cczipcode: string

   @FieldType.select
   class: number

   @FieldType.currency
   consolidatebalance: number

   @FieldType.select
   couponcode: number

   @FieldType.select
   createdfrom: number

   @FieldType.select
   creditcard: number

   @FieldType.select
   creditcardprocessor: number

   @FieldType.select
   currency: number

   @FieldType.text
   currencyname: string

   @FieldType.text
   currencysymbol: string

   @FieldType.text
   customercode: string

   @FieldType.text
   debitcardissueno: string

   @FieldType.currency
   deferredrevenue: number

   @FieldType.select
   discountitem: number

   @FieldType.rate
   discountrate: number

   @FieldType.currency
   discounttotal: number

   @FieldType.select
   draccount: number

   @FieldType.date
   enddate: Date | null

   @FieldType.select
   entitynexus: number

   @FieldType.select
   entitytaxregnum: number

   @FieldType.currency
   estgrossprofit: number

   @FieldType.percent
   estgrossprofitpercent: string

   @FieldType.currency2
   exchangerate: number

   @FieldType.checkbox
   excludecommission: boolean

   @FieldType.text
   fob: string

   @FieldType.select
   fxaccount: number

   @FieldType.checkbox
   getauth: boolean

   @FieldType.currency
   giftcertapplied: number

   @FieldType.currency
   handlingcost: number

   @FieldType.text
   handlingtax1rate: string

   @FieldType.select
   handlingtaxcode: number

   @FieldType.checkbox
   ignoreavs: boolean

   @FieldType.checkbox
   ignorecsc: boolean

   @FieldType.text
   inputpnrefnum: string

   @FieldType.select
   intercostatus: number

   @FieldType.select
   intercotransaction: number

   @FieldType.checkbox
   isbasecurrency: boolean

   @FieldType.text
   isdefaultshippingrequest: string

   @FieldType.checkbox
   ismultishipto: boolean

   @FieldType.text
   ispurchasecard: string

   @FieldType.checkbox
   isrecurringpayment: boolean

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>

   @FieldType.select
   leadsource: number

   @FieldType.text
   linkedtrackingnumbers: string

   @FieldType.textarea
   message: string

   @FieldType.select
   messagesel: number

   @FieldType.text
   muccpromocodeinstance: string

   @FieldType.date
   nextbill: Date | null

   @FieldType.select
   nexus: number

   @FieldType.currency2
   onetime: number

   @FieldType.select
   opportunity: number

   @FieldType.checkbox
   overridehold: boolean

   @FieldType.checkbox
   overrideholdchecked: boolean

   @FieldType.float
   overrideshippingcost: number

   @FieldType.select
   partner: number

   @FieldType.datetime
   paymenteventdate: Date | null

   @FieldType.select
   paymenteventholdreason: number

   @FieldType.text
   paymenteventpurchasedatasent: string

   @FieldType.select
   paymenteventresult: number

   @FieldType.text
   paymenteventtype: string

   @FieldType.text
   paymenteventupdatedby: string

   @FieldType.select
   paymentmethod: number

   @FieldType.text
   paypalauthid: string

   @FieldType.checkbox
   paypalprocess: boolean

   @FieldType.text
   paypalstatus: string

   @FieldType.text
   paypaltranid: string

   @FieldType.text
   pnrefnum: string

   @FieldType.select
   promocode: number

   @FieldType.text
   promocodepluginimpl: string

   @FieldType.currency
   recognizedrevenue: number

   @FieldType.currency2
   recurannually: number

   @FieldType.currency2
   recurmonthly: number

   @FieldType.currency2
   recurquarterly: number

   @FieldType.currency2
   recurweekly: number

   @FieldType.text
   returntrackingnumbers: string

   @FieldType.text
   revcommitstatus: string

   @FieldType.text
   revenuestatus: string

   @FieldType.checkbox
   revreconrevcommitment: boolean

   @FieldType.date
   saleseffectivedate: Date | null

   @FieldType.select
   salesgroup: number

   @FieldType.sublist(SalesTeamSublist)
   salesteam: Sublist<SalesTeamSublist>

   @FieldType.select
   shipaddresslist: number

   @FieldType.checkbox
   shipcomplete: boolean

   @FieldType.date
   shipdate: Date | null

   @FieldType.text
   shipisresidential: string

   @FieldType.select
   shipmethod: number

   @FieldType.text
   shipoverride: string

   @FieldType.subrecord(AddressBase)
   shippingaddress: AddressBase

   @FieldType.currency
   shippingcost: number

   @FieldType.text
   shippingcostoverridden: string

   @FieldType.text
   shippingtax1rate: string

   @FieldType.select
   shippingtaxcode: number

   @FieldType.text
   softdescriptor: string

   @FieldType.text
   source: string

   @FieldType.date
   startdate: Date | null

   @FieldType.select
   subsidiarytaxregnum: number

   @FieldType.currency
   subtotal: number

   @FieldType.checkbox
   syncpartnerteams: boolean

   @FieldType.checkbox
   syncsalesteams: boolean

   @FieldType.checkbox
   taxdetailsoverride: boolean

   @FieldType.select
   taxitem: number

   @FieldType.float
   taxrate: number

   @FieldType.checkbox
   taxregoverride: boolean

   @FieldType.currency
   taxtotal: number

   @FieldType.select
   terms: number

   @FieldType.text
   threedstatuscode: string

   @FieldType.checkbox
   tobeemailed: boolean

   @FieldType.checkbox
   tobefaxed: boolean

   @FieldType.checkbox
   tobeprinted: boolean

   @FieldType.currency
   total: number

   @FieldType.currency
   totalcostestimate: number

   @FieldType.checkbox
   tranisvsoebundle: boolean

   @FieldType.currency
   unbilledorders: number

   @FieldType.freeformtext
   validfrom: string

   @FieldType.checkbox
   vsoeautocalc: boolean

}

