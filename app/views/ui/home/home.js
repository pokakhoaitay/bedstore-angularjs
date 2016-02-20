    angular.module('myApp').controller('HomeCtrl', HomeCtrl);
    function HomeCtrl(Helper) {
        Helper.broadcastWhat('handlChangeIsHomePage', true);


        $(document).ready(function () {
            $('.banner').revolution({
                delay: 9000,
                startwidth: 1170,
                startheight: 500,
                hideThumbs: 10,
                fullWidth: "on",
                autoHeight: 'on',
                forceFullWidth: "on",
                hideTimerBar: 'on',
                // fullScreen:'on'
                onHoverStop: 'off'
            });

        });
    }
;