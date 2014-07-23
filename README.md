Dendro: a simple tree data structure.
====

[![Build Status](https://travis-ci.org/sanx/dendro.svg?branch=master)](https://travis-ci.org/sanx/dendro)

Installation
----

`npm install --save dendro`

Usage
----

    var Tree = require('dendro');
    
    var tree = new Tree(nodeValue);

Example
----

    var Tree = require('dendro');
    
    var tree = new Tree("root node value");

    tree.addBranch(new Tree("level 2, branch 1"));

    var level2Branch2 = tree.addBranch(new Tree("level 2, branch 2"));

    level2Branch2.addBranch(new Tree("level 3, branch 1"));

    level2Branch2.addBranch(new Tree("level 3, branch 2"));

    console.log(JSON.stringify(tree, ' ', 4));

    console.log(JSON.stringify(Tree.getLeaves(tree), ' ', 4));

outputs:

    {
        "value": "root node value",
        "branches": [
            {
                "value": "level 2, branch 1",
                "branches": null
            },
            {
                "value": "level 2, branch 2",
                "branches": [
                    {
                        "value": "level 3, branch 1",
                        "branches": null
                    },
                    {
                        "value": "level 3, branch 2",
                        "branches": null
                    }
                ]
            }
        ]
    }

    [
        {
            "value": "level 2, branch 1",
            "branches": null
        },
        {
            "value": "level 3, branch 1",
            "branches": null
        },
        {
            "value": "level 3, branch 2",
            "branches": null
        }
    ]
    
License
----

MIT
