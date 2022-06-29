function show_flow() {
    $(document).ready(function () {
        $('.flow').click(function () {
            $('.flowplane').show(500);
        });
        $('.flowcancel').click(function () {
            $('.flowplane').hide(500);
        });

    })
}

function show_principle() {
    $(document).ready(function () {
        $('.principle').click(function () {
            $('.principleplane').show(500);
        });
        $('.principlecancel').click(function () {
            $('.principleplane').hide(500);
        });

    })
}

function show_gallery() {
    let len = students.length;
    //--------------------------------
    /*  let html_front = "<div class='gallery'><a target='_blank' href='yzu";
        let html_middle1 = ".gif'><img class='' src='yzu";
        let html_middle2 = ".gif' alt='Cinque Terre' width='600' height='400'></a><div class='desc'>";
        let html_end = "</div></div>";*/
    //----------------------------------
    let html_container = "<div class='cointer-fluid'>";
    let html_front = "<div class='gallery ";
    let html_middle1 = "'><div class='front'><a target='_blank' href='yzu";
    let html_middle2 = ".gif'><img class='ab' src='yzu";
    let html_middle3 =
        ".gif' alt='Cinque Terre' width='600' height='400'></div><div class='back'><button type='button' class='btn btn-primary'>";
    let html_end = "</button></div></a></div></div>";

    for (i = 0; i < len; i++) {
        let text = html_container;
        text = html_front;
        text += students[i].substr(0, 3);
        text += html_middle1
        text += students[i];
        text += html_middle2;
        text += students[i];
        text += html_middle3;
        text += students[i];
        text += html_end;
        document.write(text);
    }
}

function sel_grade() {
    let grade0=".106",grade1=".107",grade2=".108",grade3=".109",grade4=".110";
    $(document).ready(function () {
        $('#select_grade').change(function (val) {
            var grade = $("#select_grade").val();
            switch (grade) {
                case '106':
                    $(grade0).show();
                    $(grade1).hide();
                    $(grade2).hide();
                    $(grade3).hide();
                    $(grade4).hide();
                    break;
                case '107':
                    $(grade0).hide();
                    $(grade1).show();
                    $(grade2).hide();
                    $(grade3).hide();
                    $(grade4).hide();
                    break;
                case '108':
                    $(grade0).hide();
                    $(grade1).hide();
                    $(grade2).show();
                    $(grade3).hide();
                    $(grade4).hide();
                    break;
                case '109':
                    $(grade0).hide();
                    $(grade1).hide();
                    $(grade2).hide();
                    $(grade3).show();
                    $(grade4).hide();
                    break;
                case '110':
                    $(grade0).hide();
                    $(grade1).hide();
                    $(grade2).hide();
                    $(grade3).hide();
                    $(grade4).show();
                    break;
            }
            console.log(grade);
        })
    })
}