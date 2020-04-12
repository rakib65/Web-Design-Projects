<!DOCTYPE html>
<html lang="en">

<head>

    <?php  
        $firstName = $_POST['fname'];
        $lastName = $_POST['lname'];
        $eMail = $_POST['email'];
        $phoneNo= $_POST['phone'];
    ?>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript">
        var fname = '<?php echo $firstName; ?>';
        var lname = '<?php echo $lastName; ?>';
        var email = '<?php echo $eMail; ?>';
        var phone = '<?php echo $phoneNo; ?>';

        var data = 'fname=' + fname + '&lname=' + lname + '&email=' + email + '&phone=' + phone;
        $.ajax({
            type: "GET",
            url: "https://hooks.zapier.com/hooks/catch/2153825/rlh015/",
            data: data,
            dataType: "json",
            success: function() {
                $('#exampleModal').modal('show');
                // window.location.replace("thank.html");
            },
            beforeSend: function() {}
        });

    </script>

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/rland.css">
</head>

<body>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">MiNDFL&reg; fit</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                </div>
                <div class="modal-body">
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-sm-8 col-xs-12">
                            <div class="thank-text-wrapper text-center">
                                <div class="box-1">
                                    <div class="box-2">
                                        <h2>Thank You!</h2>
                                        <p>We will contact you shortly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="text-center ">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript">
        $('#exampleModal').on('hide.bs.modal', function(e) {
            window.location.replace("index.html");
        })

    </script>
</body>

</html>
