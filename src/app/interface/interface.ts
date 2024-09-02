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
export interface searchDefaultersStore{
    client?: string,
    billing?:string,
    service?:string,
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
export interface PaginationRevenue{
    totalElements : number,
    content : Array<Revenue>
}
export interface Revenue {
    id:                    number;
    cuentacliente:         null | string;
    cuentafacturacion:     null | string;
    nombre:                null | string;
    productos:             null | string;
    fechaUltimoPago:       null | string;
    diasMorosidad:         null | string;
    saldoVencido:          null | string;
    rpt:                   null | string;
    brmAccount:            null | string;
    origin:                null | string;  
}

export interface searchRevenueStore{
    client?: string,
    billing?:string,
    paginator: ViewPaginator,
    results: Array<Revenue>,
}
export interface viewRevenueStore{
    search: viewRevenueStoreSsearch
    results?: Array<Revenue>,
    paginator?:ViewPaginator,
}
export interface viewRevenueStoreSsearch{
    client? : string,
    billing?: string,
}