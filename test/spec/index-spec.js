KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('unfold-up', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/unfold-up/1.0.0/']});