import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_friends",{schema:"sky_gdjzj"})
export class SPlatFriends {

    @Column("tinyint",{ 
        nullable:true,
        name:"isFriend"
        })
    isFriend:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"friendId"
        })
    friendId:number | null;
        

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"userId"
        })
    userId:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:13,
        scale:0,
        name:"logTime"
        })
    logTime:string | null;
        
}
