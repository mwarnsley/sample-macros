$(document).ready(function(){
    (function(){

        function calculateBMR(){
            var $feet = $(".feet"),
                $inches = $(".inches"),
                $weight = $(".weight"),
                $age = $(".age"),
                $gender = $("#gender");

            function maleCalculate() {
                //Men: BMR=66.47+ (13.75 x W) + (5.0 x H) - (6.75 x A)
                var $height = (parseInt($feet.val() * 12) + parseInt($inches.val() * 1)) * 2.54 * 5.0,
                    $maleWeight = (parseInt($weight.val() / 2.2)) * 13.75,
                    $maleAge = (parseInt($age.val())) * 6.75,
                    $bmrAdd = 66.47,
                    $maleBMR = ($bmrAdd + $maleWeight + $height - $maleAge).toFixed();
                $("#results").val($maleBMR);
            }

            function femaleCalculate(){
                //Women: BMR=665.09 + (9.56 x W) + (1.84 x H) - (4.67 x A)
                var $height = (parseInt($feet.val() * 12) + parseInt($inches.val() * 1)) * 2.54 * 1.84,
                    $femaleWeight = (parseInt($weight.val() / 2.2)) * 9.56,
                    $femaleAge = (parseInt($age.val())) * 4.67,
                    $bmrAdd = 665.09,
                    $femaleBMR = ($bmrAdd + $femaleWeight + $height - $femaleAge).toFixed();
                $("#results").val($femaleBMR);
            }

            $(".calc").on('click', function(){
                if($gender.val() === 'male'){
                    maleCalculate();
                }else{
                    femaleCalculate();
                }
            });

            $(".reset").on('click', function(){
                $("input").val('');
                $("#results").val('');
            });
        }
        calculateBMR();

    })();
});