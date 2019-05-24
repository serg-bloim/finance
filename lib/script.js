module = angular.module('BlankApp', ['ngMaterial', 'ngMessages']);
module.controller("myCtrl", ($scope) => {
    $scope.iters = 1;
    $scope.init = {
        iters: 70,
        downpayment: 40000,
        freeMoney: 10000,
        sergeySalary: 8000,
        valyaSalary: 4000,
        expenses: {
            life: 4900,
            rent: 1900
        },
        goals: {
            downpayment: 4000
        }
    };
    $scope.strats=[{
        enabled: true,
        type:'BuyHouse',
        price:400000,
        downpaymentPctn:25,
        mortgage:3200
    },{
        enabled: false,
        type:'BuyHouse',
        price:700000,
        downpaymentPctn:25,
        mortgage:4500

    },{
        enabled: true,
        type:'MakeBaby',
        conditionFlag: 'boughtHouse',
        delay:6,
        workBeforeDecret:6,
        decretAfterBirth:6,
        newSalary:4000
    },
    {
        enabled:true,
        type:'Custom',
        condition:"cp.hasFlag('boughtHouse')",
        effect:''
    }
];

    $scope.calc = () => {
        var init = $scope.init
        init.date = new Date()
        var strats = $scope.strats.filter(s=>s.enabled)
        $scope.results = finjs.calc(init, strats)
        console.log("done");
    }

})