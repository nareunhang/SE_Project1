function id_check() {
    $('#email').change(function () {
        $('#id_check_sucess').hide();
        $('#check').show();
        $('#email').attr("check_result", "fail");
      })

      if ($('#email').val() == '') {
        alert('이메일을 입력해주세요.')
        return;
      }

      id_overlap_input = document.querySelector('input[name="email"]');

      $.ajax({
        url: "{% url 'lawyerAccount:id_check' %}",
        data: {
          'email': id_overlap_input.value
        },
        datatype: 'json',
        success: function (data) {
          console.log(data['overlap']);
          if (data['overlap'] == "fail") {
            alert("이미 존재하는 아이디 입니다.");
            id_overlap_input.focus();
            return;
          } else {
            alert("사용가능한 아이디 입니다.");
            $('#email').attr("check_result", "success");
            $('#id_check_sucess').show();
            $('#check').hide();
            return;
          }
        }
      });
}