export interface Login{
    user:    string,
    password: string
}
export interface LoginResponse{
    jwt:    string,
    users:   User
}
export interface User{
    email:    string,
    name:     string
}
export interface PaginationDefaulters{
    totalElements : number,
    content : Array<Defaulters>
}
export interface Defaulters {
    id:                    number;
    customerAccount:       null | string;
    customerStatus:        null | string;
    customerClientClass:   null | string;
    customerAccountNumber: null | string;
    customername:          null | string;
    billingAccount:        null | string;
    billingBusinessName:   null | string;
    billingSubtype:        null | string;
    billingEmail:          null | string;
    billingPaymentMethod:  null | string;
    billingCycle:          null | string;
    billingDueDate:        null | string;
    billingFirstBill:      null | string;
    billingRpt:            null | string;
    serviceAccount:        null | string;
    serviceCity:           null | string;
    serviceAddress:        null | string;
    videoAssets:           null | string;
    dataAssets:            null | string;
    voiceAssets:           null | string;
    brmAccount:            null | string;
    brmSegment:            null | string;
    brmStatusAccount:      null | string;
    brmChargeDateAccount:  null | string;
    brmPhoneMain:          null | string;
    brmLastPayDate:        null | string;
    brmTLBilling:          null | string;
    brmTBalance:           null | string;
    brmBalanceDue:         null | string;
    brmBalanceForDue:      null | string;
    brmAgeOfDebt:          null | string;
    origin:                null | string;
}
export interface viewDefaultersStore{
    search: viewDefaultersStoreSsearch
    results?: Array<Defaulters>,
    paginator?:ViewPaginator,
}
export interface viewDefaultersStoreSsearch{
    client? : string,
    billing?: string,
    service?: string
}
export interface ViewPaginator{
    totalResults:      number,
    initialPage:       number,
    finalPage:         number,
    actualPage?:        number,
}