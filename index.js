var Tree = function (value) {
    this.value = value;
    this.branches = null;
};

Tree.prototype.addBranch = function (branchTree) {
    this.branches = this.branches || [];
    this.branches.push(branchTree);
    return branchTree;
};

Tree.getLeaves = function (tree) {
    var leaves = [];
    if (Tree.isLeaf(tree)) {
        return leaves;
    }
    for (var i=0; i<tree.branches.length; i++) {
        var branch = tree.branches[i];
        if (Tree.isLeaf(branch)) {
            leaves.push(branch);
        } else {
            var branchLeaves = Tree.getLeaves(branch);
            // merge branchLeaves into leaves:
            for (var j=0; j<branchLeaves.length; j++) {
                var branchLeaf = branchLeaves[j];
                leaves.push(branchLeaf);
            }
        }
    }
    return leaves;
};

Tree.prototype.getBranches = function (tree, onlyLeaves) {
    onlyLeaves = (undefined === onlyLeaves) ? false : true;
};

Tree.isLeaf = function (tree) {
    return tree.branches === null;
};

module.exports = Tree;
