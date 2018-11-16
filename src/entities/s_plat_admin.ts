import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_admin",{schema:"sky_gdjzj"})
export class SPlatAdmin {

    @Column("char",{ 
        nullable:true,
        length:32,
        name:"upass"
        })
    upass:string | null;
        

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("char",{ 
        nullable:true,
        length:32,
        name:"tel"
        })
    tel:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:13,
        scale:0,
        name:"lastLogin"
        })
    lastLogin:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:20,
        name:"lastLoginIp"
        })
    lastLoginIp:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"isLock"
        })
    isLock:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:128,
        name:"name"
        })
    name:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:64,
        name:"uname"
        })
    uname:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"money"
        })
    money:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"level"
        })
    level:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"createBy"
        })
    createBy:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:32,
        name:"wx"
        })
    wx:string | null;
        
}
