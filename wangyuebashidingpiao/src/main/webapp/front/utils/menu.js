const menu = {
    list() {
        return [
		{
            "backMenu":[
            ],
            "frontMenu":[],
            "hasBackLogin":"是",
            "hasBackRegister":"否",
            "hasFrontLogin":"否",
            "hasFrontRegister":"否",
            "roleName":"管理员",
            "tableName":"users"
        },
		{
            "backMenu":[
               {
                   "child":[
                       {
                           "buttons":[
                               "查看"
                           ],
                           "menu":"积分兑换商城",
                           "menuJump":"列表",
                           "tableName":"jifneduihuan"
                       }
                   ],
                   "menu":"积分兑换商城"
               }
			   ,
			   {
			       "child":[
			           {
			               "buttons":[
			                   "查看",
							   "删除"
			               ],
			               "menu":"积分消费明细",
			               "menuJump":"列表",
			               "tableName":"jifenjilu"
			           }
			       ],
			       "menu":"积分消费明细"
			   }
                ,{
                    "child":[
                        {
                            "buttons":[
                                "查看"
                            ],
                            "menu":"新闻信息",
                            "menuJump":"列表",
                            "tableName":"news"
                        }
                    ],
                    "menu":"新闻信息"
                }
            ],
			"hasBackLogin":"是",
			"hasBackRegister":"否",
			"hasFrontLogin":"是",
			"hasFrontRegister":"是",
			"roleName":"用户",
			"tableName":"yonghu"
        }
]
	
	}
}
export default menu;
