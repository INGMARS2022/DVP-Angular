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
export interface PaginationLayout{
    totalElements : number,
    content : Array<Layout>
}
export interface PaginationPay{
    totalElements : number,
    content : Array<Pay>
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
    hit1:                  null | string;
    hit3:                   null | string;
    bucket:                 null | string;
}
export interface Layout {
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
    billingPhoneMain:      null | string;
    billingPhoneHouse:     null | string;
    billingPhoneMovil:     null | string;
    billingProducts:       null | string;
    serviceStreet:         null | string;
    serviceColony:         null | string;
    serviceLat:            null | string;
    serviceLon:            null | string;
    servicePostalCode:     null | string;
    serviceEstate:         null | string;
    serviceNumber:         null | string;
    serviceInterStreet1:   null | string;
    serviceInterStreet2:   null | string;
    serviceInterNumber:    null | string;
}
export interface Pay {
    id:               number;
    customerAccount:  null | string;
    customerName:     null | string;
    customerRpt:      null | string;
    billingProducts:  null | string;
    billingAccountId: null | string;
    billingAccount:   null | string;
    brmAccount:       null | string;
    brmBusinessName:  null | string;
    brmPayDate:       null | string;
    brmOriginPay:     null | string;
    brmTotalPay:      null | string;
    brmCurrency:      null | string;
    brmTotalBill:     null | string;
    brmNumberBill:    null | string;
    brmSeriesBill:    null | string;
    origin:           null | string;
}
export interface searchDefaultersStore{
    client?: string,
    billing?:string,
    service?:string,
    origin?:string,
    paginator: ViewPaginator,
    results: Array<Defaulters>,
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
    actualPage:        number,
    finalPage: number;
}
export interface searchLayoutStore{
    client?: string,
    billing?:string,
    service?:string,
    paginator: ViewPaginator,
    results: Array<Layout>,
}
export interface searchPayStore{
    client?: string,
    billing?:string,
    service?:string,
    paginator: ViewPaginator,
    results: Array<Pay>,
}
export interface Process {
    id:        number;
    idProcess: string;
    type:      string;
    step:      string;
    origen:    string;
    startP:    Date| null;
    endP:      Date| null;
    status:    string;
    comments:  string | null;
    error:     string | null;
}