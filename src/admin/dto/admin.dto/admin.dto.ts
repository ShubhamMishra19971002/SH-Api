export class AdminDtoRequest {
    admin_id:string
    password:string
    adminName:string
    adminRoles:Array<any>
    adminRolesID:string
}


export class AdminDBReq{
    adminId:string
    password:string
    adminName:string
    adminRoles:Array<any>
    adminRolesID:string
}

export class updateUserScreenDtoRequest{
    updateType:string
    headerColor:string
}
