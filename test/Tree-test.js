var chai = require('chai');
var Tree = require('../index');

var should = chai.should();

describe("Tree data structure", function () {
    it("instantiation should return objects that make sense", function () {
        var tree = new Tree("root");
        should.exist(tree);
        tree.should.be.an("object");
        tree.should.have.keys(['value', 'branches']);
        tree.value.should.equal("root");
        should.not.exist(tree.branches);
        should.equal(tree.branches, null);
    });
    it("adding leafs to tree should work", function () {
        var tree = new Tree("root");
        var branch1 = tree.addBranch(new Tree("branch 1"));
        var branch2 = tree.addBranch(new Tree("branch 2"));
        should.exist(tree);
        tree.branches.length.should.equal(2);
    });
    it("finding leaves in simple node with just leafs should work", function () {
        var tree = new Tree("root");
        var branch1 = tree.addBranch(new Tree("branch 1"));
        var branch2 = tree.addBranch(new Tree("branch 2"));
        var foundLeaves = Tree.getLeaves(tree);
        foundLeaves.should.be.an('array');
        foundLeaves.length.should.equal(2);
        foundLeaves[0].value.should.equal("branch 1");
        foundLeaves[1].value.should.equal("branch 2");
    });
    it("making a simple tree with height=3 should work", function () {
        var tree = new Tree("root");
        var branch1 = tree.addBranch(new Tree("branch 1"));
        var deepLeaf = branch1.addBranch(new Tree("deep leaf"));
        tree.branches.length.should.equal(1);
        tree.branches[0].value.should.equal("branch 1");
        tree.branches[0].branches.length.should.equal(1);
        tree.branches[0].branches[0].value.should.equal("deep leaf");
    });
    it.only("finding single leaf in 3 node height=3 tree should work", function () {
        var tree = new Tree("root");
        var branch1 = tree.addBranch(new Tree("branch 1"));
        var deepLeaf = branch1.addBranch(new Tree("deep leaf"));
        var foundLeaves = Tree.getLeaves(tree);
        foundLeaves.length.should.equal(1);
        foundLeaves[0].value.should.equal("deep leaf");
    });
});

