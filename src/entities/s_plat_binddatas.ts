import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_binddatas",{schema:"sky_gdjzj"})
export class SPlatBinddatas {

    @Column("char",{ 
        nullable:true,
        length:20,
        name:"bodyCard"
        })
    bodyCard:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:16,
        name:"name"
        })
    name:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"address"
        })
    address:string | null;
        

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"userId"
        })
    userId:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:11,
        name:"tel"
        })
    tel:string | null;
        
}
