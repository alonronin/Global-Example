this.my_test_global_object = {
    var1 : "var1",
    var2 : "var2",
    all : function(){
        return this.var1 + " " + this.var2;
    },
    test : function(){
        return global.test;
    },
    g : function(){
        return my_test_global_object.var1;
        //return "test g";
    }
};