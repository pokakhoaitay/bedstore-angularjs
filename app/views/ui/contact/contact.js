angular.module('myApp.contact', ['ui.router'])
    .config(Config)
    .controller('ContactCtrl', ContactCtrl);


function Config($stateProvider) {
    $stateProvider
        .state('root.contact', {
            url: '/contact',
            views: {
                '@': {
                    templateUrl: "views/ui/contact/contact.html",
                    controller: 'ContactCtrl',
                }
            }

        })

}

function ContactCtrl(Helper, $scope, ContactService, $http) {
    $scope.contact = {name: null, email: null, messages: null};
    $scope.contactOriginal = angular.copy($scope.contact);
    $scope.canPost = function () {
        return $scope.contactForm.$dirty &&
            $scope.contactForm.$valid;
    }
    $scope.createContact = function (contact) {
        ContactService.createContact(contact, function (response) {
            if (response.data.status) {
                $scope.contact = angular.copy($scope.contactOriginal);
                $scope.contactForm.$setPristine();
                $scope.contactForm.$setUntouched();
                alert('Thank you!');//TODO: implement angular material modal
            }

        });

    }

    $scope.test = function () {
        $http.get(utils.GetApiUrl('test')).then(function (res) {
            utils.logWithCheck(res.data.data);
        }, function (res) {
        });
    }
    $scope.testPost = function () {
        $http.post(
            utils.GetApiUrl('test-post'),
            $.param({'name': 'Hong Tron 100%', 'age': 26, 'mes': '^dds $# @30 <> < > ? /'})
        ).then(function (response) {
            utils.logWithCheck(response.data.data);
        }, function (res) {
        });
    }
};