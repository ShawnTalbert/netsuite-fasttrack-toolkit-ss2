/**
 * Minimal type declarations for the N/record NetSuite module
 */

interface createOptions {
   type:Type,
   isDynamic?:boolean
   defaultValue?:Object
}



export interface Record {
   type:string
   id:number

   cancelLine(o:any) :void

   commitLine(o:any) : void

   findMatrixSublistLinewithValue(o:any) : void
   findSublistLineWithValue(o:any)
   
   /**
    * gets a field value
     */
   getValue(options:{ fieldId: string}) : any
   /**
    * gets the text value for a field
    * @param options
     */
   getText(options:{ fieldId:string}) : string
   
   /**
    * sets a field value
    *  
    */
   setValue(options:{ fieldId:string, value:any, ignoreFieldChange:boolean}): void

   save(options?:any):number

   "delete"(options:any)
   /**
    * retrieves the given sublist by the sublist id (e.g. 'item' for the item sublist)
    * @param string
     */
   getSublist(options:{ sublistId: string}) : Sublist

    /**
     * returns the number of lines in a sublist
     * @param string internal id of the sublist (e.g. 'item')
     */
   getLineCount(options:{sublistId:string}) : number

    /**
     * inserts a sublist line
     * @param string
     * @param number
     * @param boolean
     */
   insertLine(options:{sublistId:string, line:number, ignoreRecalc:boolean})

    /**
     * returns the value of a sublist field
     * @param string which sublist?
     * @param string
     * @param number
     */
   getSublistValue(options:{sublistId:string, fieldId:string, line:number})
   setSublistValue(options:{sublistId:string, fieldId:string, line:number, value:any})

   getSublistText(options:Object)

   cancelLine(options:Object)
   
   commitLine(options:Object)
   
   selectLine(options:{sublistId:string, line:number})

}
/**
 * loads a netsuite record
 * @param options
 */
export function load(options:{ type:Type, id:number, isDynamic?:boolean, defaultValue?:Object}):Record

/**
 * creates a new netsuite record
 */
export function create(options:createOptions) : Record


export function submitFields(options)

/**
 * Record types declared by NetSuite. Behind the scenes I think these correspond to the string record names
 * from SS1.0. For example 'customer' for the Customer record. Here we can just define an enumeration since 
 * the real values come from NS.
 */
export declare enum Type {
   CREDIT_MEMO,
   CUSTOMER,
   CUSTOMER_PAYMENT,
   SALES_ORDER,
   INVOICE,
   CASH_REFUND
}

export interface Sublist {
   getColumn(options:{ fieldId:string })
   /**
    * internal id of the sublist
    */
   id:string
   /**
    * Indicates whether the sublist has changed on the record form.
    */
   isChanged:boolean
   /**
    * Indicates whether the sublist is displayed on the record form.
    */
   isDisplay:boolean
   /**
    * Returns the sublist type.
    */
   type:string
}