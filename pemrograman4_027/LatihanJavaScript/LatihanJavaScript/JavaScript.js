//< !DOCTYPE html >
//    <html>
//        <head>
//            <meta charset="utf-8" />
//            <title>Kalkulator</title>
//            <script>
//                function tambah() {
//                    let a = document.getElementById("bilangan1").value;
//                let b = document.getElementById("bilangan2").value;
//                document.getElementById("hasil").value = parseInt(a) + parseInt(b);
//        }


//                let tambah = function () {
//                    let a = document.getElementById("bilangan1").value;
//                let b = document.getElementById("bilangan2").value;
//                document.getElementById("hasil").value = parseInt(a) + parseInt(b);
//	}


//	let tambah = () => {
//                    let a = document.getElementById("bilangan1").value;
//                let b = document.getElementById("bilangan2").value;
//                document.getElementById("hasil").value = parseInt(a) + parseInt(b);
//	}

//                function kurang() {
//                    let a = document.getElementById("bilangan1").value;
//                let b = document.getElementById("bilangan2").value;
//                document.getElementById("hasil").value = parseInt(a) - parseInt(b);
//        }
//                function kali() {
//                    let a = document.getElementById("bilangan1").value;
//                let b = document.getElementById("bilangan2").value;
//                document.getElementById("hasil").value = parseInt(a) * parseInt(b);
//        }
//                function bagi() {
//                    let a = document.getElementById("bilangan1").value;
//                let b = document.getElementById("bilangan2").value;
//                document.getElementById("hasil").value = parseInt(a) / parseInt(b);
//        }
//                function pangkat() {
//                    let a = document.getElementById("bilangan1").value;
//                let b = document.getElementById("bilangan2").value;
//                document.getElementById("hasil").value = parseInt(a) ** parseInt(b);
//        }


//                function cekAngka() {
//		        {/*const bil1 = parseInt(document.getElementById("bilangan1").value);*/}
//                const bil2 = parseInt(document.getElementById("bilangan2").value);

//                if (bil1 < bil2) {
//                    document.getElementById("output").innerHTML = bil1 + "lebih kecil daripada " + bil2;
//		} else if (bil1 > bil2) {
//                    document.getElementsByClassName("myClass")[0].innerHTML = bil1 + "lebih besar daripada " + bil2;
//		} else {
//                    document.getElementsByTagName("p")[0].innerHTML = bil1 + "sama dengan " + bil2;
//		}

//                const bil1 = parseInt($("#bilangan1").val());
//                const bil2 = parseInt($("#bilangan2").val());


//                if (bil1 < bil2) {
//                    $("#output").html(bil1 + "lebih kecil daripada " + bil2);
//                $("#output").css("color", "blue");
//		} else if (bil1 > bil2) {
//                    $("#myClass").html(bil1 + "lebih besar daripada " + bil2);
//		} else {
//                    $("p").html(bil1 + "sama dengan " + bil2);
//		}





//            </script>
//        </head>
//        <body>
//            <table style="width: 100%;">
//                <tr>
//                    <td>
//                        <label for="bilangan1">Bilangan 1</label>
//                        <br />
//                        <input type="text" id="bilangan1" />
//                    </td>
//                    <td>
//                        <label for="bilangan2">Bilangan 2</label>
//                        <br />
//                        <input type="text" id="bilangan2" />
//                    </td>
//                    <td>
//                        <label for="hasil">Hasil</label>
//                        <br />
//                        <input type="text" id="hasil" />
//                    </td>
//                </tr>
//            </table>
//            <br />
//            <table style="width: 100%;">
//                <tr>
//                    <td>
//                        <input type="button" id="jumlah" value="+" style="width: 100%;" onclick="tambah();" />
//                    </td>
//                    <td>
//                        <input type="button" id="kurang" value="-" style="width: 100%;" onclick="kurang();" />
//                    </td>
//                    <td>
//                        <input type="button" id="kali" value="x" style="width: 100%;" onclick="kali();" />
//                    </td>
//                    <td>
//                        <input type="button" id="bagi" value=":" style="width: 100%;" onclick="bagi();" />
//                    </td>
//                    <td>
//                        <input type="button" id="pangkat" value="**" style="width: 100%;" onclick="pangkat();" />
//                    </td>
//                </tr>
//            </table>
//        </body>
//    </html>