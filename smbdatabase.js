db.createCollection("SMB_CD_JOB_TITLE",{capped:true, autoIndexID:true});
db.SMB_CD_JOB_TITLE.insert([{_id:1, JOB_TITLE:"Clerk", TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:2, JOB_TITLE:"Manager" ,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:3, JOB_TITLE:"Analyst", TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}}]);
db.createCollection("SMB_CD_EMPLOYEE",{capped:true, autoIndexID:true});
db.SMB_CD_EMPLOYEE.insert([{_id:1, EMP_ID:1000, SSN:123456789,FNAME:"sreerag", LNAME:"sreenivas", TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"},JOB_ID:db.SMB_CD_JOB_TITLE.findOne({JOB_TITLE:"Analyst"})._id},{_id:2, EMP_ID:1001, SSN:123789456,FNAME:"Mark", LNAME:"wilson", TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"},JOB_ID:db.SMB_CD_JOB_TITLE.findOne({JOB_TITLE:"Clerk"})._id},{_id:3, EMP_ID:1002, SSN:123456789,FNAME:"sreerag", LNAME:"sreenivas", TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"},JOB_ID:db.SMB_CD_JOB_TITLE.findOne({JOB_TITLE:"Manager"})._id}]);
db.createCollection("SMB_CD_USER_DETAILS",{capped:true, autoIndexID:true});
db.SMB_CD_USER_DETAILS.insert([{_id:1, USERNAME:"SS",PASSWORD:"aztec123",EMP_REF_ID:db.SMB_CD_EMPLOYEE.findOne({EMP_ID:1001})._id, TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:2, USERNAME:"ABC",PASSWORD:"ABC123",EMP_REF_ID:db.SMB_CD_EMPLOYEE.findOne({EMP_ID:1002})._id, TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:3, USERNAME:"XYZ",PASSWORD:"123ABC", EMP_REF_ID:db.SMB_CD_EMPLOYEE.findOne({EMP_ID:1000})._id, TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}}]);
db.createCollection("SMB_IM_CATEGORY",{capped:true, autoIndexID:true});
db.SMB_IM_CATEGORY.insert([{_id:1, CATEGORY:"Cycle Parts", TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:2, CATEGORY:"Clothing" ,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:3, CATEGORY:"Others", TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}}]);
db.createCollection("SMB_CD_SUB_SYSTEM",{capped:true, autoIndexID:true});
db.SMB_CD_SUB_SYSTEM.insert([{_id:1, SUB_SYSTEM:"Inventory", TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:2, SUB_SYSTEM:"Vendor Order" ,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:3, SUB_SYSTEM:"Repair", TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}}]);
db.createCollection("SMB_CD_CUSTOMER",{capped:true, autoIndexID:true});
db.SMB_CD_CUSTOMER.insert([{_id:1,CUST_ID:2000,FNAME:"Sreerag", LNAME:"Sreenivasan",ADDRESS:{STREET:"6545 Montezuma",CITY:"San Diego", STATE:"California"},PAYMENT_TYPE:"Credit Card",PHONE:"6194166753",EMAIL:"srag.sree@gmail.com",CARD_NUMBER:"123456789",USER_REF_ID:db.SMB_CD_USER_DETAILS.findOne({USERNAME:"ABC"})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:2,CUST_ID:2001,FNAME:"Ben", LNAME:"Johnson",ADDRESS:{STREET:"6543 University Ave",CITY:"San Diego", STATE:"California"},PAYMENT_TYPE:"Debit Card",PHONE:"6194123755",EMAIL:"abc@gmail.com",CARD_NUMBER:"364583925",USER_REF_ID:db.SMB_CD_USER_DETAILS.findOne({USERNAME:"XYZ"})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:3,CUST_ID:2002,FNAME:"Albert", LNAME:"Gomez",ADDRESS:{STREET:"3452 EL-Cajon Blvd",CITY:"San Diego", STATE:"California"},PAYMENT_TYPE:"Credit Card",PHONE:"6192164550",EMAIL:"xyz.sree@gmail.com",CARD_NUMBER:"123456789",USER_REF_ID:db.SMB_CD_USER_DETAILS.findOne({USERNAME:"SS"})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}}]);
db.createCollection("SMB_CD_ACCESS",{capped:true, autoIndexID:true});
db.SMB_CD_ACCESS.insert([{_id:1, ISREAD:"Y", ISCREATE:"Y", ISDELETE:"Y", ISUPDATE:"Y",EMP_REF_ID:db.SMB_CD_EMPLOYEE.findOne({EMP_ID:1000})._id, SS_REF_ID: db.SMB_CD_SUB_SYSTEM.findOne({SUB_SYSTEM:"Repair"})._id,USER_REF_ID:db.SMB_CD_USER_DETAILS.findOne({USERNAME:"SS"})._id ,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:2, ISREAD:"Y", ISCREATE:"N", ISDELETE:"Y", ISUPDATE:"Y",EMP_REF_ID:db.SMB_CD_EMPLOYEE.findOne({EMP_ID:1002})._id, SS_REF_ID: db.SMB_CD_SUB_SYSTEM.findOne({SUB_SYSTEM:"Vendor Order"})._id,USER_REF_ID:db.SMB_CD_USER_DETAILS.findOne({USERNAME:"XYZ"})._id ,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:3, ISREAD:"N", ISCREATE:"Y", ISDELETE:"Y", ISUPDATE:"Y",EMP_REF_ID:db.SMB_CD_EMPLOYEE.findOne({EMP_ID:1001})._id, SS_REF_ID: db.SMB_CD_SUB_SYSTEM.findOne({SUB_SYSTEM:"Inventory"})._id,USER_REF_ID:db.SMB_CD_USER_DETAILS.findOne({USERNAME:"ABC"})._id ,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}}]);
db.createCollection("SMB_VO_VENDOR",{capped:true, autoIndexID:true});
db.SMB_VO_VENDOR.insert([{_id:1,NAME:"Kroger",ADDRESS:{STREET:"6595 Montezuma",CITY:"San Diego", STATE:"California"}, V_STATUS:"Preferred", WEBSITE:"www.kroger.com",COMMENTS:"Offers 10% discounts on all orders",Email:"kroger@gmail.com",TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:2,NAME:"Target",ADDRESS:{STREET:"7112 College Ave",CITY:"San Diego", STATE:"California"}, V_STATUS:"Preferred", WEBSITE:"www.target.com",COMMENTS:"Buy 1 Get 1 on all orders",Email:"target@gmail.com",TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:3,NAME:"Walmart",ADDRESS:{STREET:"9725 University Ave",CITY:"San Diego", STATE:"California"}, V_STATUS:"Preferred", WEBSITE:"www.walmart.com",COMMENTS:"Offers 30% discounts on all orders",Email:"walmart@gmail.com",TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}}]);
db.createCollection("SMB_VO_VENDOR_ORDER",{capped:true, autoIndexID:true});
db.SMB_VO_VENDOR_ORDER.insert([{_id:1,ORDER_DETAILS:[{ITEM:"Pump",QUANTITY:3},{ITEM:"Tyre",QUANTITY:2}],DELIVERY_ADDRESS:{STREET:"6545 Montezuma",CITY:"San Diego", STATE:"California"},SHIPPING_TYPE:"Express", DESIRED_RECEIPT_DATE:"11-05-2016",EST_SHIPPING_COST:65,TOTAL_COST:45,IS_APPROVED:"N",ORDER_STATUS:"Pending",EMP_REF_ID:db.SMB_CD_EMPLOYEE.findOne({EMP_ID:1001})._id,VENDOR_REF_ID:db.SMB_VO_VENDOR.findOne({NAME:"Kroger"})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:2,ORDER_DETAILS:[{ITEM:"Jacket",QUANTITY:2},{ITEM:"Bottle",QUANTITY:4}],DELIVERY_ADDRESS:{STREET:"5342 College Ave",CITY:"San Diego", STATE:"California"},SHIPPING_TYPE:"Express", DESIRED_RECEIPT_DATE:"11-05-2016",EST_SHIPPING_COST:65,TOTAL_COST:45,IS_APPROVED:"N",ORDER_STATUS:"Pending",EMP_REF_ID:db.SMB_CD_EMPLOYEE.findOne({EMP_ID:1000})._id,VENDOR_REF_ID:db.SMB_VO_VENDOR.findOne({NAME:"Walmart"})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:3,ORDER_DETAILS:[{ITEM:"Light",QUANTITY:3},{ITEM:"Seat",QUANTITY:1}],DELIVERY_ADDRESS:{STREET:"6595 Montezuma",CITY:"San Diego", STATE:"California"},SHIPPING_TYPE:"Express", DESIRED_RECEIPT_DATE:"11-05-2016",EST_SHIPPING_COST:65,TOTAL_COST:45,IS_APPROVED:"N",ORDER_STATUS:"Pending",EMP_REF_ID:db.SMB_CD_EMPLOYEE.findOne({EMP_ID:1002})._id,VENDOR_REF_ID:db.SMB_VO_VENDOR.findOne({NAME:"Target"})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}}]);
db.createCollection("SMB_IM_INVENTORY",{capped:true, autoIndexID:true});
db.SMB_IM_INVENTORY.insert([{_id:1,NAME:"Reflector", CONDITION:"New",UNIT_PRICE:10,VENDOR_REF_ID:db.SMB_VO_VENDOR.findOne({NAME:"Kroger"})._id,CATEGORY_REF_ID:db.SMB_IM_CATEGORY.findOne({CATEGORY:"Others"})._id,VENDOR_ORDER_REF_ID:db.SMB_VO_VENDOR_ORDER.findOne({"ORDER_DETAILS.ITEM":'Bottle'})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:2,NAME:"Gear", CONDITION:"Used",UNIT_PRICE:30,VENDOR_REF_ID:db.SMB_VO_VENDOR.findOne({NAME:"Walmart"})._id,CATEGORY_REF_ID:db.SMB_IM_CATEGORY.findOne({CATEGORY:"Cycle Parts"})._id,VENDOR_ORDER_REF_ID:db.SMB_VO_VENDOR_ORDER.findOne({"ORDER_DETAILS.ITEM":'Pump'})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:3,NAME:"Jacket", CONDITION:"New",UNIT_PRICE:40,VENDOR_REF_ID:db.SMB_VO_VENDOR.findOne({NAME:"Target"})._id,CATEGORY_REF_ID:db.SMB_IM_CATEGORY.findOne({CATEGORY:"Clothing"})._id,VENDOR_ORDER_REF_ID:db.SMB_VO_VENDOR_ORDER.findOne({"ORDER_DETAILS.ITEM":'Seat'})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}}]);
db.createCollection("SMB_IM_TRANSACTION",{capped:true, autoIndexID:true});
db.SMB_IM_TRANSACTION.insert([{_id:1, TRANS_TYPE:"Sale", SCHEDULE_STATUS:"actual", QUANTITY:4,SHIPPING_TYPE:"Express",TOTAL_COST:70,DELIVERY_STATUS:"Delivered",INVENTORY_REF_ID:db.SMB_IM_INVENTORY.findOne({NAME:"Reflector"})._id,CUSTOMER_REF_ID:db.SMB_CD_CUSTOMER.findOne({FNAME:"Sreerag"})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:2, TRANS_TYPE:"Promo", SCHEDULE_STATUS:"Planned", QUANTITY:1,SHIPPING_TYPE:"Express",TOTAL_COST:65,DELIVERY_STATUS:"Shipped",INVENTORY_REF_ID:db.SMB_IM_INVENTORY.findOne({NAME:"Jacket"})._id,CUSTOMER_REF_ID:db.SMB_CD_CUSTOMER.findOne({LNAME:"Gomez"})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:3, TRANS_TYPE:"Sale", SCHEDULE_STATUS:"Palnned", QUANTITY:2,SHIPPING_TYPE:"2-Day",TOTAL_COST:50,DELIVERY_STATUS:"Yet to Ship",INVENTORY_REF_ID:db.SMB_IM_INVENTORY.findOne({NAME:"Gear"})._id,CUSTOMER_REF_ID:db.SMB_CD_CUSTOMER.findOne({FNAME:"Ben"})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}}])  

 







