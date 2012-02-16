(function(){
    var my_test_global_object = this.my_test_global_object = {
        var1 : "var1",
        var2 : "var2",
        all : function(){
            return this.var1 + " " + this.var2;
        }
    }
})();